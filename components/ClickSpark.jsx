'use client';

import { useEffect, useRef } from 'react';

export default function ClickSpark({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 400,
  extraScale = 1,
  children,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener('resize', resize);

    const handleClick = (e) => {
      const now = performance.now();

      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / sparkCount,
          startTime: now,
        });
      }
    };

    window.addEventListener('click', handleClick);

    let animationId;

    const animate = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.startTime;

        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;

        // ease-out
        const eased = progress * (2 - progress);

        const distance =
          eased * sparkRadius * extraScale;

        const lineLength =
          sparkSize * (1 - eased);

        const x1 =
          spark.x +
          Math.cos(spark.angle) * distance;

        const y1 =
          spark.y +
          Math.sin(spark.angle) * distance;

        const x2 =
          spark.x +
          Math.cos(spark.angle) *
            (distance + lineLength);

        const y2 =
          spark.y +
          Math.sin(spark.angle) *
            (distance + lineLength);

        ctx.beginPath();

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    extraScale,
  ]);

  return (
    <>
      {children}

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-20"
      />
    </>
  );
}