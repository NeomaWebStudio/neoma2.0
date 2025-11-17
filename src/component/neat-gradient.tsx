"use client"
import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

export const NeatGradientComp: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            "colors": [
                {
                    color: '#FFA157',
                    enabled: true,
                },
                {
                    color: '#EA8DFF',
                    enabled: true,
                },
                {
                    color: '#05040D',
                    enabled: true,
                },
                {
                    color: '#A93CFF',
                    enabled: true,
                },
                {
                    color: '#1298FF',
                    enabled: true,
                },
            ],
            speed: 5.5,
            horizontalPressure: 3,
            verticalPressure: 4,
            waveFrequencyX: 2,
            waveFrequencyY: 3,
            waveAmplitude: 5,
            shadows: 2,
            highlights: 5,
            colorBrightness: 0.16,
            colorSaturation: 7,
            wireframe: false,
            colorBlending: 10,
            backgroundColor: '#05040D',
            backgroundAlpha: 0.95,
            grainScale: 0,
            grainSparsity: 0,
            grainIntensity: 0,
            grainSpeed: 1,
            resolution: 1,
            yOffset: 0,
        });

        return gradientRef.current.destroy;

    }, [canvasRef.current]);

    return (
        <canvas
            className={'bg-color'}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                isolation: "isolate",
            }}
            ref={canvasRef}
        />
    );
};