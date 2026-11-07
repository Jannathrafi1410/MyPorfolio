import React from 'react';
import { ArrowDown, Sparkles, FolderGit2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WashiTape, HandDrawnUnderline, HandDrawnStar } from './ScrapbookDecorations';

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background notebook aesthetic lines */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small Label with Unboxed Metadata */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-typewriter text-[#292720]/80 dark:text-[#F7F3EB]/80 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C69F78]" aria-hidden="true" />
              <span>{personalInfo.smallLabel}</span>
            </div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] leading-[1.18] font-sans" style={{ textWrap: 'balance' }}>
                {personalInfo.heroHeadline}
              </h1>
              <div className="w-48 sm:w-64 mt-2">
                <HandDrawnUnderline />
              </div>
            </div>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-[#292720]/85 dark:text-[#F7F3EB]/85 leading-relaxed font-sans max-w-xl">
              {personalInfo.heroIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-white bg-[#292720] hover:bg-[#3f3b31] dark:bg-[#F7F3EB] dark:text-[#292720] dark:hover:bg-[#E8D8BC] rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#C69F78]"
              >
                <FolderGit2 className="w-4 h-4 text-[#E8D8BC] dark:text-[#292720]" aria-hidden="true" />
                <span>Explore My Work</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#25221F] hover:bg-[#deccad] dark:hover:bg-[#312B26] border border-[#C69F78]/60 dark:border-[#C69F78]/40 rounded-md transition-all shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#C69F78]"
              >
                <BookOpen className="w-4 h-4 text-[#8c8474] dark:text-[#A8A196]" aria-hidden="true" />
                <span>A Little About Me</span>
              </a>
            </div>

            {/* Small Handwritten Note pinned to page */}
            <div className="pt-3">
              <div className="inline-block relative p-3 sm:p-4 bg-[#E8D8BC]/90 dark:bg-[#25221F]/95 border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded-sm shadow-paper rotate-[-1deg] max-w-md">
                <WashiTape
                  color="pink"
                  angle="rotate-2"
                  className="absolute -top-3 left-4 w-20 h-5"
                />
                <p className="font-handwriting text-xl sm:text-2xl text-[#292720] dark:text-[#F7F3EB] leading-snug">
                  “{personalInfo.heroNote}”
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Polaroid Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Decorative Kraft Paper Sheet Underlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#C69F78]/35 dark:bg-[#C69F78]/20 rounded-lg rotate-3 scale-102 translate-x-2 translate-y-2 shadow-sm"
              />

              {/* Polaroid Frame */}
              <div className="relative bg-[#FAFAF7] dark:bg-[#25221F] p-4 pb-6 rounded-md shadow-polaroid border border-[#d8d2c4] dark:border-[#3d3731] rotate-1 group-hover:rotate-0 transition-transform duration-300 max-w-[320px] sm:max-w-[340px]">
                
                {/* Washi Tape on Top Center */}
                <WashiTape
                  color="sage"
                  angle="-rotate-2"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 z-10"
                />

                {/* Portrait Image Container */}
                <div className="relative overflow-hidden rounded-sm bg-[#E8D8BC]/30 dark:bg-[#1A1816] aspect-[3/4] border border-[#ece7dc] dark:border-[#38332E]">
                  <img
                    src={personalInfo.portraitSrc}
                    alt="Jannath K. R. presenting at a technical event"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gentle subtle analog grain overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#292720]/15 dark:from-black/30 via-transparent to-transparent" />
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="font-handwriting text-2xl text-[#292720] dark:text-[#F7F3EB] leading-none">
                      Jannath K. R.
                    </p>
                    <p className="font-typewriter text-[11px] text-[#8c8474] dark:text-[#A8A196] mt-1 tracking-wider uppercase">
                      Thrissur, Kerala
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#C69F78]" aria-hidden="true">
                    <HandDrawnStar className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Sticky Note Tag on the corner */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-4 -left-6 bg-[#A6AD91]/30 dark:bg-[#A6AD91]/20 border border-[#A6AD91]/60 dark:border-[#A6AD91]/40 px-3 py-1.5 rounded shadow-sm -rotate-6 backdrop-blur-[1px]"
              >
                <span className="font-typewriter text-[11px] text-[#292720] dark:text-[#F7F3EB]">
                  Engineering · 2028
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
