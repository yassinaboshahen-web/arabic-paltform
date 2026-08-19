import { 
  FullStudentProfile, 
  StudentAcademicIdentity, 
  LearningJourneyStep, 
  AcademicMilestone, 
  StudentLearningPreferences 
} from '../types';

export const INITIAL_STUDENT_PROFILE: FullStudentProfile = {
  name: 'ياسين',
  role: 'طالب في أكاديمية أحمد محمود',
  status: 'طالب نشط',
  email: 'yassin@example.com',
  accountType: 'طالب',
  joinDate: 'أغسطس 2026',
  level: 'مبتدئ',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
};

export const INITIAL_ACADEMIC_IDENTITY: StudentAcademicIdentity = {
  level: 'مبتدئ',
  activeCoursesCount: 3,
  completedLessonsCount: 16,
  studyHoursCount: 8,
};

export const STUDENT_LEARNING_JOURNEY: LearningJourneyStep[] = [
  {
    id: 'journey-1',
    dateOrOrder: 'أغسطس 2026',
    title: 'انضممت إلى الأكاديمية',
    description: 'تسجيل الحساب والبدء في الاستكشاف الأكاديمي لمناهج اللغة العربية.',
    isCompleted: true,
  },
  {
    id: 'journey-2',
    dateOrOrder: 'ثم',
    title: 'بدأت أول دورة',
    description: 'الانضمام لمسار «النحو من الصفر إلى الإتقان» مع الأستاذ أحمد محمود.',
    isCompleted: true,
  },
  {
    id: 'journey-3',
    dateOrOrder: 'ثم',
    title: 'أكملت أول 10 دروس',
    description: 'اجتياز تدريبات علامات الإعراب وبناء الجملة الاسمية بنجاح.',
    isCompleted: true,
  },
  {
    id: 'journey-4',
    dateOrOrder: 'ثم',
    title: 'وصلت إلى 68% من أول دورة',
    description: 'إتمام ١٦ درسًا وتطبيقاتها اللغوية مع المتابعة المستمرة.',
    isCompleted: true,
  },
];

export const PROFILE_ACHIEVEMENTS: AcademicMilestone[] = [
  {
    id: 'ach-1',
    title: 'أكملت أول 10 دروس',
    description: 'إتمام عشر جلسات دراسية بنجاح مع حل التطبيقات التفاعلية',
    earnedDate: 'أغسطس 2026',
    isUnlocked: true,
    category: 'الاستمرارية',
  },
  {
    id: 'ach-2',
    title: 'أول أسبوع تعلم',
    description: 'المواظبة على دراسة الدروس لسبعة أيام متتالية دون انقطاع',
    earnedDate: 'أغسطس 2026',
    isUnlocked: true,
    category: 'الانضباط',
  },
  {
    id: 'ach-3',
    title: 'أكملت أول دورة',
    description: 'إتمام جميع دروس واختبارات المنهج التأسيسي بالكامل',
    isUnlocked: false,
    category: 'الختام',
  },
  {
    id: 'ach-4',
    title: 'حافظت على استمرارية التعلم',
    description: 'المحافظة على معدل أسبوعي ثابت يزيد عن ٥ ساعات دراسية',
    earnedDate: 'أغسطس 2026',
    isUnlocked: true,
    category: 'التفوق',
  },
];

export const INITIAL_STUDENT_PREFERENCES: StudentLearningPreferences = {
  platformLanguage: 'العربية',
  autoPlayNextLesson: true,
  videoQuality: 'auto',
  learningNotifications: true,
};
