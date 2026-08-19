import React from 'react';
import { StudentProfile } from '../../types';

interface DashboardGreetingProps {
  student?: StudentProfile;
  onExploreCourses?: () => void;
}

export const DashboardGreeting: React.FC<DashboardGreetingProps> = ({
  student = { name: 'ياسين', memberSince: 'رجب ١٤٤٧ هـ', activeCoursesCount: 3 },
}) => {
  return (
    <section 
      id="dashboard-greeting-section"
      className="relative pb-6 pt-2 select-none text-right"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#292521] pb-6">
        
        {/* Right in RTL: Personal Greeting */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-5 h-px bg-[#D6B978]" />
            <span className="text-xs font-mono text-[#D6B978] tracking-widest">
              مساحتك التعليمية الخاصة
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight flex items-center gap-3">
            <span>مساء الخير، {student.name}</span>
            <span className="text-2xl sm:text-3xl animate-pulse">👋</span>
          </h1>

          <p className="text-sm sm:text-base text-[#AAA39A] font-light max-w-xl">
            مستعد تكمل رحلتك التعليمية؟
          </p>
        </div>

        {/* Left in RTL: Student Profile Badge */}
        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-[#121110] border border-[#292521] flex items-center gap-3 shadow-inner">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#651F2A] to-[#351117] border border-[#D6B978]/40 flex items-center justify-center text-sm font-bold text-[#D6B978] font-['Amiri',_serif]">
              {student.name.charAt(0)}
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F1E8]">
                <span>الطالب: {student.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-ping" />
              </div>
              <p className="text-[11px] text-[#777169] font-mono">
                {student.activeCoursesCount} دورات قيد المتابعة
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
