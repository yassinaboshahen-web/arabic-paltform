import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingAIButtonProps {
  onClick: () => void;
  isOpen?: boolean;
}

export const FloatingAIButton: React.FC<FloatingAIButtonProps> = ({ onClick, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Tooltip on Hover in RTL (sits to the right of the button) */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:block px-3 py-1.5 rounded-xl bg-[#121110]/95 backdrop-blur-md border border-[#292521] text-xs font-semibold text-[#F5F1E8] shadow-2xl pointer-events-none whitespace-nowrap"
          >
            <span>المساعد اللغوي ✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Element */}
      <motion.button
        id="floating-ai-button"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="مساعدك التعليمي الذكي"
        className="w-13 h-13 rounded-2xl bg-[#151311]/95 backdrop-blur-xl border border-[#D6B978]/40 hover:border-[#D6B978] text-[#D6B978] shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_36px_rgba(214,185,120,0.25)] flex items-center justify-center transition-all duration-300 group"
      >
        <span className="text-xl filter drop-shadow-[0_0_8px_rgba(214,185,120,0.6)]">
          ✨
        </span>
      </motion.button>
    </div>
  );
};
