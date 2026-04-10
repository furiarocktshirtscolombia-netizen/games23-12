import React from 'react';

export const GameThumbnail: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  switch (id) {
    case '1':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#4facf7"/>
          <rect x="40" y="30" width="320" height="160" rx="15" fill="#2c3e50" stroke="#8e44ad" strokeWidth="10"/>
          <text x="200" y="120" fill="#ecf0f1" fontSize="50" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">HELLO!</text>
          <rect x="140" y="150" width="120" height="150" rx="30" fill="#ecf0f1" stroke="#bdc3c7" strokeWidth="5"/>
          <rect x="160" y="170" width="80" height="60" rx="15" fill="#2c3e50"/>
          <path d="M 175 200 Q 185 190 195 200" fill="none" stroke="#2ecc71" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 205 200 Q 215 190 225 200" fill="none" stroke="#2ecc71" strokeWidth="6" strokeLinecap="round"/>
          <line x1="200" y1="150" x2="200" y2="110" stroke="#bdc3c7" strokeWidth="8"/>
          <circle cx="200" cy="100" r="12" fill="#e74c3c"/>
          <path d="M 200 260 A 10 10 0 0 0 190 250 A 10 10 0 0 0 180 260 Q 180 270 200 280 Q 220 270 220 260 A 10 10 0 0 0 210 250 A 10 10 0 0 0 200 260 Z" fill="#e74c3c"/>
          <path d="M 260 220 L 330 140" stroke="#bdc3c7" strokeWidth="12" strokeLinecap="round"/>
          <line x1="330" y1="140" x2="360" y2="110" stroke="#e67e22" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      );
    case '2':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#ff9ff3"/>
          <circle cx="100" cy="100" r="80" fill="#f368e0" opacity="0.5"/>
          <circle cx="300" cy="200" r="100" fill="#f368e0" opacity="0.5"/>
          <g transform="translate(80, 150) rotate(-15)">
            <text x="0" y="0" fill="#feca57" fontSize="120" fontFamily="sans-serif" fontWeight="900" stroke="#fff" strokeWidth="10" strokeLinejoin="round">1</text>
            <circle cx="30" cy="-40" r="6" fill="#2c3e50"/>
            <circle cx="50" cy="-40" r="6" fill="#2c3e50"/>
          </g>
          <g transform="translate(200, 220) rotate(10)">
            <text x="0" y="0" fill="#48dbfb" fontSize="140" fontFamily="sans-serif" fontWeight="900" stroke="#fff" strokeWidth="12" strokeLinejoin="round">2</text>
            <circle cx="40" cy="-50" r="8" fill="#2c3e50"/>
            <circle cx="70" cy="-50" r="8" fill="#2c3e50"/>
          </g>
          <g transform="translate(300, 120) rotate(-25)">
            <text x="0" y="0" fill="#1dd1a1" fontSize="100" fontFamily="sans-serif" fontWeight="900" stroke="#fff" strokeWidth="10" strokeLinejoin="round">3</text>
            <circle cx="30" cy="-30" r="5" fill="#2c3e50"/>
            <circle cx="50" cy="-30" r="5" fill="#2c3e50"/>
          </g>
        </svg>
      );
    case '3':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#00d2d3"/>
          <path d="M 0 50 L 30 0 L 90 0 L 120 50 L 90 100 L 30 100 Z" fill="#0abde3" opacity="0.3"/>
          <path d="M 300 250 L 330 200 L 390 200 L 420 250 L 390 300 L 330 300 Z" fill="#0abde3" opacity="0.3"/>
          <text x="50" y="130" fill="#ff6b6b" fontSize="90" fontFamily="sans-serif" fontWeight="900" transform="rotate(-20 50 130)" stroke="#fff" strokeWidth="8">A</text>
          <text x="140" y="260" fill="#feca57" fontSize="100" fontFamily="sans-serif" fontWeight="900" transform="rotate(15 140 260)" stroke="#fff" strokeWidth="8">B</text>
          <text x="310" y="110" fill="#5f27cd" fontSize="95" fontFamily="sans-serif" fontWeight="900" transform="rotate(-10 310 110)" stroke="#fff" strokeWidth="8">C</text>
          <g transform="translate(200, 120)">
            <ellipse cx="15" cy="-30" rx="30" ry="20" fill="#c8d6e5" transform="rotate(-30 15 -30)" opacity="0.9"/>
            <ellipse cx="-15" cy="-35" rx="25" ry="15" fill="#c8d6e5" transform="rotate(30 -15 -35)" opacity="0.9"/>
            <ellipse cx="0" cy="0" rx="45" ry="35" fill="#feca57"/>
            <path d="M -25 -28 L -25 28 M 0 -35 L 0 35 M 25 -28 L 25 28" stroke="#222f3e" strokeWidth="12"/>
            <circle cx="-45" cy="-10" r="25" fill="#feca57"/>
            <circle cx="-55" cy="-15" r="5" fill="#222f3e"/>
            <circle cx="-35" cy="-15" r="5" fill="#222f3e"/>
            <path d="M -55 -5 Q -45 5 -35 -5" fill="none" stroke="#222f3e" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="45,-5 45,5 65,0" fill="#222f3e"/>
            <path d="M 70 30 Q 120 80 180 30" fill="none" stroke="#fff" strokeWidth="5" strokeDasharray="12,12"/>
          </g>
        </svg>
      );
    case '4':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#5f27cd"/>
          <path d="M 200 150 L 0 0 L 100 0 L 200 150 L 300 0 L 400 0 L 200 150 L 400 100 L 400 200 L 200 150 L 400 300 L 300 300 L 200 150 L 100 300 L 0 300 L 200 150 L 0 200 L 0 100 Z" fill="#341f97" opacity="0.5"/>
          <g transform="translate(60, 80) rotate(-15)">
            <rect x="-40" y="-40" width="120" height="80" rx="20" fill="#ff6b6b" stroke="#fff" strokeWidth="8"/>
            <text x="20" y="15" fill="#fff" fontSize="55" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">HE</text>
          </g>
          <g transform="translate(200, 150) rotate(5)">
            <rect x="-60" y="-50" width="160" height="90" rx="20" fill="#1dd1a1" stroke="#fff" strokeWidth="8"/>
            <text x="20" y="20" fill="#fff" fontSize="65" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">SHE</text>
          </g>
          <g transform="translate(300, 240) rotate(-10)">
            <rect x="-30" y="-40" width="100" height="80" rx="20" fill="#feca57" stroke="#fff" strokeWidth="8"/>
            <text x="20" y="15" fill="#fff" fontSize="55" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">IT</text>
          </g>
        </svg>
      );
    case '5':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#222f3e"/>
          <circle cx="40" cy="60" r="4" fill="#fff"/>
          <circle cx="120" cy="30" r="6" fill="#feca57"/>
          <circle cx="360" cy="80" r="3" fill="#fff"/>
          <circle cx="280" cy="260" r="5" fill="#48dbfb"/>
          <circle cx="70" cy="240" r="4" fill="#fff"/>
          <circle cx="200" cy="280" r="3" fill="#ff9ff3"/>
          <circle cx="330" cy="90" r="50" fill="#ff6b6b"/>
          <ellipse cx="330" cy="90" rx="80" ry="20" fill="none" stroke="#feca57" strokeWidth="10" transform="rotate(-25 330 90)"/>
          <g transform="translate(140, 160) rotate(45)">
            <path d="M -50 25 L -100 0 L -50 -25 Z" fill="#ff9f43"/>
            <path d="M -50 15 L -80 0 L -50 -15 Z" fill="#feca57"/>
            <path d="M -50 -35 L 30 -35 C 70 -35 90 0 90 0 C 90 0 70 35 30 35 L -50 35 Z" fill="#ecf0f1"/>
            <circle cx="20" cy="0" r="18" fill="#48dbfb" stroke="#34495e" strokeWidth="6"/>
            <path d="M -50 -35 L -20 -35 L -50 -70 Z" fill="#ee5253"/>
            <path d="M -50 35 L -20 35 L -50 70 Z" fill="#ee5253"/>
            <line x1="-50" y1="0" x2="0" y2="0" stroke="#ee5253" strokeWidth="8"/>
          </g>
        </svg>
      );
    case '6':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#10ac84"/>
          <path d="M 30 300 L 30 120 L 80 70 L 130 120 L 130 300 Z" fill="#01a3a4" opacity="0.6"/>
          <path d="M 270 300 L 270 100 L 320 50 L 370 100 L 370 300 Z" fill="#01a3a4" opacity="0.6"/>
          <rect x="130" y="200" width="140" height="100" fill="#01a3a4" opacity="0.6"/>
          <g transform="translate(200, 170)">
            <path d="M -60 130 L 60 130 L 40 -30 L -40 -30 Z" fill="#5f27cd"/>
            <path d="M -40 -30 L -80 40 L -50 50 L -20 0 Z" fill="#341f97"/>
            <path d="M 40 -30 L 80 40 L 50 50 L 20 0 Z" fill="#341f97"/>
            <rect x="-45" y="30" width="90" height="12" fill="#feca57"/>
            <circle cx="0" cy="-50" r="35" fill="#f1c27d"/>
            <path d="M -35 -50 Q 0 20 35 -50 Q 0 -20 -35 -50" fill="#ecf0f1"/>
            <circle cx="-12" cy="-60" r="5" fill="#222f3e"/>
            <circle cx="12" cy="-60" r="5" fill="#222f3e"/>
            <circle cx="-12" cy="-60" r="10" fill="none" stroke="#222f3e" strokeWidth="3"/>
            <circle cx="12" cy="-60" r="10" fill="none" stroke="#222f3e" strokeWidth="3"/>
            <line x1="-2" y1="-60" x2="2" y2="-60" stroke="#222f3e" strokeWidth="3"/>
            <path d="M -50 -70 L 50 -70 L 0 -170 Z" fill="#341f97"/>
            <ellipse cx="0" cy="-70" rx="60" ry="12" fill="#341f97"/>
            <path d="M 0 -120 L 5 -105 L 20 -105 L 10 -95 L 15 -80 L 0 -90 L -15 -80 L -10 -95 L -20 -105 L -5 -105 Z" fill="#feca57"/>
            <line x1="60" y1="40" x2="100" y2="-40" stroke="#8395a7" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="100" cy="-40" r="15" fill="#feca57"/>
            <circle cx="130" cy="-60" r="6" fill="#fff"/>
            <circle cx="90" cy="-80" r="4" fill="#fff"/>
            <circle cx="120" cy="-20" r="5" fill="#fff"/>
          </g>
        </svg>
      );
    default:
      return (
        <div className="w-full h-full bg-primary flex items-center justify-center">
          <span className="text-white font-display font-bold text-2xl">{name}</span>
        </div>
      );
  }
};
