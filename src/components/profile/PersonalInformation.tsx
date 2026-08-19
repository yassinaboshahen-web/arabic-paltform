import React from 'react';
import { User, Mail, Shield, Calendar, Edit3 } from 'lucide-react';
import { FullStudentProfile } from '../../types';

interface PersonalInformationProps {
  profile: FullStudentProfile;
  onEditClick: () => void;
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
  profile,
  onEditClick,
}) => {
  const infoRows = [
    {
      id: 'name',
      label: 'الاسم الكامل',
      value: profile.name,
      icon: <User className="w-4 h-4 text-[#D6B978]" />,
    },
    {
      id: 'email',
      label: 'البريد الإلكتروني',
      value: profile.email,
      icon: <Mail className="w-4 h-4 text-[#D6B978]" />,
      badge: 'بيانات تجريبية',
    },
    {
      id: 'accountType',
      label: 'نوع الحساب',
      value: profile.accountType,
      icon: <Shield className="w-4 h-4 text-[#D6B978]" />,
    },
    {
      id: 'joinDate',
      label: 'تاريخ الانضمام',
      value: profile.joinDate,
      icon: <Calendar className="w-4 h-4 text-[#D6B978]" />,
    },
  ];

  return (
    <div 
      id="profile-personal-information"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              بياناتي
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">المعلومات الشخصية والبيانات الأساسية للحساب</p>
        </div>

        <button
          onClick={onEditClick}
          className="text-xs font-semibold text-[#D6B978] hover:text-[#E7D29A] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>تعديل البيانات</span>
        </button>
      </div>

      {/* Info List with subtle separators */}
      <div className="space-y-3.5">
        {infoRows.map((row) => (
          <div
            key={row.id}
            className="p-4 rounded-xl bg-[#0C0B0A]/80 border border-[#292521] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all hover:bg-[#151311]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center shrink-0">
                {row.icon}
              </div>
              <span className="text-xs font-medium text-[#AAA39A]">
                {row.label}
              </span>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs sm:text-sm font-semibold text-[#F5F1E8]">
                {row.value}
              </span>
              {row.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181614] text-[#777169] border border-[#292521]">
                  {row.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
