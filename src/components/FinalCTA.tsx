import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onStartNow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartNow }) => {
  return (
    <section 
      id="final-cta" 
      className="relative py-24 lg:py-36 bg-[#070707] overflow-hidden text-center"
    >
      {/* Cinematic Dramatic Ambient Burgundy & Champagne Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#651F2A]/30 via-[#40121A]/20 to-[#D6B978]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 bg-radial-fade pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>خطوتك الحقيقية نحو الفصاحة والبيان</span>
        </motion.div>

        {/* Major Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.2] mb-6"
        >
          جاهز تبدأ رحلتك؟
        </motion.h2>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#AAA39A] font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          خطوتك الأولى نحو فهم أفضل للغة العربية تبدأ من هنا. انضم إلى آلاف الطلاب الذين غيروا نظرتهم للغة وقواعدها.
        </motion.p>

        {/* Primary Action Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            id="final-cta-start-btn"
            onClick={onStartNow}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-base shadow-[0_4px_30px_rgba(214,185,120,0.3)] hover:shadow-[0_6px_36px_rgba(214,185,120,0.45)] flex items-center justify-center gap-2 group transition-all duration-200 active:scale-98"
          >
            <span>ابدأ الآن</span>
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          </button>
        </motion.div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#AAA39A]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D6B978]" />
            <span>تسجيل فوري بدون تعقيدات</span>
          </div>
          <span className="text-[#292521]">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D6B978]" />
            <span>متابعة شخصية من الأستاذ أحمد</span>
          </div>
          <span className="text-[#292521]">•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D6B978]" />
            <span>مساعد ذكي متاح طوال اليوم</span>
          </div>
        </div>

      </div>
    </section>
  );
};
