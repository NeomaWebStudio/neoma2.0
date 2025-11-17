"use client";
import { useEffect, useRef } from "react";

export default function AnimatedWaves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        const colors = ["#f8a357", "#ed6df1", "#a12cff", "#1399ff"];
        let t = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#05040d";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            t += 0.008;
            colors.forEach((color, i) => {
                ctx.beginPath();
                for (let x = 0; x <= canvas.width; x++) {
                    const y =
                        Math.sin(x / 200 + t + i) * 40 +
                        Math.sin(x / 100 + t * 0.5 + i) * 20 +
                        canvas.height / 2;
                    ctx.lineTo(x, y);
                }
                ctx.strokeStyle = color;
                ctx.globalAlpha = 0.25;
                ctx.lineWidth = 2.5;
                ctx.stroke();
            });

            requestAnimationFrame(draw);
        };

        draw();
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
        />
    );
}
