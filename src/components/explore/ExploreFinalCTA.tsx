import React from 'react';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface ExploreFinalCTAProps {
  onScrollToCourses: () => void;
}

export const ExploreFinalCTA: React.FC<ExploreFinalCTAProps> = ({
  onScrollToCourses
}) => {
  return (
    <section 
      id="explore-final-cta" 
      className="py-20 lg:py-28 relative bg-[#070707] text-right overflow-hidden"
    >
      {/* Cinematic Deep Burgundy radial glow background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#651F2A]/25 via-[#351117]/15 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121110] border border-[#292521] text-xs font-semibold text-[#D6B978]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بوابة التعلم المتكامل</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            ابدأ رحلتك اليوم
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base lg:text-lg text-[#AAA39A] font-light max-w-xl mx-auto leading-relaxed">
            اختر دورتك الأولى وخطوتك الأولى نحو إتقان اللغة العربية.
          </p>

          {/* Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(214,185,120,0.25)] transition-all active:scale-95 group"
            >
              <BookOpen className="w-4 h-4" />
              <span>استكشف الدورات</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
