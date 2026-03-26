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
        
        {/* We use a placeholder avatar, but style it nicely */}
        <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-blue-100 flex items-center justify-center">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=TeacherDiego&backgroundColor=b6e3f4&accessoriesProbability=100&clothesColor=262e33&facialHairProbability=100&facialHair=beardMedium&hairColor=2c1b18&top=shortHairShortFlat`} 
            alt="Teacher Diego"
            className="w-full h-full object-cover"
          />
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
