import React from 'react';
import { Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface ExploreHeroProps {
  onExploreClick?: () => void;
}

export const ExploreHero: React.FC<ExploreHeroProps> = () => {
  return (
    <section 
      id="explore-hero" 
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#070707] overflow-hidden text-right"
    >
      {/* Subtle deep burgundy atmospheric glow */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-b from-[#651F2A]/20 via-[#351117]/10 to-transparent rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-20 left-10 w-[350px] h-[250px] bg-[#D6B978]/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Asymmetric Editorial Title & Intro (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Small Champagne Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121110] border border-[#292521] text-xs font-semibold text-[#D6B978] shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>استكشف الدورات</span>
            </motion.div>

            {/* Editorial Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.25]"
            >
              اكتشف عالمك التعليمي
            </motion.h1>

            {/* Editorial Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-[#AAA39A] font-light leading-relaxed max-w-2xl"
            >
              اختر ما يناسب رحلتك التعليمية، واستكشف دورات صُممت لتساعدك على فهم اللغة العربية وإتقانها.
            </motion.p>
          </div>

          {/* Editorial Curation Pill / Teacher Badge on Desktop (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <div className="p-4 rounded-2xl bg-[#121110]/80 border border-[#292521] backdrop-blur-sm w-full sm:w-auto min-w-[260px] flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] shrink-0 shadow-inner">
                <GraduationCap className="w-5 h-5 text-[#D6B978]" />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-[#F5F1E8]">مكتبة أكاديمية متكاملة</div>
                <p className="text-[11px] text-[#AAA39A] mt-0.5 font-light">
                  مناهج موثقة ومُعدة بإشراف الأستاذ أحمد
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
