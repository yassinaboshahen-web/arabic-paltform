import React, { useState, useEffect } from 'react';
import { X, KeyRound, Check, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setError(null);
      setIsSuccess(false);
    }
  }, [isOpen]);

  // Escape key handler
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
    if (!currentPassword) {
      setError('يرجى إدخال كلمة المرور الحالية');
      return;
    }
    if (newPassword.length < 6) {
      setError('يجب ألا تقل كلمة المرور الجديدة عن 6 أحرف');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      onSuccess?.();
      onClose();
    }, 1200);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="change-password-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
    >
      <div 
        className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent" />

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978]">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 id="change-password-modal-title" className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                تغيير كلمة المرور
              </h3>
              <p className="text-xs text-[#AAA39A]">تعيين كلمة مرور جديدة وآمنة لحسابك</p>
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
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-[#651F2A]/30 border border-[#651F2A] text-xs text-[#F5F1E8] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#D6B978] shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {isSuccess && (
            <div className="p-3.5 rounded-xl bg-[#181614] border border-[#D6B978]/40 text-xs text-[#D6B978] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D6B978] shrink-0" />
              <span>تم تغيير كلمة المرور بنجاح.</span>
            </div>
          )}

          {/* Current Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              كلمة المرور الحالية
            </label>
            <div className="relative flex items-center">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="أدخل كلمة المرور الحالية"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none font-mono"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute left-3 text-[#777169] hover:text-[#AAA39A] cursor-pointer"
                aria-label="إظهار/إخفاء كلمة المرور"
              >
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              كلمة المرور الجديدة
            </label>
            <div className="relative flex items-center">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="أدخل كلمة المرور الجديدة"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none font-mono"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute left-3 text-[#777169] hover:text-[#AAA39A] cursor-pointer"
                aria-label="إظهار/إخفاء كلمة المرور"
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              تأكيد كلمة المرور الجديدة
            </label>
            <div className="relative flex items-center">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="أعد كتابة كلمة المرور الجديدة"
                className="w-full h-11 rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] px-4 pl-10 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none font-mono"
              />
            </div>
          </div>

          {/* Footer Buttons */}
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
              disabled={isSuccess}
              className="px-6 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#D6B978]/20 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>تحديث كلمة المرور</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
