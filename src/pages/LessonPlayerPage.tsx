import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Check, 
  X, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LessonTopBar } from '../components/player/LessonTopBar';
import { SecureVideoPlayer } from '../components/player/SecureVideoPlayer';
import { CourseCurriculumSidebar } from '../components/player/CourseCurriculumSidebar';
import { LessonInfo } from '../components/player/LessonInfo';
import { LessonActions } from '../components/player/LessonActions';
import { LessonTabs } from '../components/player/LessonTabs';
import { LessonNavigation } from '../components/player/LessonNavigation';
import { KeyboardShortcutsModal } from '../components/player/KeyboardShortcutsModal';
import { AIAssistantDrawer } from '../components/player/AIAssistantDrawer';
import { CurriculumDrawerMobile } from '../components/player/CurriculumDrawerMobile';
import { getLessonDetails, DEFAULT_LESSON_ID } from '../data/lessonPlayerData';
import { MASTER_GRAMMAR_CURRICULUM, getCourseDetails } from '../data/courseDetailsData';
import { CourseLesson, CurriculumUnit, Course } from '../types';

interface LessonPlayerPageProps {
  courseId?: string | null;
  lessonId?: string | null;
  onNavigateBackToCourse: () => void;
}

export const LessonPlayerPage: React.FC<LessonPlayerPageProps> = ({
  courseId = 'master-grammar',
  lessonId = DEFAULT_LESSON_ID,
  onNavigateBackToCourse,
}) => {
  // Course and Lesson Data
  const courseDetails = getCourseDetails(courseId);
  const [currentLessonId, setCurrentLessonId] = useState<string>(lessonId || DEFAULT_LESSON_ID);
  const currentLessonData = getLessonDetails(currentLessonId);

  // Completed lessons tracking
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([
    'lesson-1-1', // Default completed state for demo progress 16/24 (68%)
    'lesson-1-2',
  ]);

  // Saved lesson bookmarking
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [savedToast, setSavedToast] = useState<string | null>(null);

  // Focus Mode
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  // Modals & Drawers
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isCurriculumMobileOpen, setIsCurriculumMobileOpen] = useState<boolean>(false);

  // Scroll to top on mount and lesson change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLessonId]);

  // Escape key handler for Focus Mode & Modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFocusMode) setIsFocusMode(false);
        if (isAIOpen) setIsAIOpen(false);
        if (isShortcutsOpen) setIsShortcutsOpen(false);
        if (isCurriculumMobileOpen) setIsCurriculumMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocusMode, isAIOpen, isShortcutsOpen, isCurriculumMobileOpen]);

  // Flattened lessons list to find prev/next
  const allLessons: { lesson: CourseLesson; unit: CurriculumUnit }[] = [];
  MASTER_GRAMMAR_CURRICULUM.forEach((unit) => {
    unit.lessons.forEach((lesson) => {
      allLessons.push({ lesson, unit });
    });
  });

  const currentIndex = allLessons.findIndex((item) => item.lesson.id === currentLessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1].lesson : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1].lesson : null;

  const isCurrentCompleted = completedLessonIds.includes(currentLessonId);

  // Handlers
  const handleToggleComplete = () => {
    if (isCurrentCompleted) {
      setCompletedLessonIds(completedLessonIds.filter((id) => id !== currentLessonId));
    } else {
      setCompletedLessonIds([...completedLessonIds, currentLessonId]);
    }
  };

  const handleToggleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      setSavedToast(next ? 'تم حفظ الدرس في قائمتك المفضلة' : 'تمت إزالة الدرس من المحفوظات');
      setTimeout(() => setSavedToast(null), 3000);
      return next;
    });
  };

  const handleSelectLesson = (lesson: CourseLesson) => {
    setCurrentLessonId(lesson.id);
  };

  return (
    <div 
      id="student-lesson-player-page"
      className="min-h-screen bg-[#070707] text-[#F5F1E8] pb-16 selection:bg-[#D6B978]/30 selection:text-[#F5F1E8] transition-colors"
    >
      
      {/* 1. Specialized Lesson Player Top Bar (Hidden in full Focus Mode with exit trigger) */}
      {!isFocusMode && (
        <LessonTopBar
          course={courseDetails.course}
          currentLessonTitle={currentLessonData.title}
          currentLessonNumber={currentLessonData.orderNumber}
          completedLessonsCount={16}
          totalLessonsCount={24}
          progressPercent={68}
          isFocusMode={isFocusMode}
          onToggleFocusMode={() => setIsFocusMode(true)}
          onBackToCourse={onNavigateBackToCourse}
          onOpenShortcuts={() => setIsShortcutsOpen(true)}
          onOpenCurriculumMobile={() => setIsCurriculumMobileOpen(true)}
        />
      )}

      {/* Focus Mode Floating Exit Pill */}
      {isFocusMode && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <button
            id="exit-focus-mode-btn"
            onClick={() => setIsFocusMode(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0C0B0A]/90 hover:bg-[#151311] border border-[#D6B978]/50 text-xs font-bold text-[#D6B978] shadow-2xl backdrop-blur-md transition-all"
          >
            <Minimize2 className="w-4 h-4" />
            <span>الخروج من وضع التركيز (Esc)</span>
          </button>
        </div>
      )}

      {/* Save / Bookmark Toast Feedback */}
      {savedToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-[#151311] border border-[#D6B978]/40 text-xs font-bold text-[#D6B978] shadow-2xl flex items-center gap-2 animate-slideUp">
          <Check className="w-4 h-4" />
          <span>{savedToast}</span>
        </div>
      )}

      {/* Main Learning Workspace Container */}
      <main className={`mx-auto px-3 sm:px-6 lg:px-8 transition-all duration-300 ${
        isFocusMode 
          ? 'max-w-6xl pt-6 sm:pt-10' 
          : 'max-w-[1720px] pt-4 sm:pt-6'
      }`}>
        
        {/* Main Grid: Video & Workspace (Right) + Curriculum Sidebar (Left on Desktop RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Learning Column (8 cols in regular, 12 cols in Focus Mode) */}
          <div className={`space-y-6 transition-all duration-300 ${
            isFocusMode ? 'lg:col-span-12' : 'lg:col-span-8'
          }`}>
            
            {/* 2. Cinema Video Player */}
            <SecureVideoPlayer
              lesson={currentLessonData}
              isCompleted={isCurrentCompleted}
              onLessonComplete={() => {
                if (!completedLessonIds.includes(currentLessonId)) {
                  setCompletedLessonIds([...completedLessonIds, currentLessonId]);
                }
              }}
              isFocusMode={isFocusMode}
            />

            {/* 3. Lesson Information & Metadata */}
            <LessonInfo lesson={currentLessonData} />

            {/* 4. Lesson Actions Row */}
            <LessonActions
              isCompleted={isCurrentCompleted}
              isSaved={isSaved}
              onToggleComplete={handleToggleComplete}
              onToggleSave={handleToggleSave}
              onOpenShortcuts={() => setIsShortcutsOpen(true)}
            />

            {/* 5. Four Learning Tool Tabs */}
            <LessonTabs lesson={currentLessonData} />

            {/* 6. Lesson Previous / Next Navigation & Completion Banner */}
            <LessonNavigation
              prevLesson={prevLesson}
              nextLesson={nextLesson}
              onNavigateLesson={handleSelectLesson}
              isCompleted={isCurrentCompleted}
            />

          </div>

          {/* Course Curriculum Sidebar (4 cols on Desktop, hidden in Focus Mode) */}
          {!isFocusMode && (
            <div className="hidden lg:block lg:col-span-4 sticky top-20">
              <CourseCurriculumSidebar
                curriculum={MASTER_GRAMMAR_CURRICULUM}
                currentLessonId={currentLessonId}
                completedLessonIds={completedLessonIds}
                onSelectLesson={handleSelectLesson}
                className="max-h-[calc(100vh-6rem)]"
              />
            </div>
          )}

        </div>

      </main>

      {/* Floating AI Assistant Trigger Button (Bottom-Left in RTL) */}
      <button
        id="lesson-floating-ai-trigger"
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#651F2A] via-[#351117] to-[#151311] hover:from-[#7a2634] hover:to-[#181614] border border-[#D6B978]/60 text-[#F5F1E8] shadow-2xl shadow-[#651F2A]/40 transition-all hover:scale-105 active:scale-95 group select-none"
        title="اسأل المساعد الذكي عن هذا الدرس"
      >
        <div className="w-6 h-6 rounded-lg bg-[#D6B978]/20 flex items-center justify-center text-[#D6B978]">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs sm:text-sm font-bold font-['Cairo',_sans-serif]">
          اسأل عن هذا الدرس
        </span>
      </button>

      {/* Modals & Drawers */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <AIAssistantDrawer
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        lesson={currentLessonData}
      />

      <CurriculumDrawerMobile
        isOpen={isCurriculumMobileOpen}
        onClose={() => setIsCurriculumMobileOpen(false)}
        curriculum={MASTER_GRAMMAR_CURRICULUM}
        currentLessonId={currentLessonId}
        completedLessonIds={completedLessonIds}
        onSelectLesson={handleSelectLesson}
      />

    </div>
  );
};
