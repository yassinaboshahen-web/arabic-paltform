import React from 'react';
import { ChevronLeft, Home } from 'lucide-react';

interface CourseBreadcrumbProps {
  courseTitle: string;
  categoryTitle?: string;
  onNavigateHome: () => void;
  onNavigateExplore: () => void;
}

export const CourseBreadcrumb: React.FC<CourseBreadcrumbProps> = ({
  courseTitle,
  categoryTitle = 'استكشف',
  onNavigateHome,
  onNavigateExplore,
}) => {
  return (
    <nav 
      aria-label="مسار التنقل" 
      className="bg-[#070707] border-b border-[#292521]/60 pt-24 pb-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#AAA39A] font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
          {/* الرئيسية */}
          <li className="flex items-center">
            <button
              id="breadcrumb-home-btn"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 hover:text-[#F5F1E8] transition-colors py-1 focus:outline-none focus:text-[#D6B978]"
            >
              <Home className="w-3.5 h-3.5 text-[#AAA39A]" />
              <span>الرئيسية</span>
            </button>
          </li>

          {/* الفاصل */}
          <li className="flex items-center text-[#777169] select-none" aria-hidden="true">
            <ChevronLeft className="w-3.5 h-3.5" />
          </li>

          {/* استكشف */}
          <li className="flex items-center">
            <button
              id="breadcrumb-explore-btn"
              onClick={onNavigateExplore}
              className="hover:text-[#F5F1E8] transition-colors py-1 focus:outline-none focus:text-[#D6B978]"
            >
              <span>{categoryTitle}</span>
            </button>
          </li>

          {/* الفاصل */}
          <li className="flex items-center text-[#777169] select-none" aria-hidden="true">
            <ChevronLeft className="w-3.5 h-3.5" />
          </li>

          {/* عنوان الدورة الحالي */}
          <li className="flex items-center text-[#F5F1E8] font-bold truncate max-w-[280px] sm:max-w-md" aria-current="page">
            <span className="truncate">{courseTitle}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
