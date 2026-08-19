import React, { useState, useEffect } from 'react';
import { CourseBreadcrumb } from '../components/course/CourseBreadcrumb';
import { CourseHero } from '../components/course/CourseHero';
import { CourseStats } from '../components/course/CourseStats';
import { CourseActionPanel } from '../components/course/CourseActionPanel';
import { LearningObjectives } from '../components/course/LearningObjectives';
import { CurriculumAccordion } from '../components/course/CurriculumAccordion';
import { TeacherSection } from '../components/course/TeacherSection';
import { RequirementsSection } from '../components/course/RequirementsSection';
import { FAQSection } from '../components/course/FAQSection';
import { CourseFinalCTA } from '../components/course/CourseFinalCTA';
import { MobileStickyEnrollBar } from '../components/course/MobileStickyEnrollBar';
import { LessonPreviewModal } from '../components/course/LessonPreviewModal';
import { EnrollmentModal } from '../components/course/EnrollmentModal';
import { getCourseDetails } from '../data/courseDetailsData';
import { CourseLesson, CurriculumUnit } from '../types';

interface CourseDetailsPageProps {
  courseId?: string | null;
  onNavigateHome: () => void;
  onNavigateExplore: () => void;
  onOpenLesson?: (lessonId?: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  courseId,
  onNavigateHome,
  onNavigateExplore,
  onOpenLesson,
}) => {
  // Load full course details
  const courseDetails = getCourseDetails(courseId);

  // User state for saved/bookmarked course
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [showSavedToast, setShowSavedToast] = useState<boolean>(false);

  // Modals state
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [selectedPreviewLesson, setSelectedPreviewLesson] = useState<{
    lesson: CourseLesson;
    unit: CurriculumUnit;
  } | null>(null);

  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState<boolean>(false);

  // Scroll to top on course change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseId]);

  const handleToggleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3000);
      return next;
    });
  };

  const handleStartLearning = () => {
    setIsEnrollmentOpen(true);
  };

  const handleOpenPreview = (lesson?: CourseLesson, unit?: CurriculumUnit) => {
    if (lesson && unit) {
      setSelectedPreviewLesson({ lesson, unit });
    } else {
      // First lesson as default preview
      const firstUnit = courseDetails.curriculum[0];
      const firstLesson = firstUnit?.lessons[0];
      if (firstLesson && firstUnit) {
        setSelectedPreviewLesson({ lesson: firstLesson, unit: firstUnit });
      }
    }
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F1E8] pb-16 lg:pb-0 selection:bg-[#D6B978]/30 selection:text-[#F5F1E8]">
      
      {/* 2. Breadcrumb */}
      <CourseBreadcrumb 
        courseTitle={courseDetails.course.title}
        categoryTitle="استكشف الدورات"
        onNavigateHome={onNavigateHome}
        onNavigateExplore={onNavigateExplore}
      />

      {/* 3. Cinematic Course Hero */}
      <CourseHero 
        courseDetails={courseDetails}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onStartLearning={handleStartLearning}
        onPreviewLesson={() => handleOpenPreview()}
      />

      {/* 4. Course Information / Stats */}
      <CourseStats 
        courseDetails={courseDetails}
      />

      {/* Main Content Layout with Sticky Action Panel on Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Course Content Flow (Right 8 Columns in RTL) */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-16">
            
            {/* 5. What You Will Learn */}
            <LearningObjectives 
              courseDetails={courseDetails}
            />

            {/* 6. Course Curriculum */}
            <CurriculumAccordion 
              courseDetails={courseDetails}
              onPreviewLesson={(lesson, unit) => handleOpenPreview(lesson, unit)}
            />

            {/* 7. About the Teacher */}
            <TeacherSection 
              courseDetails={courseDetails}
              onExploreTeacher={() => {
                const el = document.getElementById('about-the-teacher');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* 8. Course Requirements */}
            <RequirementsSection 
              courseDetails={courseDetails}
            />

            {/* 9. FAQ */}
            <FAQSection 
              courseDetails={courseDetails}
            />

          </div>

          {/* Sticky Course Action Panel (Left 4 Columns in RTL on Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <CourseActionPanel 
              courseDetails={courseDetails}
              isSaved={isSaved}
              onToggleSave={handleToggleSave}
              onStartLearning={handleStartLearning}
              onPreviewLesson={() => handleOpenPreview()}
            />
          </div>

        </div>
      </div>

      {/* 10. Final CTA */}
      <CourseFinalCTA 
        courseDetails={courseDetails}
        onStartLearning={handleStartLearning}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyEnrollBar 
        courseDetails={courseDetails}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onStartLearning={handleStartLearning}
      />

      {/* Lesson Preview Modal */}
      <LessonPreviewModal 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        lesson={selectedPreviewLesson?.lesson}
        unit={selectedPreviewLesson?.unit}
        courseTitle={courseDetails.course.title}
        onStartLearning={handleStartLearning}
        onOpenLesson={onOpenLesson}
      />

      {/* Enrollment Confirmation Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        courseDetails={courseDetails}
        onNavigateToLesson={onOpenLesson}
      />

      {/* Toast Notification for Bookmark */}
      {showSavedToast && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-20 lg:bottom-8 right-6 z-50 px-4 py-3 rounded-xl bg-[#151311] border border-[#D6B978] text-[#F5F1E8] shadow-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <span>{isSaved ? 'تمت إضافة الدورة إلى المحفوظات بنجاح' : 'تمت إزالة الدورة من المحفوظات'}</span>
        </div>
      )}

    </div>
  );
};
