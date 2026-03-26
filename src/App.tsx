import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameCard } from './components/GameCard';
import { FilterBar } from './components/FilterBar';
import { TeacherAvatar } from './components/TeacherAvatar';
import { ThemeToggle } from './components/ThemeToggle';
import { useGames } from './hooks/useGames';
import { useGameSounds } from './hooks/useGameSounds';
import { Gamepad2, Sparkles, Heart, Search } from 'lucide-react';

export default function App() {
  const { games, loading, error } = useGames();
  const { playSound } = useGameSounds();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique levels and categories
  const levels = useMemo(() => Array.from(new Set(games.map(g => g.level))).sort(), [games]);
  const categories = useMemo(() => Array.from(new Set(games.map(g => g.category))).sort(), [games]);

  // Filter games
  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === '' || game.level === selectedLevel;
      const matchesCategory = selectedCategory === '' || game.category === selectedCategory;
      
      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [games, searchQuery, selectedLevel, selectedCategory]);

  const featuredGames = useMemo(() => games.filter(g => g.isFeatured), [games]);

  const handlePlayGame = (game: any) => {
    playSound('success');
    window.open(game.link, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary mb-4"
        >
          <Gamepad2 size={64} />
        </motion.div>
        <h2 className="text-2xl font-display font-bold text-foreground animate-pulse">Loading Arcade...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
        <div className="bg-red-100 text-red-700 p-6 rounded-3xl border-2 border-red-200 max-w-md">
          <h2 className="text-2xl font-display font-bold mb-2">Oops! Something broke.</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4 border-2 border-accent/20">
                Welcome to the Arcade
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                Teacher English <span className="text-primary">Games</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8 max-w-2xl mx-auto md:mx-0">
                Level up your English skills with AI-powered mini-games. Explore grammar, vocabulary, and speaking challenges in a fun, interactive way!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => {
                    playSound('click');
                    document.getElementById('games-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-game btn-primary px-8 py-4 text-xl"
                >
                  Start Playing
                </button>
                <button 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => {
                    playSound('click');
                    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-game btn-secondary px-8 py-4 text-xl"
                >
                  View Featured
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <TeacherAvatar />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredGames.length > 0 && (
        <section id="featured" className="py-16 px-4 bg-card border-y-2 border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-animated opacity-5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="text-warning" size={32} />
              <h2 className="text-4xl font-display font-bold">Featured Games</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGames.slice(0, 3).map(game => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onPlay={() => handlePlayGame(game)} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Games Grid */}
      <section id="games-grid" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">All Games</h2>
          <p className="text-muted-foreground text-lg font-medium">Find the perfect challenge for your level.</p>
        </div>

        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          levels={levels}
          categories={categories}
        />

        <AnimatePresence mode="popLayout">
          {filteredGames.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGames.map(game => (
                <motion.div
                  key={game.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <GameCard 
                    game={game} 
                    onPlay={() => handlePlayGame(game)} 
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6">
                <Search className="text-muted-foreground" size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">No games found</h3>
              <p className="text-muted-foreground font-medium">Try adjusting your filters or search query.</p>
              <button 
                onMouseEnter={() => playSound('hover')}
                onClick={() => {
                  playSound('click');
                  setSearchQuery('');
                  setSelectedLevel('');
                  setSelectedCategory('');
                }}
                className="mt-6 btn-game bg-muted text-foreground hover:bg-gray-200 px-6 py-3"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer / Bio Section */}
      <footer className="bg-card border-t-2 border-border py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Heart className="text-primary" size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Created by Teacher Diego</h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm an English teacher and content creator passionate about making learning fun and accessible. 
            This arcade is designed to help you practice English through interactive, AI-powered challenges. 
            Keep playing, keep learning!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="btn-game bg-gray-800 text-white hover:bg-gray-700 px-6 py-3"
            >
              YouTube Channel
            </a>
            <a 
              href="#" 
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="btn-game bg-blue-600 text-white hover:bg-blue-500 px-6 py-3"
            >
              Follow on Twitter
            </a>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-border text-muted-foreground font-medium text-sm">
            &copy; {new Date().getFullYear()} Teacher English Games. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
