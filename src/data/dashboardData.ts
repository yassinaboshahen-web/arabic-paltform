import {
  StudentProfile,
  EnrolledCourseItem,
  StudentActivityItem,
  StudentDashboardNote,
  WeeklyStudyDay,
  AcademicMilestone,
  DashboardOverviewStats,
} from '../types';

export const STUDENT_PROFILE: StudentProfile = {
  name: 'ياسين',
  title: 'طالب في مسار النحو المتقدم',
  memberSince: 'رجب ١٤٤٧ هـ',
  activeCoursesCount: 3,
};

export const DASHBOARD_OVERVIEW_STATS: DashboardOverviewStats = {
  completedLessons: 16,
  totalLessons: 24,
  progressPercent: 68,
  studyHours: 8,
};

export const CONTINUE_LEARNING_COURSE: EnrolledCourseItem = {
  id: 'enrolled-master-grammar',
  courseId: 'master-grammar',
  title: 'النحو من الصفر إلى الإتقان',
  teacher: 'أحمد محمود',
  progressPercent: 68,
  completedLessons: 16,
  totalLessons: 24,
  totalDuration: '8 ساعات',
  durationRemaining: 'حوالي ساعتين متبقيتان',
  currentLesson: {
    id: 'lesson-1-1',
    title: 'مقدمة في علم النحو',
    orderNumber: 'الدرس ٠١',
    durationLabel: '١٢:٤٥ دقيقة',
  },
  nextLesson: {
    id: 'lesson-1-2',
    title: 'أقسام الكلام (الاسم والفعل والحرف)',
    orderNumber: 'الدرس ٠٢',
    durationLabel: '١٨:٣٠ دقيقة',
  },
  coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
  categoryArabic: 'النحو والإعراب',
  lastAccessed: 'منذ ساعتين',
};

export const ENROLLED_COURSES: EnrolledCourseItem[] = [
  CONTINUE_LEARNING_COURSE,
  {
    id: 'enrolled-arabic-basics',
    courseId: 'arabic-basics',
    title: 'أساسيات اللغة العربية وقواعد الإملاء',
    teacher: 'أحمد محمود',
    progressPercent: 32,
    completedLessons: 6,
    totalLessons: 18,
    totalDuration: '5 ساعات',
    durationRemaining: 'حوالي ٣ ساعات و٢٠ دقيقة',
    currentLesson: {
      id: 'lesson-basics-4',
      title: 'همزة الوصل والقطع في الأسماء والأفعال',
      orderNumber: 'الدرس ٠٦',
      durationLabel: '١٥:٠٠ دقيقة',
    },
    nextLesson: {
      id: 'lesson-basics-5',
      title: 'التاء المربوطة والمفتوحة والهاء',
      orderNumber: 'الدرس ٠٧',
      durationLabel: '١٤:١٠ دقيقة',
    },
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    categoryArabic: 'الإملاء والرسم',
    lastAccessed: 'منذ ٣ أيام',
  },
  {
    id: 'enrolled-pro-writing',
    courseId: 'pro-writing',
    title: 'الكتابة العربية باحتراف والأساليب البيانية',
    teacher: 'أحمد محمود',
    progressPercent: 14,
    completedLessons: 3,
    totalLessons: 20,
    totalDuration: '7 ساعات',
    durationRemaining: 'حوالي ٦ ساعات',
    currentLesson: {
      id: 'lesson-write-3',
      title: 'صناعة الجملة البلاغية والربط الدلالي',
      orderNumber: 'الدرس ٠٣',
      durationLabel: '٢٠:٤٠ دقيقة',
    },
    nextLesson: {
      id: 'lesson-write-4',
      title: 'تطبيقات التشبيه والاستعارة في السرد',
      orderNumber: 'الدرس ٠٤',
      durationLabel: '١٩:١٥ دقيقة',
    },
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    categoryArabic: 'البلاغة والإنشاء',
    lastAccessed: 'منذ ٥ أيام',
  },
];

export const RECENT_ACTIVITIES: StudentActivityItem[] = [
  {
    id: 'act-1',
    type: 'completed',
    title: 'مقدمة في علم النحو',
    courseTitle: 'النحو من الصفر إلى الإتقان',
    timeAgo: 'منذ ساعتين',
  },
  {
    id: 'act-2',
    type: 'started',
    title: 'أقسام الكلام (الاسم والفعل والحرف)',
    courseTitle: 'النحو من الصفر إلى الإتقان',
    timeAgo: 'أمس',
  },
  {
    id: 'act-3',
    type: 'watched',
    title: 'مدخل إلى الجملة الاسمية ونواسخها',
    courseTitle: 'النحو من الصفر إلى الإتقان',
    timeAgo: 'منذ 3 أيام',
  },
  {
    id: 'act-4',
    type: 'note',
    title: 'أضفت ملاحظة إعرابية حول همزة الوصل',
    courseTitle: 'أساسيات اللغة العربية',
    timeAgo: 'منذ 4 أيام',
  },
];

export const STUDENT_DASHBOARD_NOTES: StudentDashboardNote[] = [
  {
    id: 'note-1',
    text: 'مراجعة أقسام الكلام قبل الدرس القادم، والتركيز على علامات الاسم الثلاث (الجر والتنوين والنداء والـ).',
    courseTitle: 'النحو من الصفر إلى الإتقان',
    lessonTitle: 'مقدمة في علم النحو',
    date: 'اليوم، ٠٤:٣٠ م',
  },
  {
    id: 'note-2',
    text: 'المبتدأ والخبر يحتاجان إلى مراجعة وتطبيق إعرابي على الآيات القرآنية في الوحدة الأولى.',
    courseTitle: 'النحو من الصفر إلى الإتقان',
    lessonTitle: 'مدخل إلى الجملة الاسمية',
    date: 'أمس، ٠٩:١٥ م',
  },
  {
    id: 'note-3',
    text: 'التفريق الدقيق بين همزة الوصل وهمزة القطع في الأفعال الخماسية والسداسية وأمر الثلاثي.',
    courseTitle: 'أساسيات اللغة العربية',
    lessonTitle: 'همزة الوصل والقطع',
    date: 'منذ ٣ أيام',
  },
];

export const WEEKLY_STUDY_ACTIVITY: WeeklyStudyDay[] = [
  { dayNameArabic: 'السبت', shortName: 'سبت', minutesSpent: 45 },
  { dayNameArabic: 'الأحد', shortName: 'أحد', minutesSpent: 60 },
  { dayNameArabic: 'الإثنين', shortName: 'إثنين', minutesSpent: 30 },
  { dayNameArabic: 'الثلاثاء', shortName: 'ثلاثاء', minutesSpent: 85 },
  { dayNameArabic: 'الأربعاء', shortName: 'أربعاء', minutesSpent: 50 },
  { dayNameArabic: 'الخميس', shortName: 'خميس', minutesSpent: 75 },
  { dayNameArabic: 'الجمعة', shortName: 'جمعة', minutesSpent: 40, isToday: true },
];

export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    id: 'mile-1',
    title: 'أكملت أول 10 دروس',
    description: 'إتمام عشر جلسات دراسية بنجاح مع حل التطبيقات',
    earnedDate: 'قبل ٥ أيام',
    isUnlocked: true,
    category: 'الاستمرارية',
  },
  {
    id: 'mile-2',
    title: 'أول أسبوع تعلم منتظم',
    description: 'متابعة الدروس يوميًا طوال ٧ أيام متواصلة',
    earnedDate: 'اليوم',
    isUnlocked: true,
    category: 'الانضباط',
  },
  {
    id: 'mile-3',
    title: 'إتقان علامات الإعراب',
    description: 'اجتياز جميع تدريبات علامات الإعراب الأصلية والفرعية',
    earnedDate: 'قبل أسبوعين',
    isUnlocked: true,
    category: 'التحصيل',
  },
  {
    id: 'mile-4',
    title: 'أنهيت أول دورة كاملة',
    description: 'إتمام جميع دروس واختبارات الدورة التأسيسية',
    isUnlocked: false,
    category: 'الختام',
  },
];
