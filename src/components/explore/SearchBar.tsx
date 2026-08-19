import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onClear: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  onClear
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="w-full"
    >
      <div className="relative group">
        {/* Search Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777169] group-focus-within:text-[#D6B978] transition-colors pointer-events-none">
          <Search className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="ابحث عن دورة، درس، أو موضوع..."
          className="w-full bg-[#121110] text-[#F5F1E8] placeholder-[#777169] text-sm sm:text-base pr-12 pl-12 py-4 rounded-2xl border border-[#292521] focus:border-[#D6B978] focus:shadow-[0_0_24px_rgba(214,185,120,0.12)] focus:outline-none transition-all duration-200"
          aria-label="ابحث عن دورة أو درس"
        />

        {/* Clear Button (appears when query is not empty) */}
        {query && (
          <button
            onClick={() => {
              onClear();
              inputRef.current?.focus();
            }}
            aria-label="مسح البحث"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#181614] hover:bg-[#201D1A] text-[#AAA39A] hover:text-[#F5F1E8] border border-[#292521] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
