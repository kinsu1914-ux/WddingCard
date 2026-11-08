import React, { useEffect, useRef } from 'react';

interface FallingPetalsProps {
  active: boolean;
}

class Petal {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedY: number = 0;
  speedX: number = 0;
  angle: number = 0;
  spin: number = 0;
  color: string = '#FF9800';

  constructor(width: number, height: number) {
    this.reset(width, height, true);
  }

  reset(width: number, height: number, initial = false) {
    this.x = Math.random() * width;
    this.y = initial ? Math.random() * height - height : -10;
    this.size = Math.random() * 8 + 6;
    this.speedY = Math.random() * 1.5 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.angle = Math.random() * 360;
    this.spin = Math.random() * 2 - 1;
    const colors = ['#FF9800', '#FF5722', '#E91E63', '#FFC107', '#D4AF37'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(width: number, height: number) {
    this.y += this.speedY;
    this.x += this.speedX;
    this.angle += this.spin;
    if (this.y > height) {
      this.reset(width, height);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export const FallingPetals: React.FC<FallingPetalsProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      petals = Array.from({ length: 35 }, () => new Petal(canvas.width, canvas.height));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (active) {
        for (const petal of petals) {
          petal.update(canvas.width, canvas.height);
          petal.draw(ctx);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      id="petalCanvas"
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};

