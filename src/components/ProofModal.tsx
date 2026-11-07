import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, Check, Copy, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export interface ProofItem {
  id: string;
  title: string;
  subtitle: string;
  dateOrPeriod: string;
  details?: string;
  imageSrc: string;
  pdfUrl?: string;
  verifyUrl?: string;
  certificateId?: string;
  badge?: string;
}

interface ProofModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: ProofItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ProofModal({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: ProofModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handleCopyLink = () => {
    const textToCopy = currentItem.verifyUrl || currentItem.certificateId || window.location.href;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Proof view for ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#292720]/80 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF6EE] dark:bg-[#1F1C19] border border-[#C69F78]/50 dark:border-[#C69F78]/40 rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-[#C69F78]/30 dark:border-[#C69F78]/25 flex items-center justify-between bg-[#E8D8BC]/60 dark:bg-[#181614]">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded bg-[#C69F78]/20 dark:bg-[#C69F78]/15 border border-[#C69F78]/40 dark:border-[#C69F78]/30 text-[#292720] dark:text-[#F7F3EB]">
              <ShieldCheck className="w-4 h-4 text-[#C69F78] dark:text-[#D4A373]" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#292720] dark:text-[#F7F3EB] font-sans truncate max-w-xs sm:max-w-md">
                {currentItem.title}
              </h3>
              <p className="text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196]">
                {currentItem.subtitle} · {currentItem.dateOrPeriod}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-[#292720] dark:text-[#F7F3EB] hover:bg-[#C69F78]/30 dark:hover:bg-[#C69F78]/20 transition-colors focus-visible:outline-2 focus-visible:outline-[#C69F78]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: High-resolution Certificate Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center bg-[#F3EBDD]/40 dark:bg-[#141311]/70">
          <div className="relative max-w-3xl w-full rounded-lg shadow-polaroid border border-[#d6cbba] dark:border-[#38332E] overflow-hidden bg-white dark:bg-[#181715]">
            <img
              src={currentItem.imageSrc}
              alt={`Certificate document: ${currentItem.title}`}
              className="w-full h-auto object-contain max-h-[60vh]"
              loading="eager"
            />
          </div>

          {/* Details below preview */}
          {currentItem.details && (
            <div className="mt-4 p-4 bg-[#E8D8BC]/50 dark:bg-[#25221F] border border-[#C69F78]/30 dark:border-[#C69F78]/20 rounded-lg max-w-3xl w-full">
              <p className="text-xs sm:text-sm text-[#292720] dark:text-[#F7F3EB] leading-relaxed font-sans">
                {currentItem.details}
              </p>
            </div>
          )}

          {currentItem.certificateId && (
            <div className="mt-3 flex items-center gap-2 text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196]">
              <span>Certificate ID:</span>
              <span className="font-mono bg-[#FAF6EE] dark:bg-[#181614] px-2 py-0.5 rounded border border-[#C69F78]/30 dark:border-[#C69F78]/25 text-[#292720] dark:text-[#F7F3EB]">
                {currentItem.certificateId}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer: Actions & Navigation */}
        <div className="px-5 py-3 border-t border-[#C69F78]/30 dark:border-[#C69F78]/25 bg-[#E8D8BC]/50 dark:bg-[#181614] flex flex-wrap items-center justify-between gap-3">
          {/* Navigation between proofs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => onNavigate(currentIndex - 1)}
              className="p-1.5 rounded border border-[#C69F78]/40 dark:border-[#C69F78]/30 text-[#292720] dark:text-[#F7F3EB] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF6EE] dark:hover:bg-[#25221F] transition-colors"
              aria-label="Previous proof"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196]">
              {currentIndex + 1} of {items.length}
            </span>
            <button
              type="button"
              disabled={currentIndex === items.length - 1}
              onClick={() => onNavigate(currentIndex + 1)}
              className="p-1.5 rounded border border-[#C69F78]/40 dark:border-[#C69F78]/30 text-[#292720] dark:text-[#F7F3EB] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF6EE] dark:hover:bg-[#25221F] transition-colors"
              aria-label="Next proof"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* External links */}
          <div className="flex items-center gap-2">
            {currentItem.verifyUrl && (
              <a
                href={currentItem.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#292720] dark:text-[#F7F3EB] bg-[#FAF6EE] dark:bg-[#25221F] border border-[#C69F78]/60 dark:border-[#C69F78]/40 rounded hover:bg-white dark:hover:bg-[#2D2925] transition-colors"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C69F78]" />
              </a>
            )}

            {currentItem.pdfUrl && (
              <a
                href={currentItem.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#292720] hover:bg-[#3f3b31] dark:bg-[#FAF6EE] dark:text-[#292720] dark:hover:bg-[#E8D8BC] rounded transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Original PDF</span>
              </a>
            )}

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#292720] dark:text-[#F7F3EB] bg-[#FAF6EE] dark:bg-[#25221F] border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded hover:bg-white dark:hover:bg-[#2D2925] transition-colors"
              title="Copy verification link or ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#5c6e4e] dark:text-[#7bb37b]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Info'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
