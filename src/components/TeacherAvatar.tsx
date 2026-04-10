import { motion } from 'motion/react';
import { useState } from 'react';

export function TeacherAvatar() {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    "Welcome to my arcade! Ready to learn?",
    "Hover over a game to see more details!",
    "Try filtering by your English level.",
    "Learning English is fun! Let's play!",
    "You're doing great! Keep it up!"
  ];

  const handleInteraction = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Speech Bubble */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        key={messageIndex}
        className="absolute -top-20 bg-white text-foreground font-bold px-4 py-3 rounded-2xl border-2 border-border shadow-lg z-20 w-64 text-center"
      >
        {messages[messageIndex]}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-border transform rotate-45"></div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleInteraction}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer z-10"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 bg-primary/40 rounded-full animate-pulse"></div>
        
        {/* Custom SVG Avatar for Teacher Diego (30s, beard, brown hair, slightly chubby) */}
        <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-[#b6e3f4] flex items-center justify-center">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pt-4">
            {/* Body (slightly chubby) */}
            <path d="M30 200 C 30 120, 170 120, 170 200" fill="#2c3e50" />
            
            {/* Shirt Collar */}
            <path d="M70 135 L 100 165 L 130 135 Z" fill="#ecf0f1" />
            
            {/* Tie */}
            <path d="M90 155 L 110 155 L 100 200 Z" fill="#e74c3c" />
            
            {/* Neck */}
            <rect x="85" y="110" width="30" height="30" fill="#f1c27d" />
            
            {/* Head */}
            <circle cx="100" cy="80" r="45" fill="#f1c27d" />
            
            {/* Hair (brown) */}
            <path d="M50 80 C 50 20, 150 20, 150 80 C 140 30, 60 30, 50 80" fill="#5c3a21" />
            <path d="M45 80 C 45 40, 100 10, 155 80 C 155 60, 45 60, 45 80" fill="#5c3a21" />
            
            {/* Beard (brown) */}
            <path d="M55 85 C 55 140, 145 140, 145 85 C 130 145, 70 145, 55 85" fill="#5c3a21" />
            <path d="M60 90 C 60 135, 140 135, 140 90 C 120 135, 80 135, 60 90" fill="#4a2e1b" />
            
            {/* Eyes */}
            <circle cx="82" cy="75" r="4" fill="#2c3e50" />
            <circle cx="118" cy="75" r="4" fill="#2c3e50" />
            
            {/* Eyebrows */}
            <path d="M75 65 Q 82 60 90 65" fill="none" stroke="#5c3a21" strokeWidth="3" strokeLinecap="round" />
            <path d="M110 65 Q 118 60 125 65" fill="none" stroke="#5c3a21" strokeWidth="3" strokeLinecap="round" />
            
            {/* Glasses */}
            <rect x="68" y="65" width="28" height="20" rx="4" fill="none" stroke="#2c3e50" strokeWidth="3" />
            <rect x="104" y="65" width="28" height="20" rx="4" fill="none" stroke="#2c3e50" strokeWidth="3" />
            <line x1="96" y1="75" x2="104" y2="75" stroke="#2c3e50" strokeWidth="3" />
            <line x1="55" y1="75" x2="68" y2="75" stroke="#2c3e50" strokeWidth="3" />
            <line x1="132" y1="75" x2="145" y2="75" stroke="#2c3e50" strokeWidth="3" />
            
            {/* Nose */}
            <path d="M100 80 L 95 92 L 100 92" fill="none" stroke="#d49b54" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Smile */}
            <path d="M88 105 Q 100 115 112 105" fill="none" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Floating elements around avatar */}
        {isHovered && (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -20 }}
              className="absolute -right-4 top-0 text-2xl"
            >
              ✨
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -15 }}
              transition={{ delay: 0.1 }}
              className="absolute -left-2 top-4 text-xl"
            >
              🌟
            </motion.div>
          </>
        )}
      </motion.div>
      
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-display font-bold text-foreground">Teacher Diego</h2>
        <p className="text-primary font-bold">English Master</p>
      </div>
    </div>
  );
}
