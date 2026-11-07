import React from 'react';
import { Award, FileText, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import { WashiTape, PaperClip, HandDrawnUnderline, HandDrawnStar } from './ScrapbookDecorations';

interface CertificationsProps {
  onSelectProof: (id: string) => void;
}

export function Certifications({ onSelectProof }: CertificationsProps) {
  return (
    <section
      id="certifications"
      aria-label="Professional Certifications"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 05</span>
            <span aria-hidden="true">·</span>
            <span>Accredited Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            Things I’ve learned along the way
          </h2>
          <div className="w-40 mt-1">
            <HandDrawnUnderline />
          </div>
          <p className="font-handwriting text-2xl text-[#C69F78] dark:text-[#D4A373] mt-2">
            official certificates and verified program completions
          </p>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certificates.map((cert, idx) => {
            const rotations = ['rotate-[-0.7deg]', 'rotate-[0.6deg]', 'rotate-[0.8deg]', 'rotate-[-0.6deg]'];
            const rot = rotations[idx % rotations.length];

            return (
              <article
                key={cert.id}
                className={`relative bg-[#FAF6EE] dark:bg-[#221F1C] border border-[#d6cbba] dark:border-[#3d3731] rounded-lg p-5 sm:p-7 shadow-paper hover:shadow-lifted transition-all duration-300 flex flex-col justify-between ${rot}`}
              >
                {/* Washi Tape Strip */}
                <WashiTape
                  color={cert.tagColor}
                  angle={idx % 2 === 0 ? '-rotate-1' : 'rotate-2'}
                  className="absolute -top-3 left-10 w-24 h-5"
                />

                {/* Paper Clip on corner */}
                {idx === 0 && <PaperClip className="absolute -top-4 right-6 w-8 h-12" />}

                <div>
                  {/* Top Header: Issuer & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C69F78]/25 pt-1">
                    <span className="font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] font-medium tracking-wide">
                      {cert.issuer}
                    </span>
                    <span className="font-typewriter text-xs text-[#292720] dark:text-[#F7F3EB] font-bold">
                      {cert.periodOrDate}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#292720] dark:text-[#F7F3EB] font-sans mb-3">
                    {cert.title}
                  </h3>

                  {/* Certificate Thumbnail Clipping (Clickable) */}
                  <div
                    onClick={() => onSelectProof(cert.id)}
                    className="relative group/thumb cursor-pointer overflow-hidden rounded-md border border-[#C69F78]/30 dark:border-[#C69F78]/25 shadow-sm bg-white dark:bg-[#2B2723] mb-4 aspect-[4/3] flex items-center justify-center p-2"
                  >
                    <img
                      src={cert.imageSrc}
                      alt={cert.altText}
                      className="w-full h-full object-contain group-hover/thumb:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Hover Overlay with Preview Icon */}
                    <div className="absolute inset-0 bg-[#292720]/50 dark:bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-[1px]">
                      <Eye className="w-4 h-4" />
                      <span>Click to enlarge preview</span>
                    </div>
                  </div>

                  {/* Verified Details */}
                  <p className="text-sm text-[#292720]/80 dark:text-[#F7F3EB]/80 leading-relaxed font-sans mb-4">
                    {cert.details}
                  </p>
                </div>

                {/* Footer Controls & Proof Links */}
                <div className="pt-4 border-t border-[#C69F78]/25 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProof(cert.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#2C2824] hover:bg-[#d8c5a4] dark:hover:bg-[#38332E] border border-[#C69F78]/50 dark:border-[#C69F78]/40 rounded transition-colors shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#292720] dark:text-[#F7F3EB] hover:text-[#C69F78] dark:hover:text-[#D4A373] underline underline-offset-4 transition-colors"
                      >
                        <span>Verify Online</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#292720] dark:text-[#F7F3EB] hover:text-[#C69F78] dark:hover:text-[#D4A373] underline underline-offset-4 transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        <span>PDF Document</span>
                      </a>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Certificate Authenticity Seal */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8D8BC]/60 dark:bg-[#25221F]/80 border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded-full text-xs font-typewriter text-[#292720] dark:text-[#F7F3EB]">
            <CheckCircle2 className="w-4 h-4 text-[#5c6e4e] dark:text-[#7bb37b]" />
            <span>All credentials verified against issued digital documents and institutional seals</span>
          </div>
        </div>

      </div>
    </section>
  );
}
