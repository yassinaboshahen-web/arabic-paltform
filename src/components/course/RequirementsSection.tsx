import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { CourseDetailData } from '../../types';

interface RequirementsSectionProps {
  courseDetails: CourseDetailData;
}

export const RequirementsSection: React.FC<RequirementsSectionProps> = ({ courseDetails }) => {
  const { requirements } = courseDetails;

  return (
    <section 
      id="course-requirements" 
      aria-label="متطلبات الدورة"
      className="py-12 sm:py-16 bg-[#070707]"
    >
      <div className="rounded-3xl bg-[#121110] border border-[#292521] p-6 sm:p-10 lg:p-12 relative overflow-hidden text-right">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
            <span>متطلبات بسيطة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            متطلبات الدورة
          </h2>
          
          <p className="text-sm sm:text-base text-[#AAA39A] mt-1.5 font-light">
            الدورة مصممة لتكون ميسرة ومباشرة دون أي تعقيد تقني أو معرفي مسبق.
          </p>
        </div>

        {/* Minimal Elegant Rows with Champagne Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {requirements.map((req, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/35 transition-colors duration-200"
            >
              {/* Small Champagne Dot/Check Indicator */}
              <div className="w-5 h-5 rounded-full bg-[#181614] border border-[#D6B978]/40 text-[#D6B978] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#D6B978]" />
              </div>

              <span className="text-sm sm:text-base font-medium text-[#F5F1E8] font-['Cairo',_sans-serif]">
                {req}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
