import { CourseDetailData, CurriculumUnit, CourseFAQ, LearningObjectiveItem } from '../types';
import { FEATURED_COURSE, POPULAR_COURSES } from './coursesData';

export const MASTER_GRAMMAR_CURRICULUM: CurriculumUnit[] = [
  {
    id: 'unit-1',
    unitNumberArabic: 'الوحدة الأولى',
    title: 'أساسيات النحو',
    description: 'المدخل الشامل لفهم علم النحو وفلسفة الإعراب والمعاني اللغوية.',
    lessonsCount: 4,
    durationMinutes: 75,
    lessons: [
      {
        id: 'lesson-1-1',
        orderNumber: '01',
        title: 'مقدمة في علم النحو وأهميته',
        durationMinutes: 12,
        durationLabel: '12 دقيقة',
        isPreview: true,
        isLocked: false
      },
      {
        id: 'lesson-1-2',
        orderNumber: '02',
        title: 'خريطة النحو العربي ومنطق الإعراب',
        durationMinutes: 18,
        durationLabel: '18 دقيقة',
        isPreview: false,
        isLocked: false
      },
      {
        id: 'lesson-1-3',
        orderNumber: '03',
        title: 'المعرب والمبني من الألفاظ',
        durationMinutes: 22,
        durationLabel: '22 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-1-4',
        orderNumber: '04',
        title: 'علامات الإعراب الأصلية والفرعية',
        durationMinutes: 23,
        durationLabel: '23 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumberArabic: 'الوحدة الثانية',
    title: 'أقسام الكلام',
    description: 'التمييز الدقيق بين الاسم والفعل والحرف وخواص كل قسم.',
    lessonsCount: 4,
    durationMinutes: 80,
    lessons: [
      {
        id: 'lesson-2-1',
        orderNumber: '05',
        title: 'الاسم وعلاماته المميزة',
        durationMinutes: 18,
        durationLabel: '18 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-2-2',
        orderNumber: '06',
        title: 'الفعل وأقسامه ودلالاته الزمنية',
        durationMinutes: 20,
        durationLabel: '20 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-2-3',
        orderNumber: '07',
        title: 'الحرف وأنواعه ووظائفه في السياق',
        durationMinutes: 17,
        durationLabel: '17 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-2-4',
        orderNumber: '08',
        title: 'تطبيقات عملية على تفكيك النص',
        durationMinutes: 25,
        durationLabel: '25 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumberArabic: 'الوحدة الثالثة',
    title: 'الجملة الاسمية',
    description: 'أركان الجملة الاسمية وأحكام المبتدأ والخبر ونواسخ الابتداء.',
    lessonsCount: 4,
    durationMinutes: 85,
    lessons: [
      {
        id: 'lesson-3-1',
        orderNumber: '09',
        title: 'أركان الجملة: المبتدأ والخبر',
        durationMinutes: 22,
        durationLabel: '22 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-3-2',
        orderNumber: '10',
        title: 'صور الخبر وأحكام التقديم والتأخير',
        durationMinutes: 20,
        durationLabel: '20 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-3-3',
        orderNumber: '11',
        title: 'كان وأخواتها وأثرها الإعرابي',
        durationMinutes: 21,
        durationLabel: '21 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-3-4',
        orderNumber: '12',
        title: 'إنّ وأخواتها وكاد وأخواتها',
        durationMinutes: 22,
        durationLabel: '22 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumberArabic: 'الوحدة الرابعة',
    title: 'الجملة الفعلية',
    description: 'الفعل والفاعل ونائب الفاعل ومنظومة المنصوبات الحيوية.',
    lessonsCount: 4,
    durationMinutes: 80,
    lessons: [
      {
        id: 'lesson-4-1',
        orderNumber: '13',
        title: 'بناء الجملة الفعلية والفاعل',
        durationMinutes: 20,
        durationLabel: '20 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-4-2',
        orderNumber: '14',
        title: 'نائب الفاعل وأحكام الفعل المبني للمجهول',
        durationMinutes: 19,
        durationLabel: '19 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-4-3',
        orderNumber: '15',
        title: 'المفعول به وصوره المتعددة',
        durationMinutes: 18,
        durationLabel: '18 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-4-4',
        orderNumber: '16',
        title: 'المفاعيل: المطلق ولأجله وفيه ومعه',
        durationMinutes: 23,
        durationLabel: '23 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  },
  {
    id: 'unit-5',
    unitNumberArabic: 'الوحدة الخامسة',
    title: 'التطبيقات النحوية',
    description: 'المجرورات والتوابع وتطبيقات حية على آيات وشواهد فصيحة.',
    lessonsCount: 4,
    durationMinutes: 85,
    lessons: [
      {
        id: 'lesson-5-1',
        orderNumber: '17',
        title: 'المجرور بحرف الجر والمجرور بالإضافة',
        durationMinutes: 20,
        durationLabel: '20 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-5-2',
        orderNumber: '18',
        title: 'التوابع: النعت والعطف والتوكيد والبدل',
        durationMinutes: 25,
        durationLabel: '25 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-5-3',
        orderNumber: '19',
        title: 'الحال والتمييز والاستثناء',
        durationMinutes: 22,
        durationLabel: '22 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-5-4',
        orderNumber: '20',
        title: 'نماذج إعرابية تطبيقية من الذكر الحكيم',
        durationMinutes: 18,
        durationLabel: '18 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  },
  {
    id: 'unit-6',
    unitNumberArabic: 'الوحدة السادسة',
    title: 'المراجعة والتطبيق',
    description: 'منهجية إعراب أي نص وتجنب الأخطاء الشائعة واختبار الإتقان.',
    lessonsCount: 4,
    durationMinutes: 80,
    lessons: [
      {
        id: 'lesson-6-1',
        orderNumber: '21',
        title: 'كيف تعرب أي جملة تواجهك بثقة؟',
        durationMinutes: 22,
        durationLabel: '22 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-6-2',
        orderNumber: '22',
        title: 'أشهر الأخطاء النحوية وطرق تفاديها',
        durationMinutes: 18,
        durationLabel: '18 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-6-3',
        orderNumber: '23',
        title: 'التدريب العملي والاختبار الشامل',
        durationMinutes: 25,
        durationLabel: '25 دقيقة',
        isPreview: false,
        isLocked: true
      },
      {
        id: 'lesson-6-4',
        orderNumber: '24',
        title: 'خاتمة الدورة وخارطة المرحلة القادمة',
        durationMinutes: 15,
        durationLabel: '15 دقيقة',
        isPreview: false,
        isLocked: true
      }
    ]
  }
];

export const MASTER_GRAMMAR_LEARNING_OBJECTIVES: LearningObjectiveItem[] = [
  {
    orderNumber: '01',
    title: 'فهم أقسام الكلام',
    description: 'التمييز الدقيق بين الاسم والفعل والحرف ومعرفة خواص كل قسم في التراكيب اللغوية.'
  },
  {
    orderNumber: '02',
    title: 'بناء الجملة الاسمية',
    description: 'معرفة أركان الجملة الأساسية وضوابط الابتداء وصور الخبر المختلفة وأحكامها.'
  },
  {
    orderNumber: '03',
    title: 'فهم المبتدأ والخبر',
    description: 'إتقان حالات التقديم والتأخير وأثر النواسخ (كان وإن وأخواتهما) على المعنى والإعراب.'
  },
  {
    orderNumber: '04',
    title: 'فهم الجملة الفعلية',
    description: 'تحديد الفاعل والمفعول به بدقة والتعامل مع الأفعال المتعدية واللازمة والمبنية للمجهول.'
  },
  {
    orderNumber: '05',
    title: 'تطبيق القواعد',
    description: 'تحليل نصوص فصيحة وتطبيق الأحكام النحوية تدريجيًا على شواهد ونماذج أدبية حقيقية.'
  },
  {
    orderNumber: '06',
    title: 'تصحيح الأخطاء النحوية',
    description: 'اكتشاف اللحن والزلات الشائعة في الكتابة والتحدث وصياغة العبارة بأسلوب عربي سليم.'
  }
];

export const MASTER_GRAMMAR_REQUIREMENTS: string[] = [
  'لا تحتاج إلى خبرة سابقة.',
  'مناسبة للمبتدئين.',
  'يفضل متابعة الدروس بالترتيب.',
  'تحتاج إلى جهاز واتصال بالإنترنت.'
];

export const MASTER_GRAMMAR_FAQS: CourseFAQ[] = [
  {
    question: 'هل أحتاج إلى معرفة سابقة بالنحو؟',
    answer: 'لا، الدورة مصممة من الصفر تمامًا لتبدأ معك من تعريف الكلمة وأقسامها وتتدرج خطوة بخطوة حتى تصل إلى إعراب الجمل المعقدة بثقة.'
  },
  {
    question: 'كم تستغرق الدورة؟',
    answer: 'تبلغ مدة الدروس المسجلة 8 ساعات موزعة على 24 درسًا مكثفًا ومنظمًا. يمكنك إكمالها في أسبوعين بمعدل 45 دقيقة يوميًا أو وفق جدولك الخاص.'
  },
  {
    question: 'هل يمكنني مشاهدة الدروس في أي وقت؟',
    answer: 'نعم، بمجرد الانضمام تصبح كافة الدروس متاحة لك في أي وقت ومن أي جهاز (حاسوب، هاتف، جهاز لوحي) مدى الحياة.'
  },
  {
    question: 'هل الدورة مناسبة للمبتدئين؟',
    answer: 'نعم بالتأكيد، المنهج يركز على الفهم المنطقي والتبسيط العميق بعيدًا عن الحفظ الجاف أو الاصطلاحات المعقدة غير المفسرة.'
  },
  {
    question: 'هل توجد اختبارات وتمارين؟',
    answer: 'نعم، تحتوي كل وحدة على تدريبات تطبيقية ونماذج إعرابية حية مع شروحات مفصلة لحلها وتلافي الأخطاء الشائعة.'
  },
  {
    question: 'هل يمكنني متابعة تقدمي؟',
    answer: 'نعم، المنصة تحفظ مسارك تلقائيًا، حيث يمكنك استئناف المشاهدة من حيث توقفت ومتابعة نسبة إنجازك في كل وحدة.'
  }
];

export const MASTER_GRAMMAR_DETAILS: CourseDetailData = {
  course: FEATURED_COURSE,
  subtitle: 'رحلة متكاملة لفهم النحو وتطبيقه بثقة.',
  heroBadge: 'دورة مميزة',
  teacherName: 'أحمد محمود',
  teacherRole: 'مدرس اللغة العربية',
  teacherStats: [
    { value: '12+', label: 'سنة خبرة' },
    { value: '8,500+', label: 'طالب' },
    { value: '4.9', label: 'تقييم الطلاب' }
  ],
  teacherBio: 'أعمل على تبسيط اللغة العربية وتحويل القواعد والمفاهيم المعقدة إلى خطوات واضحة يمكن للطالب فهمها وتطبيقها.',
  learningObjectives: MASTER_GRAMMAR_LEARNING_OBJECTIVES,
  requirements: MASTER_GRAMMAR_REQUIREMENTS,
  curriculum: MASTER_GRAMMAR_CURRICULUM,
  faqs: MASTER_GRAMMAR_FAQS
};

/**
 * Returns structured CourseDetailData for any course ID.
 */
export function getCourseDetails(courseId?: string | null): CourseDetailData {
  if (!courseId || courseId === 'master-grammar' || courseId === 'grammar-basics') {
    return MASTER_GRAMMAR_DETAILS;
  }

  const allCourses = [FEATURED_COURSE, ...POPULAR_COURSES];
  const matchedCourse = allCourses.find((c) => c.id === courseId) || FEATURED_COURSE;

  if (matchedCourse.id === 'master-grammar') {
    return MASTER_GRAMMAR_DETAILS;
  }

  // Create tailored curriculum units for this specific course
  const unitsCount = Math.max(3, Math.min(6, Math.ceil(matchedCourse.lessonsCount / 4)));
  const lessonsPerUnit = Math.ceil(matchedCourse.lessonsCount / unitsCount);

  const customCurriculum: CurriculumUnit[] = Array.from({ length: unitsCount }, (_, unitIdx) => {
    const unitArabicNames = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة'];
    const unitTitle = matchedCourse.topics[unitIdx] || `مفاهيم ${matchedCourse.categoryArabic} — المرحلة ${unitIdx + 1}`;
    
    const unitLessons = Array.from({ length: lessonsPerUnit }, (_, lessonIdx) => {
      const globalLessonNum = unitIdx * lessonsPerUnit + lessonIdx + 1;
      if (globalLessonNum > matchedCourse.lessonsCount) return null;
      
      const numStr = globalLessonNum < 10 ? `0${globalLessonNum}` : `${globalLessonNum}`;
      return {
        id: `lesson-${unitIdx + 1}-${lessonIdx + 1}`,
        orderNumber: numStr,
        title: lessonIdx === 0 && unitIdx === 0 
          ? `مدخل إلى ${matchedCourse.title}` 
          : `${unitTitle} — الجزء ${lessonIdx + 1}`,
        durationMinutes: 15 + ((lessonIdx + unitIdx) % 8) * 2,
        durationLabel: `${15 + ((lessonIdx + unitIdx) % 8) * 2} دقيقة`,
        isPreview: unitIdx === 0 && lessonIdx === 0,
        isLocked: !(unitIdx === 0 && lessonIdx === 0)
      };
    }).filter(Boolean) as CurriculumUnit['lessons'];

    return {
      id: `unit-${unitIdx + 1}`,
      unitNumberArabic: `الوحدة ${unitArabicNames[unitIdx] || (unitIdx + 1)}`,
      title: unitTitle,
      description: `تغطية تطبيقية شاملة لمحاور ${unitTitle} بإشراف الأستاذ أحمد محمود.`,
      lessonsCount: unitLessons.length,
      durationMinutes: unitLessons.reduce((acc, l) => acc + l.durationMinutes, 0),
      lessons: unitLessons
    };
  });

  return {
    course: matchedCourse,
    subtitle: matchedCourse.description,
    heroBadge: matchedCourse.badge || 'دورة معتمدة',
    teacherName: 'أحمد محمود',
    teacherRole: 'مدرس اللغة العربية',
    teacherStats: [
      { value: '12+', label: 'سنة خبرة' },
      { value: '8,500+', label: 'طالب' },
      { value: '4.9', label: 'تقييم الطلاب' }
    ],
    teacherBio: 'أعمل على تبسيط اللغة العربية وتحويل القواعد والمفاهيم المعقدة إلى خطوات واضحة يمكن للطالب فهمها وتطبيقها.',
    learningObjectives: matchedCourse.topics.length >= 6 ? matchedCourse.topics : [
      ...matchedCourse.topics,
      `فهم منهجية ${matchedCourse.title} خطوة بخطوة`,
      'التطبيق العملي على نصوص فصيحة ونماذج حقيقية',
      'بناء الحصيلة اللغوية والقدرة على التحليل الذاتي',
      'الانتقال بثقة إلى المستويات المتقدمة'
    ],
    requirements: MASTER_GRAMMAR_REQUIREMENTS,
    curriculum: customCurriculum,
    faqs: [
      {
        question: `هل أحتاج إلى معرفة سابقة في ${matchedCourse.categoryArabic}؟`,
        answer: `صُممت هذه الدورة لتناسب مستوى (${matchedCourse.level}) وتتدرج معك خطوة بخطوة من المفاهيم الأساسية.`
      },
      ...MASTER_GRAMMAR_FAQS.slice(1)
    ]
  };
}
