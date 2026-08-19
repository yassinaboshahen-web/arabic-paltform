import React from 'react';
import { X, Sparkles, GraduationCap, CheckCircle2, BookOpen, ArrowLeft } from 'lucide-react';
import { CourseDetailData } from '../../types';
import teacherImg from '../../assets/images/teacher_portrait_1786908267385.jpg';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseDetails: CourseDetailData;
  onNavigateToLesson?: (lessonId?: string) => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  courseDetails,
  onNavigateToLesson,
}) => {
  if (!isOpen) return null;

  const { course, teacherName } = courseDetails;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#151311] border border-[#292521] p-6 sm:p-8 shadow-2xl overflow-hidden text-right">
        
        {/* Close Button */}
        <button
          id="close-enrollment-modal-btn"
          onClick={onClose}
          aria-label="إغلاق النافذة"
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A] hover:text-[#F5F1E8] hover:border-[#777169] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>أكاديمية أحمد محمود</span>
        </div>

        {/* Heading */}
        <h3 id="enrollment-modal-title" className="text-2xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
          أهلاً بك في دورة {course.title}
        </h3>

        <p className="text-sm text-[#AAA39A] mt-2 font-light leading-relaxed">
          تم تفعيل وصولك للدورة بنجاح. يمكنك الآن البدء في متابعة الدروس الـ {course.lessonsCount} درسًا بترتيبها المنهجي.
        </p>

        {/* Teacher Welcome Snippet */}
        <div className="mt-6 p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D6B978]/40 shrink-0">
            <img src={teacherImg} alt={teacherName} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#F5F1E8] block">رسالة من {teacherName}</span>
            <p className="text-xs text-[#AAA39A] mt-0.5 font-light">
              "يسعدني انضمامك معنا. ابدأ بالدرس الأول ودعنا نبني معًا أساسًا متينًا في لغتنا الجميلة."
            </p>
          </div>
        </div>

        {/* Next Step Checklist */}
        <div className="mt-6 space-y-2.5 text-xs text-[#AAA39A]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D6B978] shrink-0" />
            <span>كافة ملفات الشرح والتمارين متاحة تحت كل درس</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D6B978] shrink-0" />
            <span>يمكنك الاستعانة بالمساعد الذكي في المنصة لأي استفسار إعرابي</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-8">
          <button
            id="enrollment-modal-continue-btn"
            onClick={() => {
              onClose();
              if (onNavigateToLesson) {
                onNavigateToLesson('lesson-1-1');
              }
            }}
            className="w-full py-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D6B978]/15"
          >
            <BookOpen className="w-4 h-4" />
            <span>الانتقال إلى مشغل الدرس الأول (01)</span>
            <ArrowLeft className="w-4 h-4 mr-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
