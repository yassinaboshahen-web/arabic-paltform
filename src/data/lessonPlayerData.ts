import { LessonDetailPayload, CurriculumUnit } from '../types';
import lessonPoster from '../assets/images/lesson_player_cinematic_1786979635721.jpg';
import { MASTER_GRAMMAR_CURRICULUM } from './courseDetailsData';

export const DEFAULT_LESSON_ID = 'lesson-1-1';

export const LESSONS_DATABASE: Record<string, LessonDetailPayload> = {
  'lesson-1-1': {
    id: 'lesson-1-1',
    courseId: 'master-grammar',
    unitId: 'unit-1',
    unitTitle: 'الوحدة الأولى: أساسيات النحو',
    orderNumber: '01',
    title: 'مقدمة في علم النحو وأهميته',
    durationMinutes: 12,
    durationLabel: '12 دقيقة',
    posterImage: lessonPoster,
    description: 'في هذا الدرس سنتعرف على مفهوم النحو وأهميته، ونبدأ ببناء الأساس الذي سنحتاج إليه خلال بقية الدورة.',
    teacherName: 'أحمد محمود',
    teacherRole: 'مدرس اللغة العربية وباحث في تيسير علوم اللسان',
    summaryText: 'علم النحو هو عصب اللسان العربي، وهو المفتاح الأساس لفهم المعاني الدقيقة والتراكيب البلاغية في القرآن الكريم والشعر العربي الفصيح.',
    objectives: [
      {
        orderNumber: '01',
        title: 'فهم مفهوم علم النحو',
        description: 'التعرف على نشأة علم النحو وأسبابه وواضعه وأثره في حفظ اللسان العربي من اللحن.'
      },
      {
        orderNumber: '02',
        title: 'معرفة أهمية النحو',
        description: 'إدراك منزلة النحو في فهم معاني القرآن الكريم والنصوص العربية وصيانة التراكيب.'
      },
      {
        orderNumber: '03',
        title: 'الاستعداد لدراسة القواعد الأساسية',
        description: 'بناء التصور الكلي للخريطة النحوية وكيفية التعامل مع الإعراب كعلم معانٍ وليس مجرد حركات.'
      }
    ],
    resources: [
      {
        id: 'res-1',
        title: 'ملخص الدرس - مقدمة في علم النحو',
        fileType: 'PDF',
        size: '2.4 MB',
        pagesOrDuration: '6 صفحات',
        downloadUrl: '#'
      },
      {
        id: 'res-2',
        title: 'تمارين الدرس وتطبيقات الشواهد',
        fileType: 'PDF',
        size: '1.8 MB',
        pagesOrDuration: '4 صفحات',
        downloadUrl: '#'
      },
      {
        id: 'res-3',
        title: 'خريطة النحو العربي الشاملة',
        fileType: 'PDF',
        size: '3.1 MB',
        pagesOrDuration: 'ملصق تعليمي',
        downloadUrl: '#'
      }
    ],
    defaultNotes: [
      {
        id: 'note-1',
        lessonId: 'lesson-1-1',
        timestampSeconds: 255,
        timestampLabel: '04:15',
        text: 'مراجعة أقسام الكلام قبل الدرس القادم والتركيز على علامات الاسم.',
        createdAt: 'اليوم، 10:30 ص'
      },
      {
        id: 'note-2',
        lessonId: 'lesson-1-1',
        timestampSeconds: 510,
        timestampLabel: '08:30',
        text: 'النحو علم يضبط أواخر الكلم ويفصح عن المعنى المراد للمتكلم.',
        createdAt: 'أمس، 06:15 م'
      }
    ],
    questions: [
      {
        id: 'q-1',
        authorName: 'سارة العتيبي',
        timeAgo: 'منذ ساعتين',
        question: 'ما أهمية علم النحو في اللغة العربية وكيف يؤثر على المعنى؟',
        votesCount: 14,
        answer: {
          teacherName: 'أحمد محمود',
          teacherBadge: 'أستاذ المادة',
          answerText: 'علم النحو هو ميزان المعنى؛ فبالإعراب يُعرف الفاعل من المفعول، ويستقيم الفهم للنص القرآني والبيان العربي دون لبس أو غموض.',
          timeAgo: 'منذ ساعة'
        }
      },
      {
        id: 'q-2',
        authorName: 'عمر خالد',
        timeAgo: 'منذ يوم',
        question: 'هل معرفة قصة نشأة النحو ضرورية لاستيعاب الإعراب؟',
        votesCount: 8,
        answer: {
          teacherName: 'أحمد محمود',
          teacherBadge: 'أستاذ المادة',
          answerText: 'معرفة سياق النشأة يمنحك الفهم المنطقي لكيفية ولادة القاعدة ويجعل تعلمها متعة فكرية ترتبط باللسان وليست مجرد معادلات جافة.',
          timeAgo: 'منذ 18 ساعة'
        }
      }
    ]
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    courseId: 'master-grammar',
    unitId: 'unit-1',
    unitTitle: 'الوحدة الأولى: أساسيات النحو',
    orderNumber: '02',
    title: 'خريطة النحو العربي ومنطق الإعراب',
    durationMinutes: 18,
    durationLabel: '18 دقيقة',
    posterImage: lessonPoster,
    description: 'في هذا الدرس سنرسم معًا الهيكل البنائي لعلم النحو، ونفهم كيف تترابط الجمل والكلمات في منظومة واحدة.',
    teacherName: 'أحمد محمود',
    teacherRole: 'مدرس اللغة العربية وباحث في تيسير علوم اللسان',
    summaryText: 'خريطة النحو تمكنك من رؤية الموقع الإعرابي لكل كلمة ضمن سياق الجملة الواسعة دون تشتت.',
    objectives: [
      {
        orderNumber: '01',
        title: 'رسم الهيكل العام للنحو',
        description: 'معرفة أركان الجملة العربية ومكملاتها وعوامل التأثير الإعرابي.'
      },
      {
        orderNumber: '02',
        title: 'فهم منطق الإعراب والبناء',
        description: 'التمييز بين ما يلزم حركة واحدة وما يتغير بحسب موقعه.'
      },
      {
        orderNumber: '03',
        title: 'التطبيق على نماذج قرآنية',
        description: 'استخراج المواقع الإعرابية الكبرى من الآيات الكريمة.'
      }
    ],
    resources: [
      {
        id: 'res-2-1',
        title: 'مخطط خريطة الإعراب الذهنية',
        fileType: 'PDF',
        size: '2.1 MB',
        pagesOrDuration: '5 صفحات',
        downloadUrl: '#'
      },
      {
        id: 'res-2-2',
        title: 'جدول العوامل والمعمولات',
        fileType: 'PDF',
        size: '1.4 MB',
        pagesOrDuration: '3 صفحات',
        downloadUrl: '#'
      }
    ],
    defaultNotes: [
      {
        id: 'note-2-1',
        lessonId: 'lesson-1-2',
        timestampSeconds: 180,
        timestampLabel: '03:00',
        text: 'الجملة في العربية إما اسمية ذات مبتدأ وخبر، أو فعلية ذات فعل وفاعل.',
        createdAt: 'منذ 3 ساعات'
      }
    ],
    questions: [
      {
        id: 'q-2-1',
        authorName: 'ياسين أحمد',
        timeAgo: 'منذ 3 ساعات',
        question: 'هل شبه الجملة يعد ركنًا أساسيًا أم مكملًا؟',
        votesCount: 6,
        answer: {
          teacherName: 'أحمد محمود',
          teacherBadge: 'أستاذ المادة',
          answerText: 'شبه الجملة (الجار والمجرور أو الظرف) من المكملات أو المتعلقات، إلا إذا وقع خبرًا في محل رفع.',
          timeAgo: 'منذ ساعتين'
        }
      }
    ]
  }
};

export function getLessonDetails(lessonId?: string | null): LessonDetailPayload {
  if (lessonId && LESSONS_DATABASE[lessonId]) {
    return LESSONS_DATABASE[lessonId];
  }
  return LESSONS_DATABASE[DEFAULT_LESSON_ID];
}

export function getCurriculumWithProgress(curriculum: CurriculumUnit[], completedLessonIds: string[] = ['lesson-1-1']) {
  return curriculum.map((unit) => {
    return {
      ...unit,
      lessons: unit.lessons.map((lesson) => {
        const isCompleted = completedLessonIds.includes(lesson.id);
        return {
          ...lesson,
          isCompleted,
        };
      })
    };
  });
}
