import React from 'react';
import { StudentAcademicIdentity } from '../../types';

interface AcademicIdentityProps {
  academicData: StudentAcademicIdentity;
}

export const AcademicIdentity: React.FC<AcademicIdentityProps> = ({
  academicData,
}) => {
  const items = [
    {
      id: 'level',
      value: academicData.level,
      label: 'المستوى الأكاديمي',
      detail: 'مسار التأسيس والتدرج',
    },
    {
      id: 'activeCourses',
      value: academicData.activeCoursesCount.toString(),
      label: 'الدورات النشطة',
      detail: 'مناهج قيد الدراسة',
    },
    {
      id: 'completedLessons',
      value: academicData.completedLessonsCount.toString(),
      label: 'الدروس المكتملة',
      detail: 'جلسات وتطبيقات منجزة',
    },
    {
      id: 'studyHours',
      value: `${academicData.studyHoursCount} س`,
      label: 'ساعات التعلم',
      detail: 'استثمار تحصيلي فعلي',
    },
  ];

  return (
    <div 
      id="profile-academic-identity"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              هويتي التعليمية
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">المستوى الأكاديمي والتحصيل التراكمي في الأكاديمية</p>
        </div>
        <span className="text-xs font-mono text-[#777169]">سجل أكاديمي</span>
      </div>

      {/* Editorial Statistics Grid with Subtle Dividers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#292521]">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`space-y-2 flex flex-col justify-between ${index !== 0 ? 'pt-4 sm:pt-0 sm:pr-4' : ''}`}
          >
            <span className="text-xs font-medium text-[#AAA39A]">
              {item.label}
            </span>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#F5F1E8] tracking-tight">
                {item.value}
              </div>
              <p className="text-[11px] text-[#777169] font-light">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
