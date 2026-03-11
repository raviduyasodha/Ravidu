import React, { useEffect, useRef } from 'react';

export default function SmokeCursor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: 0, y: 0, active: false };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor(x, y, isClick = false) {
                this.x = x;
                this.y = y;
                // Much smaller size for subtle smoke
                this.size = isClick ? Math.random() * 15 + 5 : Math.random() * 12 + 4;
                this.speedX = Math.random() * 1.5 - 0.75;
                this.speedY = Math.random() * 1.5 - 0.75;
                // Very low opacity for gradient feel
                this.alpha = isClick ? 0.3 : 0.15;
                // Professional muted indigo colors
                const colors = ['#818cf8', '#6366f1', '#a5b4fc'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.15;
                this.alpha -= 0.006; // slower fade for silkier smoke
            }
            draw() {
                if (this.alpha <= 0) return;
                ctx.beginPath();
                // Radial gradient for each particle to look like real smoke
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');

                ctx.globalAlpha = this.alpha;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // No heavy shadow blur for professional clean look
                ctx.shadowBlur = 0;
            }
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
            // Spawn 3 smaller particles for a denser but lighter trail
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouse.x, mouse.y));
            }
        };

        const handleClick = (e) => {
            // Subtle spark effect on click
            for (let i = 0; i < 10; i++) {
                const p = new Particle(e.clientX, e.clientY, true);
                p.speedX *= 3;
                p.speedY *= 3;
                particles.push(p);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].alpha <= 0 || particles[i].size <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleClick);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'plus-lighter' }} // changed to plus-lighter for silkier blend
        />
    );
}
