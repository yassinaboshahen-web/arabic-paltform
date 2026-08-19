import { Course, LearningCategory, LearningBenefit, StatItem, TeacherMilestone } from '../types';

export const ACADEMY_STATS: StatItem[] = [
  { value: '12+', label: 'سنة خبرة', sublabel: 'في التدريس الأكاديمي والتبسيط المنهجي' },
  { value: '8,500+', label: 'طالب', sublabel: 'أتقنوا قواعد التعبير والتحدث بفصاحة' },
  { value: '120+', label: 'درس', sublabel: 'مُسجل بجودة سينمائية فائقة الوضوح' },
  { value: '4.9', label: 'تقييم الطلاب', sublabel: 'من إجمالي 4,200+ مراجعة موثقة' },
];

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'grammar',
    title: 'النحو',
    subtitle: 'ابنِ أساسًا قويًا في قواعد اللغة.',
    description: 'فهم منطق الإعراب من الصفر حتى المعاني الدقيقة، بعيدًا عن الحفظ العشوائي والتعقيد.',
    iconName: 'BookOpen',
    courseCount: 5,
    accentColor: '#D6B978', // Champagne Gold
    glowColor: 'rgba(214, 185, 120, 0.16)',
    keyConcepts: ['الإعراب والبناء', 'الجملة الاسمية والفعلية', 'المفاعيل والتوابع', 'إعراب القرآن الكريم']
  },
  {
    id: 'rhetoric',
    title: 'البلاغة',
    subtitle: 'اكتشف جمال التعبير العربي وأساليبه.',
    description: 'تذوق أسرار البيان والمعاني والبديع لفهم الإعجاز الأدبي وإثراء خيالك اللغوي.',
    iconName: 'Sparkles',
    courseCount: 4,
    accentColor: '#E7D29A', // Light Champagne
    glowColor: 'rgba(101, 31, 42, 0.30)',
    keyConcepts: ['علم البيان والتشبيه', 'علم المعاني والإيجاز', 'المحسنات البديعية', 'تحليل النصوص الأدبية']
  },
  {
    id: 'reading',
    title: 'القراءة والتعبير',
    subtitle: 'طوّر قدرتك على الفهم والكتابة والتعبير.',
    description: 'إتقان الصياغة النثرية وتنمية الحصيلة اللغوية والقدرة على الكتابة الإبداعية والخطابة.',
    iconName: 'PenTool',
    courseCount: 4,
    accentColor: '#D6B978', // Champagne
    glowColor: 'rgba(214, 185, 120, 0.12)',
    keyConcepts: ['بناء المقال الفصيح', 'التلخيص والتحليل', 'الضبط الإملائي المتقن', 'الإلقاء والتحدث الواثق']
  }
];

export const EXPLORE_CATEGORIES = [
  { id: 'all', label: 'كل الدورات' },
  { id: 'grammar', label: 'النحو' },
  { id: 'rhetoric', label: 'البلاغة' },
  { id: 'reading', label: 'القراءة' },
  { id: 'writing', label: 'التعبير' },
  { id: 'spelling', label: 'الإملاء' },
  { id: 'skills', label: 'مهارات اللغة' },
];

export const FEATURED_COURSE: Course = {
  id: 'master-grammar',
  title: 'النحو من الصفر إلى الإتقان',
  category: 'grammar',
  categoryArabic: 'النحو',
  description: 'مسار متكامل يبدأ معك من الأساسيات ويأخذك خطوة بخطوة نحو فهم النحو وتطبيقه.',
  longDescription: 'مسار متكامل يبدأ معك من الأساسيات ويأخذك خطوة بخطوة نحو فهم النحو وتطبيقه، مع نماذج إعرابية تطبيقية حية وتفكيك عملي لأصعب شواهد القواعد بأسلوب الأستاذ أحمد محمود السلس.',
  lessonsCount: 24,
  durationHours: 8,
  level: 'مبتدئ',
  rating: 4.98,
  studentsCount: 3420,
  badge: 'اختيار الأكاديمية الأول',
  isPopular: true,
  topics: [
    'التمييز بين الاسم والفعل والحرف',
    'علامات الإعراب الأصلية والفرعية',
    'بناء الجملة الاسمية وأحكام المبتدأ والخبر',
    'الأفعال الخمسة والأسماء الستة',
    'المنصوبات: المفعول به والمطلق ولأجله',
    'المجرورات بحرف الجر وبالإضافة'
  ]
};

export const POPULAR_COURSES: Course[] = [
  {
    id: 'grammar-basics',
    title: 'أساسيات النحو العربي',
    category: 'grammar',
    categoryArabic: 'النحو',
    description: 'ابدأ من الأساسيات وابنِ فهمًا قويًا لقواعد اللغة.',
    lessonsCount: 24,
    durationHours: 8,
    level: 'مبتدئ',
    rating: 4.90,
    studentsCount: 2850,
    badge: 'الأعلى إقبالاً',
    isPopular: true,
    topics: ['أقسام الكلمة الثلاثة', 'المعرب والمبني', 'حركات الإعراب الظاهرة والمقدرة', 'تطبيقات إعرابية يومية']
  },
  {
    id: 'intro-rhetoric',
    title: 'مدخل إلى البلاغة',
    category: 'rhetoric',
    categoryArabic: 'البلاغة',
    description: 'تعرف على جمال التعبير العربي وأساليبه.',
    lessonsCount: 18,
    durationHours: 6,
    level: 'متوسط',
    rating: 4.88,
    studentsCount: 1640,
    badge: 'مميز',
    topics: ['التشبيه وأركانه', 'الاستعارة المكنية والتصريحية', 'الكناية وسر جمالها', 'الطباق والمقابلة والجناس']
  },
  {
    id: 'reading-comprehension',
    title: 'مهارات القراءة والفهم',
    category: 'reading',
    categoryArabic: 'القراءة',
    description: 'طوّر قدرتك على قراءة النصوص وفهمها.',
    lessonsCount: 16,
    durationHours: 5,
    level: 'مبتدئ',
    rating: 4.92,
    studentsCount: 1210,
    badge: 'أساسي',
    topics: ['القراءة الاستيعابية السريعة', 'استخراج الفكرة الرئيسة', 'قراءة ما بين السطور', 'نقد وتذوق النصوص']
  },
  {
    id: 'expression-writing',
    title: 'فن التعبير والكتابة',
    category: 'writing',
    categoryArabic: 'التعبير',
    description: 'تعلم كيف تعبّر عن أفكارك بوضوح وقوة.',
    lessonsCount: 20,
    durationHours: 7,
    level: 'متوسط',
    rating: 4.95,
    studentsCount: 1980,
    badge: 'تطبيقي',
    topics: ['هيكلة المقال الأدبي', 'اختيار المفردات الفصيحة', 'تجنب الحشو والركاكة', 'نماذج الكتابة الإقناعية']
  },
  {
    id: 'spelling-punctuation',
    title: 'الإملاء وعلامات الترقيم',
    category: 'writing',
    categoryArabic: 'الإملاء',
    description: 'اكتب بشكل صحيح وواضح.',
    lessonsCount: 14,
    durationHours: 4,
    level: 'مبتدئ',
    rating: 4.96,
    studentsCount: 2430,
    badge: 'مهارة أساسية',
    topics: ['همزتا الوصل والقطع', 'الهمزة المتوسطة والمتطرفة', 'الألف اللينة في الأفعال والأسماء', 'مواضع علامات الترقيم']
  },
  {
    id: 'advanced-grammar',
    title: 'النحو المتقدم',
    category: 'advanced',
    categoryArabic: 'مهارات اللغة',
    description: 'انتقل إلى مستوى أعمق في دراسة النحو.',
    lessonsCount: 30,
    durationHours: 10,
    level: 'متقدم',
    rating: 4.97,
    studentsCount: 970,
    badge: 'مستوى متقدم',
    topics: ['إعراب الجمل وشبه الجمل', 'التنازع والاشتغال', 'حروف الجر الزائدة والشبيهة بالزائدة', 'إعراب الشواهد القرآنية']
  }
];

export const RECOMMENDED_COURSES: Course[] = [
  POPULAR_COURSES[0], // أساسيات النحو العربي
  POPULAR_COURSES[1], // مدخل إلى البلاغة
  POPULAR_COURSES[2], // مهارات القراءة والفهم
];

export const LEARNING_BENEFITS: LearningBenefit[] = [
  {
    id: 'clear-video',
    title: 'دروس فيديو واضحة',
    description: 'شرح منظم يساعدك على الفهم خطوة بخطوة.',
    tag: 'تصوير احترافي بدقة 4K',
    iconName: 'PlayCircle',
    featureSnippet: 'تسجيل في استوديو أكاديمي بأحدث تقنيات الإضاءة والصوت مع سبورة ذكية توضيحية.'
  },
  {
    id: 'quizzes-exercises',
    title: 'اختبارات وتمارين',
    description: 'اختبر فهمك وطبّق ما تعلمته.',
    tag: 'تصحيح فوري وشرح للحلول',
    iconName: 'CheckCircle2',
    featureSnippet: 'تمارين تفاعلية متدرجة في الصعوبة بعد كل درس لترسيخ القواعد وتلافي الأخطاء الشائعة.'
  },
  {
    id: 'progress-hub',
    title: 'تقدمك في مكان واحد',
    description: 'تابع رحلتك التعليمية واعرف دائمًا أين وصلت.',
    tag: 'مؤشرات ذكية وخريطة مسار',
    iconName: 'TrendingUp',
    featureSnippet: 'لوحة تفاعلية تبرز نقاط قوتك وما يحتاج إلى مراجعة مع احتساب ساعات التعلم والإنجاز.'
  },
  {
    id: 'smart-help',
    title: 'مساعدة ذكية',
    description: 'احصل على مساعدة إضافية عندما تحتاجها.',
    tag: 'متاح 24/7 للإجابة الفورية',
    iconName: 'Sparkles',
    featureSnippet: 'مساعد ذكي مدرب على منهج الأستاذ أحمد للإجابة عن التساؤلات النحوية وتقديم إعراب فوري.'
  }
];

export const TEACHER_MILESTONES: TeacherMilestone[] = [
  {
    year: '12+',
    title: 'سنة في التدريس والبحث',
    description: 'تخريج آلاف المتفوقين في اختبارات القدرات والتحصيلي واللغة العربية العامة.'
  },
  {
    year: '100%',
    title: 'منهج أصيل ومُبسّط',
    description: 'تفكيك القواعد الجافة وتقديمها بطريقة عصرية ممتعة تناسب جميع الفئات.'
  },
  {
    year: '4.9★',
    title: 'ثقة المجتمع التعليمي',
    description: 'أعلى تقييم لبرامج تعليم اللغة العربية على المنصات الأكاديمية.'
  }
];
