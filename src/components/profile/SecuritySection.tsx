import React, { useState } from 'react';
import { ShieldCheck, Smartphone, Laptop, Check, X } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const [isSessionsModalOpen, setIsSessionsModalOpen] = useState(false);

  return (
    <>
      <div 
        id="profile-security-section"
        className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#151311] via-[#121110] to-[#0C0B0A] border border-[#292521] space-y-4 select-none text-right shadow-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/30 flex items-center justify-center text-[#D6B978] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                  حسابك محمي
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <p className="text-xs text-[#AAA39A]">
                بياناتك التعليمية مرتبطة بحسابك بشكل آمن ومحمي بأحدث معايير التشفير.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSessionsModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] hover:border-[#D6B978]/40 text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors self-start sm:self-auto cursor-pointer"
          >
            إدارة الجلسات
          </button>
        </div>
      </div>

      {/* Active Sessions Modal */}
      {isSessionsModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="sessions-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
        >
          <div 
            className="relative w-full max-w-md bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent" />

            <div className="p-5 sm:p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978]">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="sessions-modal-title" className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                    إدارة الجلسات النشطة
                  </h3>
                  <p className="text-xs text-[#AAA39A]">الأجهزة المسجلة بحسابك حاليًا</p>
                </div>
              </div>

              <button
                onClick={() => setIsSessionsModalOpen(false)}
                aria-label="إغلاق"
                className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-3">
              {/* Current Browser Session */}
              <div className="p-4 rounded-xl bg-[#0C0B0A] border border-[#D6B978]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F1E8]">
                      <span>المتصفح الحالي (Chrome / macOS)</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                        نشط الآن
                      </span>
                    </div>
                    <span className="text-[11px] text-[#777169]">آخر نشاط: منذ دقيقة • الرياض، السعودية</span>
                  </div>
                </div>
              </div>

              {/* Mobile App/Browser Session */}
              <div className="p-4 rounded-xl bg-[#0C0B0A] border border-[#292521] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#AAA39A] block">هاتف ذكي (Safari / iOS)</span>
                    <span className="text-[11px] text-[#777169]">آخر نشاط: أمس • الرياض، السعودية</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#292521] flex justify-end">
                <button
                  onClick={() => setIsSessionsModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
