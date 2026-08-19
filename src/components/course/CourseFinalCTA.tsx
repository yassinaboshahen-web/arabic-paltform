import React from 'react';
import { Sparkles, GraduationCap, ArrowLeft, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { CourseDetailData } from '../../types';

interface CourseFinalCTAProps {
  courseDetails: CourseDetailData;
  onStartLearning: () => void;
}

export const CourseFinalCTA: React.FC<CourseFinalCTAProps> = ({
  courseDetails,
  onStartLearning,
}) => {
  const { course } = courseDetails;

  return (
    <section 
      id="course-final-cta" 
      aria-label="الانضمام للدورة"
      className="relative py-16 sm:py-24 bg-[#070707] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Cinematic Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#151311] to-[#0C0B0A] border border-[#292521] p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl">
          
          {/* Deep Burgundy & Champagne Atmospheric Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-[#651F2A]/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[220px] bg-[#D6B978]/09 rounded-full blur-[110px] pointer-events-none" />

          {/* Inner Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181614] border border-[#292521] text-xs font-bold text-[#D6B978] mb-6">
              <Sparkles className="w-4 h-4 text-[#D6B978]" />
              <span>خطوتك الأولى نحو الإتقان الأكاديمي</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight mb-4">
              ابدأ رحلتك في إتقان اللغة العربية اليوم
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#AAA39A] font-light leading-relaxed max-w-2xl mb-8">
              انضم إلى أكثر من 8,500 طالب يتعلمون بأسلوب واضح وممتع مع الأستاذ أحمد محمود.
            </p>

            {/* Primary CTA Button */}
            <button
              id="final-cta-start-learning-btn"
              onClick={onStartLearning}
              className="px-10 py-4.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-extrabold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-[#D6B978]/20 hover:shadow-2xl hover:shadow-[#D6B978]/30 flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
              <span>ابدأ التعلم الآن</span>
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>

            {/* Value Guarantees Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#AAA39A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D6B978]" />
                وصول فوري للدروس
              </span>
              <span className="w-1 h-1 rounded-full bg-[#777169] hidden sm:inline-block" />
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D6B978]" />
                شهادة إتمام معتمدة
              </span>
              <span className="w-1 h-1 rounded-full bg-[#777169] hidden sm:inline-block" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D6B978]" />
                ضمان رضا تام وتجربة تعليمية فاخرة
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
