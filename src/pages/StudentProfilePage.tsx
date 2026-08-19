import React, { useState } from 'react';
import { 
  INITIAL_STUDENT_PROFILE, 
  INITIAL_ACADEMIC_IDENTITY, 
  STUDENT_LEARNING_JOURNEY, 
  PROFILE_ACHIEVEMENTS, 
  INITIAL_STUDENT_PREFERENCES 
} from '../data/profileData';
import { FullStudentProfile } from '../types';

import { ProfileHero } from '../components/profile/ProfileHero';
import { PersonalInformation } from '../components/profile/PersonalInformation';
import { EditProfileModal } from '../components/profile/EditProfileModal';
import { AcademicIdentity } from '../components/profile/AcademicIdentity';
import { LearningJourney } from '../components/profile/LearningJourney';
import { Achievements } from '../components/profile/Achievements';
import { CurrentCourses } from '../components/profile/CurrentCourses';
import { LearningPreferences } from '../components/profile/LearningPreferences';
import { AccountActions } from '../components/profile/AccountActions';
import { ChangePasswordModal } from '../components/profile/ChangePasswordModal';
import { LogoutModal } from '../components/profile/LogoutModal';
import { SecuritySection } from '../components/profile/SecuritySection';

interface StudentProfilePageProps {
  onNavigateHome: () => void;
  onContinueCourse: (lessonId: string, courseId: string) => void;
  onViewCourseDetails: (courseId: string) => void;
}

export const StudentProfilePage: React.FC<StudentProfilePageProps> = ({
  onNavigateHome,
  onContinueCourse,
  onViewCourseDetails,
}) => {
  // State for student profile
  const [profile, setProfile] = useState<FullStudentProfile>(INITIAL_STUDENT_PROFILE);

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Toast / notification feedback
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSaveProfile = (updated: Partial<FullStudentProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
    showNotification('تم تحديث بياناتك الشخصية بنجاح.');
  };

  const handlePasswordSuccess = () => {
    showNotification('تم تحديث كلمة المرور بنجاح.');
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    showNotification('تم تسجيل الخروج بنجاح.');
    setTimeout(() => {
      onNavigateHome();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F1E8] pb-24 select-none relative overflow-x-hidden">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#151311] border border-[#D6B978]/50 text-xs sm:text-sm font-semibold text-[#F5F1E8] shadow-2xl flex items-center gap-2.5 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 space-y-8">
        
        {/* 1. Hero Identity Banner */}
        <ProfileHero
          profile={profile}
          onEditClick={() => setIsEditModalOpen(true)}
        />

        {/* 2. Main Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Right Column (7 cols): Identity, Academic Record, Journey, Achievements */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Personal Information */}
            <PersonalInformation
              profile={profile}
              onEditClick={() => setIsEditModalOpen(true)}
            />

            {/* Academic Identity */}
            <AcademicIdentity
              academicData={INITIAL_ACADEMIC_IDENTITY}
            />

            {/* Learning Journey Timeline */}
            <LearningJourney
              steps={STUDENT_LEARNING_JOURNEY}
            />

            {/* Achievements */}
            <Achievements
              milestones={PROFILE_ACHIEVEMENTS}
            />
          </div>

          {/* Left Column (5 cols): Current Courses, Preferences, Account Actions, Security */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Current Active Courses (Compact) */}
            <CurrentCourses
              onContinueCourse={onContinueCourse}
              onViewCourseDetails={onViewCourseDetails}
            />

            {/* Learning Preferences */}
            <LearningPreferences
              initialPreferences={INITIAL_STUDENT_PREFERENCES}
            />

            {/* Account Actions (Edit, Password, Logout) */}
            <AccountActions
              onEditProfile={() => setIsEditModalOpen(true)}
              onChangePassword={() => setIsPasswordModalOpen(true)}
              onLogout={() => setIsLogoutModalOpen(true)}
            />

            {/* Security Section */}
            <SecuritySection />
          </div>

        </div>

      </main>

      {/* Modals */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={handlePasswordSuccess}
      />

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirmLogout={handleConfirmLogout}
      />

    </div>
  );
};
