import React, { useState } from 'react';
import { BookOpen, Sparkles, PlusCircle } from 'lucide-react';
import { EnrolledCourseItem } from '../../types';
import { CourseProgressCard } from './CourseProgressCard';

interface MyCoursesSectionProps {
  courses: EnrolledCourseItem[];
  onContinueLesson: (lessonId: string, courseId: string) => void;
  onViewCourseDetails: (courseId: string) => void;
  onExploreMoreCourses: () => void;
}

export const MyCoursesSection: React.FC<MyCoursesSectionProps> = ({
  courses,
  onContinueLesson,
  onViewCourseDetails,
  onExploreMoreCourses,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'in-progress' | 'completed'>('all');

  const filteredCourses = courses.filter((c) => {
    if (activeFilter === 'completed') return c.progressPercent === 100;
    if (activeFilter === 'in-progress') return c.progressPercent < 100;
    return true;
  });

  return (
    <section 
      id="dashboard-my-courses-section"
      className="space-y-6 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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

        {/* Filter Pills & Explore Action */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#121110] border border-[#292521]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#181614] text-[#D6B978] border border-[#292521]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8]'
              }`}
            >
              الكل ({courses.length})
            </button>
            <button
              onClick={() => setActiveFilter('in-progress')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'in-progress'
                  ? 'bg-[#181614] text-[#D6B978] border border-[#292521]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8]'
              }`}
            >
              قيد التقدم ({courses.filter(c => c.progressPercent < 100).length})
            </button>
            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'completed'
                  ? 'bg-[#181614] text-[#D6B978] border border-[#292521]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8]'
              }`}
            >
              المكتملة (٠)
            </button>
          </div>

          <button
            onClick={onExploreMoreCourses}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>استكشاف المزيد</span>
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseProgressCard
              key={course.id}
              course={course}
              onContinueLesson={onContinueLesson}
              onViewCourseDetails={onViewCourseDetails}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-10 rounded-2xl bg-[#121110] border border-[#292521] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#F5F1E8]">لا توجد دورات مكتملة بعد</h4>
            <p className="text-xs text-[#AAA39A] max-w-sm mx-auto">
              أنت تتقدم بثبات في دوراتك الحالية، استمر في المشاهدة والتطبيق لإتمام دورتك الأولى!
            </p>
          </div>
          <button
            onClick={() => setActiveFilter('all')}
            className="px-4 py-2 rounded-xl bg-[#D6B978] text-[#070707] text-xs font-bold"
          >
            عرض جميع الدورات
          </button>
        </div>
      )}
    </section>
  );
};
