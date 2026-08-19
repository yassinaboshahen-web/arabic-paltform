import React, { useState } from 'react';
import { Globe, PlaySquare, Video, Bell, Check } from 'lucide-react';
import { StudentLearningPreferences } from '../../types';

interface LearningPreferencesProps {
  initialPreferences: StudentLearningPreferences;
}

export const LearningPreferences: React.FC<LearningPreferencesProps> = ({
  initialPreferences,
}) => {
  const [preferences, setPreferences] = useState<StudentLearningPreferences>(initialPreferences);
  const [savedMessage, setSavedMessage] = useState(false);

  const toggleAutoPlay = () => {
    setPreferences((prev) => {
      const updated = { ...prev, autoPlayNextLesson: !prev.autoPlayNextLesson };
      triggerSaveFeedback();
      return updated;
    });
  };

  const toggleNotifications = () => {
    setPreferences((prev) => {
      const updated = { ...prev, learningNotifications: !prev.learningNotifications };
      triggerSaveFeedback();
      return updated;
    });
  };

  const changeVideoQuality = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as StudentLearningPreferences['videoQuality'];
    setPreferences((prev) => {
      const updated = { ...prev, videoQuality: val };
      triggerSaveFeedback();
      return updated;
    });
  };

  const triggerSaveFeedback = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2000);
  };

  return (
    <div 
      id="profile-learning-preferences"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              تفضيلات التعلم
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">إعدادات العرض وتشغيل الدروس والتنبيهات الدراسية</p>
        </div>

        {savedMessage && (
          <div className="flex items-center gap-1.5 text-xs text-[#D6B978] font-mono animate-fade-in">
            <Check className="w-3.5 h-3.5" />
            <span>تم الحفظ</span>
          </div>
        )}
      </div>

      {/* Preferences List */}
      <div className="space-y-4">
        
        {/* Platform Language */}
        <div className="p-4 rounded-xl bg-[#0C0B0A]/80 border border-[#292521] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center shrink-0 text-[#D6B978]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F1E8] block">لغة المنصة</span>
              <span className="text-[11px] text-[#777169]">اللغة المعتمدة لواجهة التطبيق</span>
            </div>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978]">
            العربية (الأصلية)
          </div>
        </div>

        {/* Auto-Play Next Lesson */}
        <div className="p-4 rounded-xl bg-[#0C0B0A]/80 border border-[#292521] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center shrink-0 text-[#D6B978]">
              <PlaySquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F1E8] block">التشغيل التلقائي</span>
              <span className="text-[11px] text-[#777169]">الانتقال التلقائي للدرس التالي بعد إكمال الفيديو</span>
            </div>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={preferences.autoPlayNextLesson}
            onClick={toggleAutoPlay}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer border ${
              preferences.autoPlayNextLesson 
                ? 'bg-[#D6B978] border-[#D6B978]' 
                : 'bg-[#181614] border-[#292521]'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full transition-transform duration-200 ${
                preferences.autoPlayNextLesson
                  ? 'left-0.5 bg-[#070707]'
                  : 'right-0.5 bg-[#777169]'
              }`}
            />
          </button>
        </div>

        {/* Video Quality */}
        <div className="p-4 rounded-xl bg-[#0C0B0A]/80 border border-[#292521] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center shrink-0 text-[#D6B978]">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F1E8] block">جودة الفيديو</span>
              <span className="text-[11px] text-[#777169]">دقة العرض الافتراضية للمشغل</span>
            </div>
          </div>

          <select
            value={preferences.videoQuality}
            onChange={changeVideoQuality}
            className="px-3 py-1.5 rounded-lg bg-[#181614] border border-[#292521] text-xs font-semibold text-[#F5F1E8] focus:border-[#D6B978] outline-none cursor-pointer"
          >
            <option value="auto">تلقائية (موصى بها)</option>
            <option value="1080p">1080p فائقة الدقة</option>
            <option value="720p">720p عالية الدقة</option>
            <option value="480p">480p اقتصادية</option>
          </select>
        </div>

        {/* Learning Notifications */}
        <div className="p-4 rounded-xl bg-[#0C0B0A]/80 border border-[#292521] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center shrink-0 text-[#D6B978]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F1E8] block">إشعارات التعلم</span>
              <span className="text-[11px] text-[#777169]">تنبيهات الدروس الجديدة ومواعيد المراجعة</span>
            </div>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={preferences.learningNotifications}
            onClick={toggleNotifications}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer border ${
              preferences.learningNotifications 
                ? 'bg-[#D6B978] border-[#D6B978]' 
                : 'bg-[#181614] border-[#292521]'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full transition-transform duration-200 ${
                preferences.learningNotifications
                  ? 'left-0.5 bg-[#070707]'
                  : 'right-0.5 bg-[#777169]'
              }`}
            />
          </button>
        </div>

      </div>
    </div>
  );
};
