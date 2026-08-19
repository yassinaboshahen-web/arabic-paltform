import React, { useState, useEffect, useRef } from 'react';
import { MoreVertical, Check, Eye, Trash2, EyeOff } from 'lucide-react';

interface NotificationMenuProps {
  isRead: boolean;
  onToggleRead: () => void;
  onDelete: () => void;
  onHideType: () => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({
  isRead,
  onToggleRead,
  onDelete,
  onHideType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="relative inline-block text-right">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen)}
        }
        aria-label="خيارات الإشعار"
        aria-expanded={isOpen}
        className="w-7 h-7 rounded-lg bg-transparent hover:bg-[#181614] border border-transparent hover:border-[#292521] text-[#777169] hover:text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
      >
        <MoreVertical className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 top-full mt-1.5 w-44 rounded-xl bg-[#151311] border border-[#292521] shadow-2xl p-1.5 z-30 space-y-1 text-right animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toggle Read / Unread */}
          <button
            type="button"
            onClick={(e) => handleAction(e, onToggleRead)}
            className="w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] flex items-center gap-2 transition-colors cursor-pointer"
          >
            {isRead ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-[#D6B978]" />
                <span>تحديد كغير مقروء</span>
              </>
            ) : (
              <>
                <Check className="w-3.5 h-3.5 text-[#D6B978]" />
                <span>تحديد كمقروء</span>
              </>
            )}
          </button>

          {/* Hide this category */}
          <button
            type="button"
            onClick={(e) => handleAction(e, onHideType)}
            className="w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#777169]" />
            <span>إخفاء هذا النوع</span>
          </button>

          <div className="h-px bg-[#292521] my-1" />

          {/* Delete notification */}
          <button
            type="button"
            onClick={(e) => handleAction(e, onDelete)}
            className="w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#351117]/40 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5 text-[#651F2A]" />
            <span className="text-[#AAA39A] hover:text-[#F5F1E8]">حذف الإشعار</span>
          </button>
        </div>
      )}
    </div>
  );
};
