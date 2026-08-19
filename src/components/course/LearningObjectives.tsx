import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { CourseDetailData, LearningObjectiveItem } from '../../types';

interface LearningObjectivesProps {
  courseDetails: CourseDetailData;
}

export const LearningObjectives: React.FC<LearningObjectivesProps> = ({ courseDetails }) => {
  const { learningObjectives } = courseDetails;

  // Normalize objectives so both string or object shape are supported
  const normalizedObjectives = learningObjectives.map((obj, idx) => {
    if (typeof obj === 'string') {
      const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
      return {
        orderNumber: numStr,
        title: obj,
        description: 'اكتساب المهارة النحوية وفهم تطبيقاتها الدقيقة في التراكيب اللغوية.'
      };
    }
    return obj as LearningObjectiveItem;
  });

  return (
    <section 
      id="what-you-will-learn" 
      aria-label="ماذا ستتعلم في هذه الدورة"
      className="py-12 sm:py-16 bg-[#070707]"
    >
      <div className="rounded-3xl bg-[#121110] border border-[#292521] p-6 sm:p-10 lg:p-12 relative overflow-hidden text-right">
        
        {/* Subtle Burgundy & Champagne Atmosphere */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#651F2A]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D6B978]/05 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
            <span>المخرجات والمهارات المكتسبة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            ماذا ستتعلم؟
          </h2>
          
          <p className="text-sm sm:text-base text-[#AAA39A] mt-2 font-light max-w-2xl">
            ستتعلم القواعد النحوية بشكل تطبيقي وممنهج يرسخ في ذهنك بعيدًا عن التعقيد أو الحفظ الجاف.
          </p>
        </div>

        {/* Numbered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {normalizedObjectives.map((objective, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 hover:bg-[#181614] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Number & Accent Indicator */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-sm font-mono font-black text-[#D6B978] tracking-widest">
                    {objective.orderNumber}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#292521] group-hover:bg-[#D6B978] transition-colors" />
                </div>

                {/* Objective Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-1.5 group-hover:text-[#F5F1E8] transition-colors">
                  {objective.title}
                </h3>

                {/* Supporting Description */}
                <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Footnote */}
        <div className="mt-8 pt-6 border-t border-[#292521] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777169] relative z-10">
          <span className="font-light">
            كافة المحاور تخضع للتطبيق المباشر مع شواهد حية وتدريبات إعرابية بإشراف الأستاذ أحمد محمود.
          </span>
          <span className="text-[#D6B978] font-medium shrink-0 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>منهج تطبيقي متكامل</span>
          </span>
        </div>

      </div>
    </section>
  );
};
