import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CurriculumUnit, CourseLesson } from '../../types';
import { CourseCurriculumSidebar } from './CourseCurriculumSidebar';

interface CurriculumDrawerMobileProps {
  isOpen: boolean;
  onClose: () => void;
  curriculum: CurriculumUnit[];
  currentLessonId: string;
  completedLessonIds: string[];
  onSelectLesson: (lesson: CourseLesson, unit: CurriculumUnit) => void;
}

export const CurriculumDrawerMobile: React.FC<CurriculumDrawerMobileProps> = ({
  isOpen,
  onClose,
  curriculum,
  currentLessonId,
  completedLessonIds,
  onSelectLesson,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="منهج الدورة"
          className="fixed inset-0 z-50 flex items-end lg:hidden select-none"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Bottom Sheet Modal Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative z-10 w-full max-h-[85vh] bg-[#121110] rounded-t-3xl border-t border-[#292521] shadow-2xl flex flex-col overflow-hidden text-right"
          >
            {/* Grab Handle */}
            <div className="w-12 h-1 rounded-full bg-[#292521] mx-auto mt-3 mb-1" />

            {/* Header */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-[#292521]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D6B978]" />
                <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                  منهج الدورة
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A]"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Curriculum Scrollable View */}
            <div className="flex-1 overflow-y-auto p-4">
              <CourseCurriculumSidebar
                curriculum={curriculum}
                currentLessonId={currentLessonId}
                completedLessonIds={completedLessonIds}
                onSelectLesson={(lesson, unit) => {
                  onSelectLesson(lesson, unit);
                  onClose();
                }}
                className="border-0 shadow-none bg-transparent"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
