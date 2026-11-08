import { useState, useRef, useEffect, useCallback } from 'react';
import weddingSongUrl from '/wedding_song.mp3?url';

export function useShehnaiAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Song: "Vela Milan Ni - Jigardan Gadhavi & Yati Upadhyay (Gujarati Wedding Song 2024)"
    const audio = new Audio(weddingSongUrl);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
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
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Audio play prevented (requires user gesture):', err);
      });
    }
  }, [isPlaying]);

  return { isPlaying, toggleAudio };
}
