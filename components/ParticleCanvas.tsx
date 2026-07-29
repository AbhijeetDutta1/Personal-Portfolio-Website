"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.parentElement;
    if (!section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = section.offsetWidth;
    let height = section.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = 90;
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };
    let animationFrameId: number;

    function makeParticle(): Particle {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 1,
        density: Math.random() * 30 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.15,
      };
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(makeParticle());
      }
    }

    function updateParticle(p: Particle) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x > width) {
        p.x = 0;
        p.baseX = 0;
      }
      if (p.x < 0) {
        p.x = width;
        p.baseX = width;
      }
      if (p.y > height) {
        p.y = 0;
        p.baseY = 0;
      }
      if (p.y < 0) {
        p.y = height;
        p.baseY = height;
      }

      if (mouse.x != null && mouse.y != null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * p.density * 0.6;
          p.y += Math.sin(angle) * force * p.density * 0.6;
        }
      }
    }

    function drawParticle(p: Particle) {
      if (!ctx) return;
      ctx.fillStyle = `rgba(102, 126, 234, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function connectParticles() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        if (mouse.x != null && mouse.y != null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            ctx.strokeStyle = `rgba(118, 75, 162, ${0.25 * (1 - dist / mouse.radius)})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleResize() {
      width = section!.offsetWidth;
      height = section!.offsetHeight;
      canvas!.width = width;
      canvas!.height = height;
      initParticles();
    }

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
