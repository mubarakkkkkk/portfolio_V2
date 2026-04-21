'use client';

import { useEffect, useRef } from 'react';

interface ShootingStarsBackgroundProps {
  starCount?: number;
  speed?: number;
  tailLength?: number;
  bgColor?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ShootingStarsBackground({
  starCount = 3,
  speed = 5,
  tailLength = 150,
  bgColor = '#0a0a1a',
  children,
  className = '',
}: ShootingStarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to match container
    const resize = () => {
  canvas.width = container.offsetWidth;
  canvas.height = container.scrollHeight;
};
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Static background stars
    const bgStars = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.5 + 0.2,
    }));

    class ShootingStar {
      x = 0; y = 0;
      dx = 0; dy = 0;
      len = 0; maxLen = 0;
      spd = 0; alpha = 0;
      phase: 'grow' | 'travel' | 'done' = 'grow';

      constructor(instant = false) {
        this.reset(instant);
      }

      reset(instant = false) {
        const angle = Math.PI / 6 + (Math.random() * Math.PI) / 9;
        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);
        this.x = Math.random() * canvas.width * 0.7;
        this.y = Math.random() * canvas.height * 0.3;
        this.len = 0;
        this.maxLen = tailLength + Math.random() * 80;
        this.spd = speed * 2 + Math.random() * 3;
        this.alpha = 0;
        this.phase = 'grow';

        if (instant) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height * 0.5;
          this.len = this.maxLen * Math.random();
          this.alpha = 1;
          this.phase = 'travel';
        }
      }

      update() {
        this.x += this.dx * this.spd;
        this.y += this.dy * this.spd;

        if (this.phase === 'grow') {
          this.len = Math.min(this.len + this.spd * 2, this.maxLen);
          this.alpha = Math.min(this.alpha + 0.05, 1);
          if (this.len >= this.maxLen) this.phase = 'travel';
        }

        if (this.x > canvas.width + 100 || this.y > canvas.height + 100) {
          this.phase = 'done';
        }
        if (this.phase === 'done') this.reset(false);
      }

      draw() {
        const tailX = this.x - this.dx * this.len;
        const tailY = this.y - this.dy * this.len;

        const grad = ctx!.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.7, `rgba(200,220,255,${this.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${this.alpha})`);

        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(this.x, this.y);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.5;
        ctx!.lineCap = 'round';
        ctx!.stroke();

        // Bright head
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx!.fill();
      }
    }

    const stars = Array.from({ length: starCount }, (_, i) => new ShootingStar(i < starCount));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static stars
      bgStars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      });

      // Draw shooting stars
      stars.forEach((s) => {
        s.update();
        s.draw();
      });

      animRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
    };
  }, [starCount, speed, tailLength]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: bgColor,
      }}
    >
      <canvas
  ref={canvasRef}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  }}
/>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}