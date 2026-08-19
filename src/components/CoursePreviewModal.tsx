import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  BarChart, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft, 
  Users, 
  Award 
} from 'lucide-react';
import { motion } from 'motion/react';
import { POPULAR_COURSES, FEATURED_COURSE } from '../data/coursesData';

interface CoursePreviewModalProps {
  courseId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onEnrollSuccess?: () => void;
  onNavigateToCourseDetails?: (courseId: string) => void;
}

export const CoursePreviewModal: React.FC<CoursePreviewModalProps> = ({ 
  courseId, 
  isOpen, 
  onClose,
  onNavigateToCourseDetails
}) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!isOpen || !courseId) return null;

  const allCourses = [FEATURED_COURSE, ...POPULAR_COURSES];
  const course = allCourses.find(c => c.id === courseId) || FEATURED_COURSE;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-right"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0C0B0A] border-b border-[#292521] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#181614] text-[#D6B978] border border-[#D6B978]/30">
              {course.categoryArabic}
            </span>
            <div className="flex items-center gap-1 text-[#D6B978] text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
              <span>{course.rating}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="w-9 h-9 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] mb-3">
              {course.title}
            </h2>
            <p className="text-sm sm:text-base text-[#AAA39A] leading-relaxed font-light">
              {course.longDescription || course.description}
            </p>
          </div>

          {/* Teacher Badge Info */}
          <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] font-bold">
                أ.م
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#F5F1E8]">الأستاذ أحمد محمود</h4>
                <p className="text-[11px] text-[#AAA39A]">مدرس المادة ومعد المنهج المعتمد</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#D6B978]">
              <ShieldCheck className="w-4 h-4 text-[#D6B978]" />
              <span>متابعة شخصية</span>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521] text-center">
              <BookOpen className="w-4 h-4 text-[#D6B978] mx-auto mb-1" />
              <div className="text-xs text-[#AAA39A]">الدروس</div>
              <div className="text-sm font-bold text-[#F5F1E8]">{course.lessonsCount} درسًا</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521] text-center">
              <Clock className="w-4 h-4 text-[#D6B978] mx-auto mb-1" />
              <div className="text-xs text-[#AAA39A]">المدة</div>
              <div className="text-sm font-bold text-[#F5F1E8]">{course.durationHours} ساعات</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521] text-center">
              <BarChart className="w-4 h-4 text-[#D6B978] mx-auto mb-1" />
              <div className="text-xs text-[#AAA39A]">المستوى</div>
              <div className="text-sm font-bold text-[#F5F1E8]">{course.level}</div>
            </div>
          </div>

          {/* Topics Covered */}
          <div>
            <h4 className="text-sm font-bold text-[#F5F1E8] mb-3">ماذا ستتعلم في هذا المسار:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.topics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0C0B0A] border border-[#292521] text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#D6B978] shrink-0" />
                  <span className="text-[#F5F1E8]">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Features Checklist */}
          <div className="pt-4 border-t border-[#292521] flex flex-wrap items-center gap-4 text-xs text-[#AAA39A]">
            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#D6B978]" /> شهادة إتمام معتمدة</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#D6B978]" /> وصول دائم للمحتوى</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#D6B978]" /> انضمام لمجتمع الطلاب</span>
          </div>
        </div>

        {/* Modal Footer / Action */}
        <div className="p-6 bg-[#0C0B0A] border-t border-[#292521] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right w-full sm:w-auto">
            <div className="text-[11px] text-[#AAA39A]">الاشتراك في الأكاديمية</div>
            <div className="text-base font-extrabold text-[#F5F1E8]">عضوية المسار الكامل</div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {onNavigateToCourseDetails && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToCourseDetails(course.id);
                }}
                className="px-5 py-3.5 rounded-xl border border-[#292521] hover:border-[#D6B978] bg-[#181614] text-xs sm:text-sm font-bold text-[#F5F1E8] transition-colors"
              >
                عرض صفحة الدورة
              </button>
            )}

            <button
              onClick={() => {
                if (onNavigateToCourseDetails) {
                  onClose();
                  onNavigateToCourseDetails(course.id);
                } else {
                  setEnrolled(true);
                }
              }}
              className={`px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                enrolled
                  ? 'bg-[#181614] border border-[#D6B978] text-[#D6B978]'
                  : 'bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] shadow-[0_0_20px_rgba(214,185,120,0.25)]'
              }`}
            >
              {enrolled ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#D6B978]" />
                  <span>تم تأكيد التسجيل بنجاح!</span>
                </>
              ) : (
                <>
                  <span>ابدأ دراسة المسار الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
