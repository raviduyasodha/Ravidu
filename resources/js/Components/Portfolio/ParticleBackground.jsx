import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let clouds = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Cloud {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Larger size for ambient mist
                this.size = Math.random() * 500 + 300;
                this.speedX = (Math.random() * 0.6 - 0.3);
                this.speedY = (Math.random() * 0.6 - 0.3);

                this.alpha = 0;
                // Higher max alpha for better visibility
                this.maxAlpha = Math.random() * 0.2 + 0.15;
                this.fadeSpeed = 0.002; // Faster fade in/out to be noticeable
                this.fadingIn = true;

                // Brighter indigo shades for visibility
                const colors = ['#818cf8', '#6366f1', '#4f46e5', '#a5b4fc'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.fadingIn) {
                    this.alpha += this.fadeSpeed;
                    if (this.alpha >= this.maxAlpha) this.fadingIn = false;
                } else {
                    this.alpha -= this.fadeSpeed;
                    if (this.alpha <= 0) this.reset();
                }

                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
            }

            draw() {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');

                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            clouds = [];
            // Slightly more clouds
            for (let i = 0; i < 15; i++) {
                clouds.push(new Cloud());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clouds.forEach(cloud => {
                cloud.update();
                cloud.draw();
            });
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
