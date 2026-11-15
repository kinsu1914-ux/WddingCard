import { useState, useRef, useEffect, useCallback } from 'react';
import weddingSongUrl from '/wedding_song.mp3?url';

export function useShehnaiAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingBeforeHiddenRef = useRef<boolean>(false);

  useEffect(() => {
    // Song: "Vela Milan Ni - Jigardan Gadhavi & Yati Upadhyay (Gujarati Wedding Song 2024)"
    const audio = new Audio(weddingSongUrl);
    audio.loop = true;
    audio.preload = 'none';
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Stop / Pause music when browser tab is minimized, switched, or in the background
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        if (!audioRef.current.paused) {
          wasPlayingBeforeHiddenRef.current = true;
          audioRef.current.pause();
        } else {
          wasPlayingBeforeHiddenRef.current = false;
        }
      } else {
        // Automatically resume when returning to the tab if it was playing before
        if (wasPlayingBeforeHiddenRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    // Stop music immediately when window/tab is closing or unloading
    const handlePageHide = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);

      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      wasPlayingBeforeHiddenRef.current = false;
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Audio play prevented (requires user gesture):', err);
      });
    }
  }, [isPlaying]);

  return { isPlaying, toggleAudio };
}
