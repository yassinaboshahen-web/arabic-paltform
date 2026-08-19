import React, { useState, useEffect } from 'react';
import { X, User, Mail, Image, Check, AlertCircle } from 'lucide-react';
import { FullStudentProfile } from '../../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: FullStudentProfile;
  onSave: (updated: Partial<FullStudentProfile>) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setAvatarUrl(profile.avatarUrl || '');
    setError(null);
  }, [profile, isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('يرجى إدخال اسمك الكريم');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('يرجى إدخال بريد إلكتروني صالح');
      return;
    }

    onSave({
      name: name.trim(),
      email: email.trim(),
      avatarUrl: avatarUrl.trim() || undefined,
    });
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
    >
      <div 
        className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 id="edit-profile-modal-title" className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                تعديل بياناتك
              </h3>
              <p className="text-xs text-[#AAA39A]">تحديث البيانات الشخصية لحسابك في الأكاديمية</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-[#651F2A]/30 border border-[#651F2A] text-xs text-[#F5F1E8] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#D6B978] shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              الاسم الكامل
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none transition-colors"
                autoFocus
              />
              <User className="w-4 h-4 text-[#777169] absolute left-3 pointer-events-none" />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              البريد الإلكتروني
            </label>
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yassin@example.com"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none transition-colors font-mono"
              />
              <Mail className="w-4 h-4 text-[#777169] absolute left-3 pointer-events-none" />
            </div>
            <span className="text-[11px] text-[#777169] block">
              يُستخدم لتلقي إشعارات الدروس والمستجدات الأكاديمية
            </span>
          </div>

          {/* Avatar / Profile photo Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              صورة الملف الشخصي
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="رابط الصورة الشخصية (اختياري)"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none transition-colors"
              />
              <Image className="w-4 h-4 text-[#777169] absolute left-3 pointer-events-none" />
            </div>
            <span className="text-[11px] text-[#777169] block">
              في حال تركه فارغًا، سيتم استخدام الحرف الأول من اسمك بأسلوب الأكاديمية
            </span>
          </div>

          {/* Buttons Footer */}
          <div className="pt-4 border-t border-[#292521] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              إلغاء
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#D6B978]/20 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>حفظ التغييرات</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
