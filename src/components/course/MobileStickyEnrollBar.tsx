import React from 'react';
import { GraduationCap, Bookmark, Check, Star } from 'lucide-react';
import { CourseDetailData } from '../../types';

interface MobileStickyEnrollBarProps {
  courseDetails: CourseDetailData;
  isSaved: boolean;
  onToggleSave: () => void;
  onStartLearning: () => void;
}

export const MobileStickyEnrollBar: React.FC<MobileStickyEnrollBarProps> = ({
  courseDetails,
  isSaved,
  onToggleSave,
  onStartLearning,
}) => {
  const { course } = courseDetails;

  return (
    <div 
      id="mobile-sticky-enroll-bar"
      aria-label="شريط الانضمام السريع"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#0C0B0A]/95 backdrop-blur-xl border-t border-[#292521] shadow-2xl safe-area-pb"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Course Info Snippet */}
        <div className="text-right min-w-0 flex-1">
          <h4 className="text-xs font-bold text-[#F5F1E8] truncate font-['Cairo',_sans-serif]">
            {course.title}
          </h4>
          <div className="flex items-center gap-2 text-[11px] text-[#AAA39A] mt-0.5">
            <span className="flex items-center gap-1 font-bold text-[#D6B978]">
              <Star className="w-3 h-3 fill-[#D6B978]" />
              {course.rating.toFixed(1)}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777169]" />
            <span>{course.lessonsCount} درسًا</span>
            <span className="w-1 h-1 rounded-full bg-[#777169]" />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="mobile-sticky-save-btn"
            onClick={onToggleSave}
            aria-label={isSaved ? 'تم حفظ الدورة' : 'حفظ الدورة'}
            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors active:scale-95 ${
              isSaved 
                ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]' 
                : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
          >
            {isSaved ? <Check className="w-5 h-5 text-[#D6B978]" /> : <Bookmark className="w-5 h-5" />}
          </button>

          <button
            id="mobile-sticky-start-btn"
            onClick={onStartLearning}
            className="px-5 h-11 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            <span>ابدأ التعلم</span>
          </button>
        </div>

      </div>
    </div>
  );
};
