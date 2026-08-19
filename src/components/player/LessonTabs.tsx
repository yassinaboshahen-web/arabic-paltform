import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  FolderArchive, 
  HelpCircle, 
  Sparkles 
} from 'lucide-react';
import { LessonDetailPayload } from '../../types';
import { LessonOverview } from './LessonOverview';
import { NotesPanel } from './NotesPanel';
import { FilesPanel } from './FilesPanel';
import { QuestionsPanel } from './QuestionsPanel';

interface LessonTabsProps {
  lesson: LessonDetailPayload;
}

export type ActivePlayerTab = 'overview' | 'notes' | 'files' | 'questions';

export const LessonTabs: React.FC<LessonTabsProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<ActivePlayerTab>('overview');

  const tabs: { id: ActivePlayerTab; label: string; icon: React.ReactNode; badge?: number | string }[] = [
    { id: 'overview', label: 'نظرة عامة', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'notes', label: 'الملاحظات', icon: <FileText className="w-4 h-4" />, badge: lesson.defaultNotes.length },
    { id: 'files', label: 'الملفات', icon: <FolderArchive className="w-4 h-4" />, badge: lesson.resources.length },
    { id: 'questions', label: 'الأسئلة', icon: <HelpCircle className="w-4 h-4" />, badge: lesson.questions.length },
  ];

  return (
    <section 
      id="lesson-tabs-section"
      className="space-y-6 pt-4"
    >
      
      {/* 1. Tab Navigation Bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 border-b border-[#292521] pb-px overflow-x-auto scrollbar-none select-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`player-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                isActive 
                  ? 'text-[#D6B978] bg-[#121110] border-t border-x border-[#292521]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]/50 border-t border-x border-transparent'
              }`}
            >
              <span className={isActive ? 'text-[#D6B978]' : 'text-[#777169]'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>

              {tab.badge !== undefined && (
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive ? 'bg-[#D6B978]/20 text-[#D6B978]' : 'bg-[#181614] text-[#777169]'
                }`}>
                  {tab.badge}
                </span>
              )}

              {/* Bottom Champagne Active Line */}
              {isActive && (
                <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#D6B978]" />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Active Tab Content Pane */}
      <div className="min-h-[300px]">
        {activeTab === 'overview' && <LessonOverview lesson={lesson} />}
        {activeTab === 'notes' && (
          <NotesPanel 
            lessonId={lesson.id}
            initialNotes={lesson.defaultNotes}
          />
        )}
        {activeTab === 'files' && <FilesPanel resources={lesson.resources} />}
        {activeTab === 'questions' && (
          <QuestionsPanel initialQuestions={lesson.questions} />
        )}
      </div>

    </section>
  );
};
