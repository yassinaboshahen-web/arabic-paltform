import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  ThumbsUp, 
  MessageSquare, 
  Sparkles, 
  CheckCircle,
  UserCheck 
} from 'lucide-react';
import { LessonQuestionItem } from '../../types';

interface QuestionsPanelProps {
  initialQuestions: LessonQuestionItem[];
}

export const QuestionsPanel: React.FC<QuestionsPanelProps> = ({ initialQuestions }) => {
  const [questions, setQuestions] = useState<LessonQuestionItem[]>(initialQuestions);
  const [newQuestionText, setNewQuestionText] = useState<string>('');
  const [submittedToast, setSubmittedToast] = useState<boolean>(false);
  const [upvotedIds, setUpvotedIds] = useState<string[]>([]);

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ: LessonQuestionItem = {
      id: `q-${Date.now()}`,
      authorName: 'أنت (طالب في الدورة)',
      timeAgo: 'الآن',
      question: newQuestionText.trim(),
      votesCount: 1,
    };

    setQuestions([newQ, ...questions]);
    setNewQuestionText('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
  };

  const handleToggleVote = (id: string) => {
    if (upvotedIds.includes(id)) {
      setUpvotedIds(upvotedIds.filter((item) => item !== id));
      setQuestions(questions.map((q) => q.id === id ? { ...q, votesCount: q.votesCount - 1 } : q));
    } else {
      setUpvotedIds([...upvotedIds, id]);
      setQuestions(questions.map((q) => q.id === id ? { ...q, votesCount: q.votesCount + 1 } : q));
    }
  };

  return (
    <div 
      id="tab-lesson-questions"
      className="space-y-6 text-right select-none animate-fadeIn"
    >
      
      {/* 1. Ask a Question Form */}
      <div className="rounded-2xl bg-[#121110] border border-[#292521] p-5 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D6B978]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              أسئلة واستفسارات الدرس
            </h3>
          </div>
          <span className="text-xs text-[#AAA39A]">يجيب عنها الأستاذ أحمد محمود</span>
        </div>

        <form onSubmit={handleSendQuestion} className="space-y-3">
          <textarea
            id="new-question-input"
            rows={3}
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
            placeholder="اكتب سؤالك أو استفسارك حول أي مسألة أو إعراب في هذا الدرس..."
            className="w-full rounded-xl bg-[#151311] border border-[#292521] focus:border-[#D6B978] focus:ring-1 focus:ring-[#D6B978] p-3.5 text-sm text-[#F5F1E8] placeholder-[#777169] resize-none outline-none transition-all"
          />

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-[#777169] hidden sm:inline">
              يتم الرد على الأسئلة خلال 24 ساعة من قبل الأستاذ
            </span>

            <button
              id="submit-question-btn"
              type="submit"
              disabled={!newQuestionText.trim()}
              className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] disabled:opacity-40 disabled:cursor-not-allowed text-[#070707] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#D6B978]/10 flex items-center gap-2 mr-auto"
            >
              <Send className="w-3.5 h-3.5 rotate-180" />
              <span>إرسال السؤال</span>
            </button>
          </div>
        </form>

        {submittedToast && (
          <div className="mt-3 p-2 rounded-lg bg-[#D6B978]/15 border border-[#D6B978]/30 text-xs text-[#D6B978] flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>تم إرسال سؤالك بنجاح! سيتم إشعارك فور رد الأستاذ.</span>
          </div>
        )}
      </div>

      {/* 2. Questions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#777169] px-1">
          <span>الأسئلة المطروحة ({questions.length})</span>
          <span>الأحدث والأكثر تفاعلاً</span>
        </div>

        {questions.map((q) => {
          const hasVoted = upvotedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#121110] border border-[#292521] space-y-4"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#181614] border border-[#292521] flex items-center justify-center text-xs font-bold text-[#D6B978]">
                    {q.authorName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F5F1E8]">
                      {q.authorName}
                    </h4>
                    <span className="text-[11px] text-[#777169]">{q.timeAgo}</span>
                  </div>
                </div>

                {/* Upvote Button */}
                <button
                  onClick={() => handleToggleVote(q.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors ${
                    hasVoted
                      ? 'bg-[#D6B978]/20 border-[#D6B978] text-[#D6B978]'
                      : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
                  }`}
                  title="سؤال مفيد"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{q.votesCount}</span>
                </button>
              </div>

              {/* Question Text */}
              <p className="text-sm sm:text-base font-semibold text-[#F5F1E8] font-['Cairo',_sans-serif] pr-1 leading-relaxed">
                {q.question}
              </p>

              {/* Teacher Answer Card if Available */}
              {q.answer ? (
                <div className="p-4 sm:p-5 rounded-xl bg-[#151311] border border-[#D6B978]/30 space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#D6B978]" />
                      <span className="text-xs font-bold text-[#F5F1E8]">
                        {q.answer.teacherName}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#651F2A]/40 border border-[#D6B978]/40 text-[10px] font-bold text-[#D6B978]">
                        {q.answer.teacherBadge}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#777169]">{q.answer.timeAgo}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed pr-1 pt-1">
                    {q.answer.answerText}
                  </p>
                </div>
              ) : (
                <div className="text-xs text-[#777169] italic pr-1">
                  في انتظار رد الأستاذ...
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
