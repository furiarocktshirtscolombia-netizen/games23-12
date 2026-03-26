import React from 'react';
import { Game } from '../types';
import { motion } from 'motion/react';
import { Play, Star, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useGameSounds } from '../hooks/useGameSounds';

interface GameCardProps {
  game: Game;
  onPlay?: () => void;
}

const levelColors: Record<string, string> = {
  A1: 'bg-green-100 text-green-700 border-green-200',
  A2: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  B1: 'bg-blue-100 text-blue-700 border-blue-200',
  B2: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  C1: 'bg-purple-100 text-purple-700 border-purple-200',
  C2: 'bg-pink-100 text-pink-700 border-pink-200',
};

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  const { playSound } = useGameSounds();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => playSound('hover')}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card-game group flex flex-col h-full relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {game.isNew && (
          <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
            <Sparkles size={12} /> NEW
          </span>
        )}
        {game.isFeatured && (
          <span className="bg-warning text-white text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
            <Star size={12} fill="currentColor" /> FEATURED
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden border-b-2 border-border">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-foreground leading-tight">{game.name}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={cn(
            "text-xs font-bold px-2.5 py-1 rounded-lg border-2",
            levelColors[game.level] || "bg-gray-100 text-gray-700 border-gray-200"
          )}>
            Level {game.level}
          </span>
          <span className="bg-secondary/10 text-secondary border-2 border-secondary/20 text-xs font-bold px-2.5 py-1 rounded-lg">
            {game.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm font-medium mb-6 flex-grow">
          {game.description}
        </p>

        <button 
          onClick={() => {
            playSound('click');
            onPlay?.();
          }}
          className="btn-game btn-primary w-full py-3 text-lg mt-auto flex items-center gap-2"
        >
          <Play size={20} fill="currentColor" />
          Play Game
        </button>
      </div>
    </motion.div>
  );
}
