import React from 'react';

export function WashiTape({
  className = '',
  color = 'pink',
  angle = '-rotate-1',
}: {
  className?: string;
  color?: 'pink' | 'sage' | 'kraft' | 'cream';
  angle?: string;
}) {
  const bgStyles = {
    pink: 'bg-[#D9A5B0]/75 border-y border-[#c78f9b]/30',
    sage: 'bg-[#A6AD91]/75 border-y border-[#8e9678]/30',
    kraft: 'bg-[#C69F78]/80 border-y border-[#b0875e]/30',
    cream: 'bg-[#E8D8BC]/85 border-y border-[#d4c1a0]/30',
  };

  return (
    <div
      aria-hidden="true"
      className={`h-6 w-24 washi-tape pointer-events-none select-none ${bgStyles[color]} ${angle} ${className}`}
      style={{
        clipPath: 'polygon(0% 2px, 2px 0%, 98% 1px, 100% 3px, 99% calc(100% - 2px), 97% 100%, 2% calc(100% - 1px), 0% calc(100% - 3px))',
      }}
    />
  );
}

export function PaperClip({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-7 h-11 text-[#8c8474] drop-shadow-sm select-none pointer-events-none ${className}`}
      viewBox="0 0 24 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 36V12a8 8 0 0 1 16 0v21a5 5 0 0 1-10 0V15a2 2 0 0 1 4 0v17" transform="translate(-8, -2)" />
    </svg>
  );
}

export function BrassPin({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-4 h-4 rounded-full bg-gradient-to-br from-[#e0bb7d] via-[#b88c49] to-[#6d4d1e] shadow-[0_2px_4px_rgba(0,0,0,0.25)] border border-[#f3d69f]/60 relative select-none pointer-events-none ${className}`}
    >
      <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-transparent to-white/40" />
    </div>
  );
}

export function HandDrawnUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-full h-3 text-[#C69F78] pointer-events-none select-none ${className}`}
      viewBox="0 0 240 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11C45 6 120 7 237 13M12 14C70 10 165 9 228 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-14 h-10 text-[#C69F78] pointer-events-none select-none ${className}`}
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 28C18 12 38 10 52 22" />
      <path d="M42 24L52 22L48 12" />
    </svg>
  );
}

export function HandDrawnStar({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 text-[#C69F78] pointer-events-none select-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L14.8 8.6L22 9.2L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.2L9.2 8.6L12 2Z" />
    </svg>
  );
}

export function HandDrawnSparkle({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-4 h-4 text-[#A6AD91] pointer-events-none select-none ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" />
    </svg>
  );
}
