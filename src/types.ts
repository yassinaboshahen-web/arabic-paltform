export interface Course {
  id: string;
  title: string;
  category: 'grammar' | 'rhetoric' | 'reading' | 'writing' | 'advanced';
  categoryArabic: string;
  description: string;
  longDescription?: string;
  lessonsCount: number;
  durationHours: number;
  level: 'مبتدئ' | 'متوسط' | 'متقدم' | 'شامل';
  rating: number;
  studentsCount: number;
  badge?: string;
  isPopular?: boolean;
  topics: string[];
}

export interface LearningCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  courseCount: number;
  accentColor: string;
  glowColor: string;
  keyConcepts: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface LearningBenefit {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
  featureSnippet: string;
}

export interface TeacherMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CourseLesson {
  id: string;
  orderNumber: string;
  title: string;
  durationMinutes: number;
  durationLabel: string;
  isPreview?: boolean;
  isLocked?: boolean;
}

export interface CurriculumUnit {
  id: string;
  unitNumberArabic: string;
  title: string;
  description?: string;
  lessonsCount: number;
  durationMinutes: number;
  lessons: CourseLesson[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface LearningObjectiveItem {
  orderNumber: string;
  title: string;
  description: string;
}

export interface CourseDetailData {
  course: Course;
  subtitle: string;
  heroBadge: string;
  teacherName: string;
  teacherRole: string;
  teacherStats: { value: string; label: string }[];
  teacherBio: string;
  learningObjectives: (string | LearningObjectiveItem)[];
  requirements: string[];
  curriculum: CurriculumUnit[];
  faqs: CourseFAQ[];
}

export interface LessonNote {
  id: string;
  lessonId: string;
  timestampSeconds?: number;
  timestampLabel?: string;
  text: string;
  createdAt: string;
}

export interface LessonResourceFile {
  id: string;
  title: string;
  fileType: 'PDF' | 'DOCX' | 'ZIP' | 'AUDIO';
  size: string;
  pagesOrDuration?: string;
  downloadUrl?: string;
}

export interface LessonQuestionItem {
  id: string;
  authorName: string;
  timeAgo: string;
  question: string;
  votesCount: number;
  answer?: {
    teacherName: string;
    teacherBadge: string;
    answerText: string;
    timeAgo: string;
  };
}

export interface LessonObjectiveItem {
  orderNumber: string;
  title: string;
  description: string;
}

export interface LessonDetailPayload {
  id: string;
  courseId: string;
  unitId: string;
  unitTitle: string;
  orderNumber: string;
  title: string;
  durationMinutes: number;
  durationLabel: string;
  videoUrl?: string;
  posterImage?: string;
  description: string;
  teacherName: string;
  teacherRole: string;
  objectives: LessonObjectiveItem[];
  resources: LessonResourceFile[];
  defaultNotes: LessonNote[];
  questions: LessonQuestionItem[];
  summaryText: string;
}

// Student Dashboard Types
export interface StudentProfile {
  name: string;
  title?: string;
  memberSince: string;
  activeCoursesCount: number;
}

export interface EnrolledCourseItem {
  id: string;
  courseId: string;
  title: string;
  teacher: string;
  progressPercent: number;
  completedLessons: number;
  totalLessons: number;
  totalDuration: string;
  durationRemaining: string;
  currentLesson: {
    id: string;
    title: string;
    orderNumber: string;
    durationLabel: string;
  };
  nextLesson?: {
    id: string;
    title: string;
    orderNumber: string;
    durationLabel: string;
  };
  coverImage: string;
  categoryArabic: string;
  lastAccessed: string;
}

export interface StudentActivityItem {
  id: string;
  type: 'completed' | 'started' | 'watched' | 'note';
  title: string;
  courseTitle: string;
  timeAgo: string;
}

export interface StudentDashboardNote {
  id: string;
  text: string;
  courseTitle: string;
  lessonTitle?: string;
  date: string;
}

export interface WeeklyStudyDay {
  dayNameArabic: string;
  shortName: string;
  minutesSpent: number;
  isToday?: boolean;
}

export interface AcademicMilestone {
  id: string;
  title: string;
  description: string;
  earnedDate?: string;
  isUnlocked: boolean;
  category: string;
}

export interface DashboardOverviewStats {
  completedLessons: number;
  totalLessons: number;
  progressPercent: number;
  studyHours: number;
}

// Student Profile Specific Types
export interface FullStudentProfile {
  name: string;
  role: string;
  status: string;
  email: string;
  accountType: string;
  joinDate: string;
  level: string;
  avatarUrl?: string;
}

export interface StudentAcademicIdentity {
  level: string;
  activeCoursesCount: number;
  completedLessonsCount: number;
  studyHoursCount: number;
}

export interface LearningJourneyStep {
  id: string;
  dateOrOrder: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface StudentLearningPreferences {
  platformLanguage: string;
  autoPlayNextLesson: boolean;
  videoQuality: 'auto' | '1080p' | '720p' | '480p';
  learningNotifications: boolean;
}

// Student Notification Specific Types
export type NotificationType = 'course' | 'teacher' | 'reminder' | 'system';
export type NotificationDateGroup = 'today' | 'yesterday' | 'this_week' | 'older';

export interface StudentNotification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  dateGroup: NotificationDateGroup;
  read: boolean;
  actionLabel?: string;
  courseId?: string;
  lessonId?: string;
  teacherName?: string;
  teacherAvatar?: string;
  messageBody?: string;
  systemDetails?: string;
}

