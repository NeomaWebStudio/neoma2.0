"use client"
import React from "react";

export const BackgroundGradient: React.FC = () => {
    return (
        <div
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden"
            style={{ backgroundColor: "#05040D" }
            }
        >
            <style jsx > {`
                @keyframes float1 {
                    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    33% { transform: translate(30%, -20%) rotate(120deg) scale(1.3); }
                    66% { transform: translate(-20%, 40%) rotate(240deg) scale(0.9); }
                    100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                }
                @keyframes float2 {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-20%, 30%) rotate(-120deg); }
                    66% { transform: translate(40%, -10%) rotate(-240deg); }
                    100% { transform: translate(0, 0) rotate(-360deg); }
                }
                @keyframes float3 {
                    0% { transform: translate(0, 0); }
                    33% { transform: translate(20%, 20%); }
                    66% { transform: translate(-10%, 10%); }
                    100% { transform: translate(0, 0); }
                }
                @keyframes float4 {
                     0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                     50% { transform: translate(-30%, -30%) rotate(180deg) scale(1.2); }
                     100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                }
                @keyframes float5 {
                    0% { transform: translate(0, 0) rotate(0deg)  scale(1); }
                    33% { transform: translate(-20%, 80%) rotate(-120deg) scale(2.3); }
                    66% { transform: translate(70%, -10%) rotate(-240deg) scale(1.9); }
                    100% { transform: translate(0, 0) rotate(-360deg) scale(1); }
                }
                .gradient-blob {
                    position: absolute;
                    filter: blur(100px);
                    opacity: 0.7;
                    mix-blend-mode: screen;
                    border-radius: 50%;
                    animation: float3 20s infinite ease-in-out;
                }
                .blob-1 {
                    top: 20%;
                    left: -10%;
                    width: 15vw;
                    height: 15vw;
                    background-color: #FFA157;
                    animation-name: float1;
                    animation-duration: 18s;
                }
                .blob-2 {
                    bottom: -10%;
                    right: -10%;
                    width: 15vw;
                    height: 15vw;
                    background-color: #EA8DFF;
                    animation-name: float2;
                    animation-duration: 22s;
                }
                .blob-3 {
                    top: 20%;
                    left: 20%;
                    width: 80vw;
                    height: 80vw;
                    background-color: #05040D;
                    animation-name: float3;
                    animation-duration: 15s;
                    opacity: 0.5;
                }
                .blob-4 {
                    bottom: 20%;
                    left: 10%;
                    width: 20vw;
                    height: 10vw;
                    background-color: #1298FF;
                    animation-name: float4;
                    animation-duration: 20s;
                }
                .blob-5 {
                    top: 40%;
                    right: 20%;
                    width: 10vw;
                    height: 10vw;
                    background-color: #A93CFF;
                    animation-name: float5;
                    animation-duration: 15s;
                    animation-direction: reverse;
                }
            `}</style>

            <div className="gradient-blob blob-1" />
            <div className="gradient-blob blob-2" />
            <div className="gradient-blob blob-3" />
            <div className="gradient-blob blob-4" />
            <div className="gradient-blob blob-5" />

            <div className="absolute inset-0 bg-[#05040D]/10 backdrop-blur-[100px]" />
        </div>
    )
};