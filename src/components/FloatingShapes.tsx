import React from 'react';

export const FloatingShapes: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 3D Glossy Sphere 1 - Top Right */}
      <div className="absolute top-12 right-[5%] sm:right-[10%] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 animate-float-slow opacity-90">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[0_20px_30px_rgba(124,92,255,0.25)]">
          <defs>
            <radialGradient id="sphereGrad1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#B2A4FF" />
              <stop offset="65%" stopColor="#7C5CFF" />
              <stop offset="100%" stopColor="#4F35C7" />
            </radialGradient>
            <radialGradient id="sphereHighlight" cx="30%" cy="30%" r="35%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="url(#sphereGrad1)" />
          <ellipse cx="60" cy="55" rx="35" ry="25" fill="url(#sphereHighlight)" transform="rotate(-20 60 55)" />
        </svg>
      </div>

      {/* 3D Torus / Ring - Center Right */}
      <div className="absolute top-[48%] right-[-2%] sm:right-[3%] w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 animate-float-delayed opacity-85">
        <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[0_25px_35px_rgba(79,139,255,0.25)]">
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7AC6" />
              <stop offset="50%" stopColor="#4F8BFF" />
              <stop offset="100%" stopColor="#7C5CFF" />
            </linearGradient>
            <radialGradient id="torusInnerGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M90 20 C128.66 20 160 51.34 160 90 C160 128.66 128.66 160 90 160 C51.34 160 20 128.66 20 90 C20 51.34 51.34 20 90 20 Z M90 55 C70.67 55 55 70.67 55 90 C55 109.33 70.67 125 90 125 C109.33 125 125 109.33 125 90 C125 70.67 109.33 55 90 55 Z"
            fill="url(#torusGrad)"
          />
          <path
            d="M90 25 C125 25 155 55 155 90 C155 98 153 105 149 112 C143 85 120 62 90 62 C75 62 61 68 51 78 C57 48 80 25 90 25 Z"
            fill="url(#torusInnerGlow)"
          />
        </svg>
      </div>

      {/* 3D Isometric Rounded Cube - Bottom Left of Hero */}
      <div className="absolute bottom-6 left-[2%] sm:left-[8%] w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 animate-float-gentle opacity-80">
        <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-[0_20px_25px_rgba(255,122,198,0.2)]">
          <defs>
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE0F3" />
              <stop offset="100%" stopColor="#FF9CD4" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF7AC6" />
              <stop offset="100%" stopColor="#B83F8A" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFF" />
              <stop offset="100%" stopColor="#4F35C7" />
            </linearGradient>
          </defs>
          {/* Top face */}
          <polygon points="70,25 115,50 70,75 25,50" fill="url(#cubeTop)" />
          {/* Left face */}
          <polygon points="25,50 70,75 70,120 25,95" fill="url(#cubeLeft)" />
          {/* Right face */}
          <polygon points="70,75 115,50 115,95 70,120" fill="url(#cubeRight)" />
        </svg>
      </div>

      {/* 3D Glossy Sphere 2 - Small Accent Pill / Ball Top Left */}
      <div className="absolute top-20 left-[4%] sm:left-[12%] w-14 h-14 sm:w-18 sm:h-18 animate-float-delayed opacity-75">
        <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-[0_10px_20px_rgba(79,139,255,0.25)]">
          <defs>
            <radialGradient id="sphereGrad2" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#9BC0FF" />
              <stop offset="70%" stopColor="#4F8BFF" />
              <stop offset="100%" stopColor="#2451C2" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="35" fill="url(#sphereGrad2)" />
        </svg>
      </div>

      {/* Ambient soft glow blobs in the background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-32 w-80 h-80 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-pink/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
