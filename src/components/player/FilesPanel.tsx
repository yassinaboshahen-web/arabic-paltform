import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Check, 
  Sparkles, 
  FolderArchive,
  FileCheck2 
} from 'lucide-react';
import { LessonResourceFile } from '../../types';

interface FilesPanelProps {
  resources: LessonResourceFile[];
}

export const FilesPanel: React.FC<FilesPanelProps> = ({ resources }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<LessonResourceFile | null>(null);

  const handleDownload = (file: LessonResourceFile) => {
    setDownloadingId(file.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadToast(`جاري تنزيل "${file.title}"...`);
      setTimeout(() => setDownloadToast(null), 3000);
    }, 600);
  };

  const handleOpenPreview = (file: LessonResourceFile) => {
    setPreviewFile(file);
  };

  return (
    <div 
      id="tab-lesson-files"
      className="space-y-6 text-right select-none animate-fadeIn"
    >
      {/* 1. Header Card */}
      <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#121110] border border-[#292521]">
        <div className="flex items-center gap-2.5">
          <FolderArchive className="w-4 h-4 text-[#D6B978]" />
          <div>
            <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              ملفات ومرفقات الدرس
            </h3>
            <p className="text-xs text-[#AAA39A]">مواد وملخصات وتدريبات بصيغة PDF جاهزة للتحميل</p>
          </div>
        </div>

        <span className="text-xs font-mono text-[#D6B978] bg-[#181614] px-2.5 py-1 rounded-lg border border-[#292521]">
          {resources.length} ملفات
        </span>
      </div>

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="p-3 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/30 text-xs text-[#D6B978] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{downloadToast}</span>
          </div>
          <span className="text-[10px] text-[#AAA39A]">PDF جاهز</span>
        </div>
      )}

      {/* 2. Files List */}
      <div className="space-y-3">
        {resources.map((file) => (
          <div
            key={file.id}
            className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            {/* File Info */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#181614] border border-[#292521] group-hover:border-[#D6B978]/40 flex flex-col items-center justify-center shrink-0 transition-colors">
                <FileText className="w-5 h-5 text-[#D6B978]" />
                <span className="text-[9px] font-mono font-bold text-[#AAA39A] uppercase">
                  {file.fileType}
                </span>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors">
                  {file.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#AAA39A] mt-0.5 font-mono">
                  <span>{file.size}</span>
                  {file.pagesOrDuration && (
                    <>
                      <span>•</span>
                      <span>{file.pagesOrDuration}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:self-center">
              <button
                onClick={() => handleOpenPreview(file)}
                className="px-3.5 py-1.5 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/30 text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>فتح</span>
              </button>

              <button
                onClick={() => handleDownload(file)}
                disabled={downloadingId === file.id}
                className="px-4 py-1.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] text-xs font-bold transition-all shadow-sm shadow-[#D6B978]/10 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === file.id ? 'جاري التحميل...' : 'تحميل'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Simple Preview Modal */}
      {previewFile && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div className="w-full max-w-xl rounded-3xl bg-[#121110] border border-[#292521] p-6 sm:p-8 text-right shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#292521] pb-3">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#D6B978]" />
                <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8]">
                  معاينة الملف: {previewFile.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewFile(null)}
                className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-[#0C0B0A] border border-[#292521] text-center space-y-3">
              <FileText className="w-12 h-12 text-[#D6B978] mx-auto" />
              <p className="text-sm font-bold text-[#F5F1E8]">
                {previewFile.title} ({previewFile.size})
              </p>
              <p className="text-xs text-[#AAA39A] max-w-sm mx-auto">
                ملف دراسي عالي الدقة معد ومراجع من الأستاذ أحمد محمود. يمكنك تنزيل النسخة الكاملة واستعراض كافة الجداول والتطبيقات.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewFile(null)}
                className="px-4 py-2 rounded-xl bg-[#181614] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8]"
              >
                إغلاق
              </button>
              <button
                onClick={() => {
                  handleDownload(previewFile);
                  setPreviewFile(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] text-xs font-bold flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>تحميل المستند الآن</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
