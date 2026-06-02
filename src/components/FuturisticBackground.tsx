"use client";

import React, { useEffect, useRef } from "react";

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      originalAlpha: number;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        
        // Cyberpunk colors: Cyan, Magenta, Purple
        const colors = [
          "rgba(6, 182, 212, ",  // Cyan
          "rgba(217, 70, 239, ", // Magenta
          "rgba(139, 92, 246, ", // Purple
          "rgba(59, 130, 246, ", // Blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.originalAlpha = Math.random() * 0.4 + 0.15;
        this.alpha = this.originalAlpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction with mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
          this.alpha = Math.min(0.8, this.originalAlpha + force * 0.5);
        } else {
          if (this.alpha > this.originalAlpha) {
            this.alpha -= 0.01;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = `${this.color}${this.alpha})`;
        c.shadowColor = `${this.color}0.5)`;
        c.shadowBlur = 4;
        c.fill();
        c.shadowBlur = 0; // Reset
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background glow (simulating 3D space)
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      grad.addColorStop(0, "#080710");
      grad.addColorStop(0.5, "#030206");
      grad.addColorStop(1, "#010103");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw large static soft glowing spheres in background
      ctx.beginPath();
      ctx.arc(width * 0.25, height * 0.3, 200, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(6, 182, 212, 0.03)";
      ctx.filter = "blur(80px)";
      ctx.fill();
      ctx.filter = "none";

      ctx.beginPath();
      ctx.arc(width * 0.8, height * 0.7, 250, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(217, 70, 239, 0.02)";
      ctx.filter = "blur(100px)";
      ctx.fill();
      ctx.filter = "none";

      // Draw connecting lines and update/draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const alpha = (120 - distance) / 120 * 0.15;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 w-full h-full block bg-black"
    />
  );
}
