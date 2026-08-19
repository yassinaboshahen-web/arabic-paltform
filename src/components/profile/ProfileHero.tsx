import React from 'react';
import { Sparkles, ShieldCheck, Edit3 } from 'lucide-react';
import { FullStudentProfile } from '../../types';

interface ProfileHeroProps {
  profile: FullStudentProfile;
  onEditClick: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  profile,
  onEditClick,
}) => {
  return (
    <section 
      id="profile-hero-section"
      className="relative rounded-3xl bg-gradient-to-b from-[#151311] via-[#121110] to-[#0C0B0A] border border-[#292521] overflow-hidden select-none shadow-2xl text-right p-6 sm:p-8 lg:p-10"
    >
      {/* Subtle Burgundy atmospheric glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#651F2A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6B978]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent opacity-80" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        
        {/* Right in RTL: Avatar and Identity Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
          
          {/* Large Premium Avatar Frame */}
          <div className="relative group shrink-0">
            {/* Outer Decorative Ring */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#651F2A] via-[#351117] to-[#121110] p-1 border border-[#D6B978]/40 shadow-xl shadow-[#651F2A]/30 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-[22px] bg-[#0C0B0A] overflow-hidden flex items-center justify-center relative">
                {/* Monogram Typography or Avatar Image */}
                <div className="text-3xl sm:text-4xl font-bold font-['Amiri',_serif] text-[#D6B978]">
                  {profile.name.charAt(0)}
                </div>
              </div>
            </div>

            {/* Online/Active Status Pip */}
            <div 
              className="absolute -bottom-1 -left-1 px-2.5 py-0.5 rounded-full bg-[#121110] border border-[#292521] flex items-center gap-1.5 shadow-md"
              title="حالة الحساب"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500/90 animate-pulse" />
              <span className="text-[10px] font-mono text-[#AAA39A]">نشط</span>
            </div>
          </div>

          {/* Identity Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-px bg-[#D6B978]" />
              <span className="text-xs font-mono text-[#D6B978] tracking-wider">
                الهوية الأكاديمية
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
                {profile.name}
              </h1>

              {/* Status Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181614] border border-[#D6B978]/40 text-[#D6B978] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D6B978]" />
                <span>{profile.status}</span>
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#AAA39A] font-light max-w-xl">
              {profile.role}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#777169] pt-1">
              <span>انضم في: {profile.joinDate}</span>
              <span>•</span>
              <span className="text-[#D6B978]">المستوى: {profile.level}</span>
            </div>
          </div>

        </div>

        {/* Left in RTL: Quick Action Edit Button */}
        <div className="self-start md:self-center">
          <button
            id="profile-edit-main-btn"
            onClick={onEditClick}
            className="px-5 py-2.5 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] hover:border-[#D6B978]/50 text-xs sm:text-sm font-semibold text-[#F5F1E8] transition-all duration-200 flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-[#D6B978]" />
            <span>تعديل البيانات</span>
          </button>
        </div>

      </div>
    </section>
  );
};
