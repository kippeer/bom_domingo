import React from 'react';

export const SleepingCat: React.FC = () => {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Cat Bed */}
      <ellipse
        cx="120"
        cy="150"
        rx="80"
        ry="20"
        className="fill-purple-300 animate-breathe"
        filter="url(#glow)"
      />

      {/* Body */}
      <path
        d="M60 140 C60 100 180 100 180 140 C180 160 60 160 60 140Z"
        className="fill-gray-500 animate-breathe"
        filter="url(#furTexture)"
      />

      {/* Tail */}
      <path
        d="M175 140 C200 140 210 130 220 120"
        className="stroke-gray-500 stroke-[12] round animate-tail-wave"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle
        cx="120"
        cy="110"
        r="40"
        className="fill-gray-500"
        filter="url(#furTexture)"
      />

      {/* Left Ear */}
      <path
        d="M90 85 L80 65 L100 75 Z"
        className="fill-gray-500 animate-ear-twitch"
      />
      <path
        d="M82 67 L90 72"
        className="fill-pink-200 stroke-pink-200 stroke-[4]"
      />

      {/* Right Ear */}
      <path
        d="M150 85 L160 65 L140 75 Z"
        className="fill-gray-500 animate-ear-twitch"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M158 67 L150 72"
        className="fill-pink-200 stroke-pink-200 stroke-[4]"
      />

      {/* Sleeping Eyes */}
      <path
        d="M100 110 L110 110"
        className="stroke-gray-900 stroke-[3]"
        strokeLinecap="round"
      />
      <path
        d="M130 110 L140 110"
        className="stroke-gray-900 stroke-[3]"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M117 115 L123 115"
        className="stroke-pink-300 stroke-[3]"
        strokeLinecap="round"
      />

      {/* Whiskers */}
      <g className="stroke-yellow-100/50 stroke-[1]">
        <path d="M90 115 L70 113" />
        <path d="M90 117 L70 117" />
        <path d="M90 119 L70 121" />
        <path d="M150 115 L170 113" />
        <path d="M150 117 L170 117" />
        <path d="M150 119 L170 121" />
      </g>

      {/* Filters */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodColor="#ffd700" floodOpacity="0.3" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>

        <filter id="furTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
    </svg>
  );
};