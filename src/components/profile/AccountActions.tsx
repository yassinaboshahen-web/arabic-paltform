import React from 'react';
import { UserCheck, KeyRound, LogOut, ChevronLeft } from 'lucide-react';

interface AccountActionsProps {
  onEditProfile: () => void;
  onChangePassword: () => void;
  onLogout: () => void;
}

export const AccountActions: React.FC<AccountActionsProps> = ({
  onEditProfile,
  onChangePassword,
  onLogout,
}) => {
  const actions = [
    {
      id: 'edit',
      title: 'تعديل البيانات الشخصية',
      description: 'تغيير الاسم أو البريد الإلكتروني أو الصورة',
      icon: <UserCheck className="w-4 h-4 text-[#D6B978]" />,
      onClick: onEditProfile,
    },
    {
      id: 'password',
      title: 'تغيير كلمة المرور',
      description: 'تحديث مفتاح الأمان وكلمة المرور الخاصة بحسابك',
      icon: <KeyRound className="w-4 h-4 text-[#D6B978]" />,
      onClick: onChangePassword,
    },
    {
      id: 'logout',
      title: 'تسجيل الخروج',
      description: 'إنهاء الجلسة الحالية على هذا المتصفح',
      icon: <LogOut className="w-4 h-4 text-[#651F2A]" />,
      onClick: onLogout,
      isDanger: true,
    },
  ];

  return (
    <div 
      id="profile-account-actions"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              الحساب
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">إجراءات الأمان وإدارة الحساب وجلسات الدخول</p>
        </div>
      </div>

      {/* Clean Actions List */}
      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between gap-4 text-right cursor-pointer group ${
              action.isDanger
                ? 'bg-[#0C0B0A]/80 hover:bg-[#351117]/30 border-[#292521] hover:border-[#651F2A]/60'
                : 'bg-[#0C0B0A]/80 hover:bg-[#151311] border-[#292521] hover:border-[#D6B978]/40'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${
                action.isDanger
                  ? 'bg-[#181614] border-[#651F2A]/40'
                  : 'bg-[#181614] border-[#292521]'
              }`}>
                {action.icon}
              </div>

              <div className="min-w-0">
                <span className={`text-xs sm:text-sm font-bold block ${
                  action.isDanger 
                    ? 'text-[#F5F1E8] group-hover:text-[#D6B978]' 
                    : 'text-[#F5F1E8] group-hover:text-[#D6B978]'
                }`}>
                  {action.title}
                </span>
                <span className="text-[11px] text-[#777169] block truncate mt-0.5">
                  {action.description}
                </span>
              </div>
            </div>

            <ChevronLeft className="w-4 h-4 text-[#777169] group-hover:text-[#D6B978] group-hover:-translate-x-0.5 transition-all shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};
