import React from 'react';
import { Play, BookOpen, Clock } from 'lucide-react';
import { EnrolledCourseItem } from '../../types';

interface MyCoursesProps {
  courses?: EnrolledCourseItem[];
  onContinueLesson?: (lessonId: string, courseId: string) => void;
  onViewCourseDetails?: (courseId: string) => void;
  onExploreCourses?: () => void;
}

export const MyCourses: React.FC<MyCoursesProps> = ({
  courses = [
    {
      id: 'enrolled-master-grammar',
      courseId: 'master-grammar',
      title: 'النحو من الصفر إلى الإتقان',
      teacher: 'أحمد محمود',
      progressPercent: 68,
      completedLessons: 16,
      totalLessons: 24,
      totalDuration: '8 ساعات',
      durationRemaining: 'ساعتان متبقيتان',
      currentLesson: {
        id: 'lesson-1-1',
        title: 'مقدمة في علم النحو',
        orderNumber: 'الدرس ٠١',
        durationLabel: '١٢:٤٥ دقيقة',
      },
      coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      categoryArabic: 'النحو والإعراب',
      lastAccessed: 'منذ ساعتين',
    },
    {
      id: 'enrolled-arabic-basics',
      courseId: 'arabic-basics',
      title: 'أساسيات اللغة العربية',
      teacher: 'أحمد محمود',
      progressPercent: 32,
      completedLessons: 6,
      totalLessons: 18,
      totalDuration: '5 ساعات',
      durationRemaining: '٣ ساعات متبقية',
      currentLesson: {
        id: 'lesson-basics-4',
        title: 'همزة الوصل والقطع',
        orderNumber: 'الدرس ٠٦',
        durationLabel: '١٥:٠٠ دقيقة',
      },
      coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
      categoryArabic: 'الإملاء والرسم',
      lastAccessed: 'منذ ٣ أيام',
    },
    {
      id: 'enrolled-pro-writing',
      courseId: 'pro-writing',
      title: 'الكتابة العربية باحتراف',
      teacher: 'أحمد محمود',
      progressPercent: 14,
      completedLessons: 3,
      totalLessons: 20,
      totalDuration: '7 ساعات',
      durationRemaining: '٦ ساعات متبقية',
      currentLesson: {
        id: 'lesson-write-3',
        title: 'صناعة الجملة البلاغية',
        orderNumber: 'الدرس ٠٣',
        durationLabel: '٢٠:٤٠ دقيقة',
      },
      coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      categoryArabic: 'البلاغة والإنشاء',
      lastAccessed: 'منذ ٥ أيام',
    },
  ],
  onContinueLesson,
  onViewCourseDetails,
  onExploreCourses,
}) => {
  return (
    <section 
      id="dashboard-my-courses"
      className="space-y-6 select-none text-right"
    >
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            دوراتي
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA39A]">
          كل ما بدأت تعلمه في مكان واحد.
        </p>
      </div>

      {/* Courses Grid or Empty State */}
      {courses && courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group relative rounded-2xl bg-[#121110] hover:bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Course Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img 
                  src={course.coverImage} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#0C0B0A]/85 backdrop-blur-md border border-[#292521] text-[11px] font-semibold text-[#D6B978]">
                  {course.categoryArabic}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Title & Teacher */}
                <div className="space-y-1">
                  <span className="text-[11px] text-[#AAA39A] font-light">
                    الأستاذ: {course.teacher}
                  </span>
                  <h4 
                    onClick={() => onViewCourseDetails?.(course.courseId)}
                    className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] hover:text-[#D6B978] transition-colors line-clamp-1 cursor-pointer"
                  >
                    {course.title}
                  </h4>
                </div>

                {/* Progress & Lesson Count */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#AAA39A] font-mono">
                      {course.completedLessons} من {course.totalLessons} درسًا
                    </span>
                    <span className="text-[#D6B978] font-mono font-bold">
                      {course.progressPercent}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[#181614] overflow-hidden">
                    <div 
                      className="h-full bg-[#D6B978] rounded-full"
                      style={{ width: `${course.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onContinueLesson?.(course.currentLesson.id, course.courseId)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-[#D6B978]/10 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>متابعة التعلم</span>
                  </button>

                  <button
                    onClick={() => onViewCourseDetails?.(course.courseId)}
                    className="py-2.5 px-3 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs text-[#AAA39A] hover:text-[#F5F1E8] transition-colors cursor-pointer"
                    title="عرض الدورة"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-10 rounded-2xl bg-[#121110] border border-[#292521] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#F5F1E8]">لم تبدأ أي دورة بعد.</h4>
            <p className="text-xs text-[#AAA39A] max-w-sm mx-auto">
              ابدأ رحلتك باختيار إحدى دورات اللغة العربية المتخصصة في منصتنا.
            </p>
          </div>
          <button
            onClick={onExploreCourses}
            className="px-5 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            استكشف الدورات
          </button>
        </div>
      )}
    </section>
  );
};
