import React, { useEffect } from 'react';
import { 
  STUDENT_PROFILE, 
  DASHBOARD_OVERVIEW_STATS, 
  CONTINUE_LEARNING_COURSE, 
  ENROLLED_COURSES, 
  RECENT_ACTIVITIES, 
  STUDENT_DASHBOARD_NOTES, 
  WEEKLY_STUDY_ACTIVITY, 
  ACADEMIC_MILESTONES 
} from '../data/dashboardData';

import { DashboardGreeting } from '../components/dashboard/DashboardGreeting';
import { ContinueLearning } from '../components/dashboard/ContinueLearning';
import { LearningOverview } from '../components/dashboard/LearningOverview';
import { MyCourses } from '../components/dashboard/MyCourses';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { RecentNotes } from '../components/dashboard/RecentNotes';
import { LearningActivity } from '../components/dashboard/LearningActivity';
import { AIStudyAssistant } from '../components/dashboard/AIStudyAssistant';
import { QuickActions } from '../components/dashboard/QuickActions';
import { Achievements } from '../components/dashboard/Achievements';
import { NextStep } from '../components/dashboard/NextStep';

interface StudentDashboardPageProps {
  onNavigateToLesson: (lessonId: string, courseId?: string) => void;
  onNavigateToCourse: (courseId: string) => void;
  onExploreCourses: () => void;
  onOpenAIModal: () => void;
  onOpenNotifications?: () => void;
  onNavigateToProfile?: () => void;
}

export const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({
  onNavigateToLesson,
  onNavigateToCourse,
  onExploreCourses,
  onOpenAIModal,
  onOpenNotifications,
  onNavigateToProfile,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div 
      id="student-dashboard-page"
      className="min-h-screen bg-[#070707] text-[#F5F1E8] pt-24 sm:pt-28 pb-20 selection:bg-[#D6B978]/30 selection:text-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Personal Greeting */}
        <DashboardGreeting 
          student={STUDENT_PROFILE} 
          onExploreCourses={onExploreCourses}
        />

        {/* 2. Continue Learning Main Hero */}
        <ContinueLearning
          course={CONTINUE_LEARNING_COURSE}
          onContinueLesson={(lessonId, courseId) => onNavigateToLesson(lessonId, courseId)}
          onViewCourseDetails={(courseId) => onNavigateToCourse(courseId)}
        />

        {/* 3. Next Step Suggested Action */}
        <NextStep
          courseTitle="النحو من الصفر إلى الإتقان"
          lessonTitle="أقسام الكلام"
          durationLabel="18 دقيقة"
          onStartNextLesson={(lessonId, courseId) => onNavigateToLesson(lessonId, courseId)}
        />

        {/* 4. Learning Overview Statistics (رحلتك التعليمية) */}
        <LearningOverview stats={DASHBOARD_OVERVIEW_STATS} />

        {/* 5. My Courses Grid (دوراتي) */}
        <MyCourses
          courses={ENROLLED_COURSES}
          onContinueLesson={(lessonId, courseId) => onNavigateToLesson(lessonId, courseId)}
          onViewCourseDetails={(courseId) => onNavigateToCourse(courseId)}
          onExploreCourses={onExploreCourses}
        />

        {/* 6. Two-Column Row: Recent Activity & Recent Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 flex flex-col">
            <RecentActivity 
              activities={RECENT_ACTIVITIES}
              onOpenActivity={() => onNavigateToLesson('lesson-1-1', 'master-grammar')}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <RecentNotes 
              notes={STUDENT_DASHBOARD_NOTES} 
            />
          </div>
        </div>

        {/* 7. Learning Activity Consistency Chart (7 Days) */}
        <LearningActivity weeklyData={WEEKLY_STUDY_ACTIVITY} />

        {/* 8. AI Study Assistant Widget */}
        <AIStudyAssistant
          onOpenFullAssistant={onOpenAIModal}
        />

        {/* 9. Quick Actions Bar */}
        <QuickActions
          onContinueLearning={() => onNavigateToLesson('lesson-1-1', 'master-grammar')}
          onExploreCourses={onExploreCourses}
          onOpenNotes={() => {
            const el = document.getElementById('dashboard-recent-notes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAI={onOpenAIModal}
          onNavigateToProfile={onNavigateToProfile}
          onOpenNotifications={() => {
            if (onOpenNotifications) {
              onOpenNotifications();
            } else {
              const btn = document.getElementById('navbar-notification-btn');
              btn?.click();
            }
          }}
        />

        {/* 10. Academic Milestones / Achievements */}
        <Achievements milestones={ACADEMIC_MILESTONES} />

      </div>
    </div>
  );
};
