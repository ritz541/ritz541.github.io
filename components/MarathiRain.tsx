import React, { useEffect, useRef } from 'react';

const MarathiRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Marathi Characters (Devanagari script)
        const marathiChars = 'अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळक्षज्ञ१२३४५६७८९०';
        const charArray = marathiChars.split('');

        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random heights above screen
        }

        let lastTime = 0;
        const fps = 24; // Lower FPS for "heavier" cinematic matrix feel
        const interval = 1000 / fps;

        const draw = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(draw);

            // Throttle speed
            const deltaTime = currentTime - lastTime;
            if (deltaTime < interval) return;

            lastTime = currentTime - (deltaTime % interval);

            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(3, 3, 3, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'Gotu', monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Pick a random char
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // Bright Heads Logic
                const isBright = Math.random() > 0.95;
                if (isBright) {
                    const neonColors = ['#ccff00', '#ff2d55', '#00f0ff']; // Acid Green, Hot Pink, Electric Blue
                    const color = neonColors[Math.floor(Math.random() * neonColors.length)];
                    ctx.fillStyle = color;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = color;
                } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.shadowBlur = 0;
                }

                // Draw char
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset shadow
                ctx.shadowBlur = 0;

                // Send drop back to top
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-50 block w-full h-full"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default MarathiRain;
