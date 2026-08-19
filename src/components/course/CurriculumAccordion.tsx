import React, { useState } from 'react';
import { 
  ChevronDown, 
  Play, 
  Lock, 
  Clock, 
  BookOpen, 
  Sparkles,
  PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CourseDetailData, CourseLesson, CurriculumUnit } from '../../types';

interface CurriculumAccordionProps {
  courseDetails: CourseDetailData;
  onPreviewLesson?: (lesson: CourseLesson, unit: CurriculumUnit) => void;
  onStartLearning?: () => void;
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({
  courseDetails,
  onPreviewLesson,
  onStartLearning,
}) => {
  const { curriculum, course } = courseDetails;

  // By default, open the first unit
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({
    [curriculum[0]?.id || 'unit-1']: true,
  });

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    curriculum.forEach((unit) => {
      allOpen[unit.id] = true;
    });
    setOpenUnits(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenUnits({});
  };

  const isAllExpanded = curriculum.length > 0 && curriculum.every((u) => openUnits[u.id]);

  return (
    <section 
      id="course-curriculum" 
      aria-label="محتوى ومنهج الدورة"
      className="py-12 sm:py-16 bg-[#070707]"
    >
      <div className="space-y-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-right">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>المنهج والوحدات التعليمية</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
              محتوى الدورة
            </h2>

            <p className="text-sm sm:text-base text-[#AAA39A] mt-1.5 font-light">
              <span className="text-[#F5F1E8] font-bold">{course.lessonsCount}</span> درسًا • <span className="text-[#F5F1E8] font-bold">{course.durationHours}</span> ساعات من التعلم المنظم
            </p>
          </div>

          {/* Quick Expand/Collapse Actions */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              id="curriculum-toggle-all-btn"
              onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-[#AAA39A] hover:text-[#F5F1E8] transition-all"
            >
              {isAllExpanded ? 'طيّ كل الوحدات' : 'توسيع كل الوحدات'}
            </button>
          </div>
        </div>

        {/* Curriculum Units Accordion Stack */}
        <div className="space-y-4">
          {curriculum.map((unit, unitIdx) => {
            const isOpen = !!openUnits[unit.id];
            const unitNumberFormatted = unitIdx + 1 < 10 ? `0${unitIdx + 1}` : `${unitIdx + 1}`;

            return (
              <div
                key={unit.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#151311] border-[#D6B978]/40 shadow-xl'
                    : 'bg-[#121110] border-[#292521] hover:border-[#292521]/90'
                }`}
              >
                {/* Unit Header Button */}
                <button
                  id={`curriculum-unit-btn-${unit.id}`}
                  onClick={() => toggleUnit(unit.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B978] select-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    {/* Unit Number Monospace Badge */}
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#D6B978] text-[#070707] shadow-md shadow-[#D6B978]/20' 
                          : 'bg-[#181614] border border-[#292521] text-[#D6B978]'
                      }`}
                    >
                      {unitNumberFormatted}
                    </div>

                    <div className="text-right min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-[#D6B978]">
                          {unit.unitNumberArabic}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#777169]" />
                        <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] truncate">
                          {unit.title}
                        </h3>
                      </div>
                      
                      {unit.description && (
                        <p className="text-xs text-[#AAA39A] mt-1 font-light hidden sm:block truncate max-w-xl">
                          {unit.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Unit Metadata & Arrow Indicator */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="text-xs text-[#AAA39A] hidden md:inline-block font-mono bg-[#0C0B0A] px-2.5 py-1 rounded-lg border border-[#292521]/60">
                      {unit.lessonsCount} دروس • {Math.round(unit.durationMinutes / 60) > 0 ? `${Math.round(unit.durationMinutes / 60)} ساعة` : `${unit.durationMinutes} دقيقة`}
                    </span>
                    
                    <div className={`w-9 h-9 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D6B978] border-[#D6B978]/40' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Animated Lessons List */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${unit.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="border-t border-[#292521]/70"
                    >
                      <div className="divide-y divide-[#292521]/50 bg-[#0C0B0A]/60">
                        {unit.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`p-4 sm:p-5 flex items-center justify-between gap-4 text-right transition-all relative group ${
                              lesson.isPreview 
                                ? 'bg-[#151311]/90 hover:bg-[#181614]' 
                                : 'hover:bg-[#151311]/50'
                            }`}
                          >
                            {/* Subtle Champagne Accent on Hover */}
                            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#D6B978] opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Lesson Number & Title */}
                            <div className="flex items-center gap-3.5 flex-1 min-w-0">
                              <span className="text-xs font-mono font-bold text-[#777169] group-hover:text-[#D6B978] transition-colors shrink-0 w-6">
                                {lesson.orderNumber}
                              </span>

                              <div className="min-w-0 flex items-center gap-2">
                                <h4 className="text-sm sm:text-base font-medium text-[#F5F1E8] truncate font-['Cairo',_sans-serif] group-hover:text-[#F5F1E8]">
                                  {lesson.title}
                                </h4>
                              </div>
                            </div>

                            {/* Lesson Meta & Action */}
                            <div className="flex items-center gap-3 shrink-0">
                              {/* Duration */}
                              <div className="flex items-center gap-1.5 text-xs text-[#AAA39A] font-mono">
                                <Clock className="w-3.5 h-3.5 text-[#777169]" />
                                <span>{lesson.durationLabel}</span>
                              </div>

                              {/* Status Indicators: Preview ("معاينة") / Locked / Available */}
                              {lesson.isPreview ? (
                                <button
                                  id={`curriculum-preview-btn-${lesson.id}`}
                                  onClick={() => onPreviewLesson?.(lesson, unit)}
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] text-xs font-bold transition-all shadow-md shadow-[#D6B978]/15"
                                >
                                  <Play className="w-3 h-3 fill-current" />
                                  <span>معاينة</span>
                                </button>
                              ) : lesson.isLocked ? (
                                <div 
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#181614] border border-[#292521] text-[#777169] text-xs"
                                  title="متاح بعد بدء الدورة"
                                >
                                  <Lock className="w-3 h-3" />
                                  <span className="hidden sm:inline">مقفل</span>
                                </div>
                              ) : (
                                <button
                                  onClick={onStartLearning}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181614] hover:bg-[#D6B978] text-[#AAA39A] hover:text-[#070707] border border-[#292521] hover:border-[#D6B978] text-xs font-medium transition-all"
                                  title="ابدأ التعلم"
                                >
                                  <PlayCircle className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">تشغيل</span>
                                </button>
                              )}
                            </div>

                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
