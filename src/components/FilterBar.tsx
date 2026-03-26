import { Search, Filter } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedLevel: string;
  setSelectedLevel: (l: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  levels: string[];
  categories: string[];
}

export function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedLevel,
  setSelectedLevel,
  selectedCategory,
  setSelectedCategory,
  levels,
  categories
}: FilterBarProps) {
  return (
    <div className="bg-card border-2 border-border rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center w-full max-w-5xl mx-auto mb-12">
      <div className="relative flex-grow w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-border bg-background focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all font-medium text-foreground outline-none"
        />
      </div>
      
      <div className="flex gap-4 w-full md:w-auto">
        <div className="relative w-full md:w-48">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full pl-10 pr-8 py-3 rounded-2xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-bold text-foreground appearance-none cursor-pointer outline-none"
          >
            <option value="">All Levels</option>
            {levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <div className="relative w-full md:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border-2 border-border bg-background focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all font-bold text-foreground appearance-none cursor-pointer outline-none"
          >
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
