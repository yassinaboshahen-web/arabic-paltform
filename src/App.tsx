/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { LearningJourney } from './components/LearningJourney';
import { FeaturedCourse } from './components/FeaturedCourse';
import { TeacherStory } from './components/TeacherStory';
import { PopularCourses } from './components/PopularCourses';
import { LearningExperience } from './components/LearningExperience';
import { AITeaser } from './components/AITeaser';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingAIButton } from './components/FloatingAIButton';
import { AIAssistantModal } from './components/AIAssistantModal';
import { CoursePreviewModal } from './components/CoursePreviewModal';
import { SearchModal } from './components/SearchModal';
import { ExplorePage } from './pages/ExplorePage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { LessonPlayerPage } from './pages/LessonPlayerPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { StudentProfilePage } from './pages/StudentProfilePage';
import { NotificationsPage } from './pages/NotificationsPage';

export default function App() {
  const getInitialView = (): 'home' | 'explore' | 'course' | 'lesson' | 'dashboard' | 'profile' | 'notifications' => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('notifications') || hash.includes('notifications')) {
        return 'notifications';
      }
      if (path.includes('profile') || hash.includes('profile')) {
        return 'profile';
      }
      if (path.includes('dashboard') || hash.includes('dashboard')) {
        return 'dashboard';
      }
      if (path.includes('explore') || hash.includes('explore')) {
        return 'explore';
      }
    }
    return 'dashboard';
  };

  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'course' | 'lesson' | 'dashboard' | 'profile' | 'notifications'>(getInitialView);
  const [unreadCount, setUnreadCount] = useState<number>(3);
  const [activeCourseId, setActiveCourseId] = useState<string>('master-grammar');
  const [activeLessonId, setActiveLessonId] = useState<string>('lesson-1-1');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>('all');

  // Listen to popstate / hashchange for /dashboard, /profile and /notifications routing
  React.useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('notifications') || hash.includes('notifications')) {
        setCurrentView('notifications');
      } else if (path.includes('profile') || hash.includes('profile')) {
        setCurrentView('profile');
      } else if (path.includes('dashboard') || hash.includes('dashboard')) {
        setCurrentView('dashboard');
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenCoursePreview = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const handleCloseCoursePreview = () => {
    setSelectedCourseId(null);
  };

  const handleNavigateToCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setCurrentView('course');
    setSelectedCourseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToLesson = (lessonId: string = 'lesson-1-1', courseId?: string) => {
    if (courseId) {
      setActiveCourseId(courseId);
    }
    setActiveLessonId(lessonId);
    setCurrentView('lesson');
    setSelectedCourseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        setSelectedCategoryFilter(categoryId);
        const element = document.getElementById('popular-courses');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setSelectedCategoryFilter(categoryId);
      const element = document.getElementById('popular-courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleStartJourney = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById('learning-journey');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.getElementById('learning-journey');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreCourses = () => {
    setCurrentView('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F1E8] font-['IBM_Plex_Sans_Arabic',_'Cairo',_sans-serif] selection:bg-[#D6B978]/30 selection:text-[#F5F1E8] antialiased overflow-x-hidden">
      
      {/* 1. Premium Sticky Navbar (Shown for Home, Explore, Course, Dashboard, Profile, Notifications) */}
      {currentView !== 'lesson' && (
        <Navbar 
          currentView={currentView}
          unreadCount={unreadCount}
          onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenAI={() => setIsAIOpen(true)}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {/* Main View Router */}
      <main>
        {currentView === 'lesson' ? (
          <LessonPlayerPage
            courseId={activeCourseId}
            lessonId={activeLessonId}
            onNavigateBackToCourse={() => {
              setCurrentView('course');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'notifications' ? (
          <NotificationsPage
            onNavigateToCourse={(courseId) => handleNavigateToCourse(courseId)}
            onNavigateToLesson={(lessonId, courseId) => handleNavigateToLesson(lessonId, courseId)}
            onNavigateToDashboard={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onUnreadCountChange={(count) => setUnreadCount(count)}
          />
        ) : currentView === 'profile' ? (
          <StudentProfilePage
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContinueCourse={(lessonId, courseId) => handleNavigateToLesson(lessonId, courseId)}
            onViewCourseDetails={(courseId) => handleNavigateToCourse(courseId)}
          />
        ) : currentView === 'dashboard' ? (
          <StudentDashboardPage
            onNavigateToLesson={(lessonId, courseId) => handleNavigateToLesson(lessonId, courseId)}
            onNavigateToCourse={(courseId) => handleNavigateToCourse(courseId)}
            onExploreCourses={handleExploreCourses}
            onOpenAIModal={() => setIsAIOpen(true)}
            onNavigateToProfile={() => {
              setCurrentView('profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenNotifications={() => {
              setCurrentView('notifications');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'explore' ? (
          <ExplorePage 
            onOpenCourse={(courseId) => handleNavigateToCourse(courseId)} 
          />
        ) : currentView === 'course' ? (
          <CourseDetailsPage 
            courseId={activeCourseId}
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateExplore={() => {
              setCurrentView('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLesson={(lessonId) => handleNavigateToLesson(lessonId || 'lesson-1-1', activeCourseId)}
          />
        ) : (
          <>
            {/* 2. Cinematic Hero Section */}
            <HeroSection 
              onExploreCourses={handleExploreCourses}
              onStartJourney={handleStartJourney}
            />

            {/* 3. Academy Statistics Transition */}
            <StatsSection />

            {/* 4. Learning Journey Categories */}
            <LearningJourney 
              onSelectCategory={handleSelectCategory}
            />

            {/* 5. Featured Course Spotlight (Masterclass) */}
            <FeaturedCourse 
              onOpenPreview={(courseId) => handleNavigateToCourse(courseId)}
            />

            {/* 6. Teacher Editorial Story */}
            <TeacherStory 
              onLearnMore={handleExploreCourses}
            />

            {/* 7. Popular Arabic Courses */}
            <PopularCourses 
              onOpenPreview={(courseId) => handleNavigateToCourse(courseId)}
              selectedCategoryFilter={selectedCategoryFilter}
            />

            {/* 8. Learning Experience Benefits */}
            <LearningExperience />

            {/* 9. AI Assistant Teaser */}
            <AITeaser 
              onOpenAI={() => setIsAIOpen(true)}
            />

            {/* 10. Final CTA */}
            <FinalCTA 
              onStartNow={handleStartJourney}
            />
          </>
        )}
      </main>

      {/* 11. Minimal Premium Footer (Omitted on dedicated Lesson Player) */}
      {currentView !== 'lesson' && <Footer />}

      {/* 12. Global Floating AI Assistant Trigger (Shown on Home/Explore/Course) */}
      {currentView !== 'lesson' && (
        <FloatingAIButton 
          onClick={() => setIsAIOpen(true)}
          isOpen={isAIOpen}
        />
      )}

      {/* Modals & Dialogs */}
      <AIAssistantModal 
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

      <CoursePreviewModal 
        courseId={selectedCourseId}
        isOpen={!!selectedCourseId}
        onClose={handleCloseCoursePreview}
        onNavigateToCourseDetails={handleNavigateToCourse}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleNavigateToCourse}
        onSelectCategory={handleSelectCategory}
      />

    </div>
  );
}
