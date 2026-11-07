import React from 'react';
import { GraduationCap, MapPin, Building, Calendar, CheckCircle2 } from 'lucide-react';
import { personalInfo, currentFocus } from '../data/portfolioData';
import { WashiTape, PaperClip, HandDrawnSparkle, HandDrawnStar } from './ScrapbookDecorations';

export function About() {
  return (
    <section
      id="about"
      aria-label="About Jannath K. R."
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 01</span>
            <span aria-hidden="true">·</span>
            <span>About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            The story so far
          </h2>
          <p className="font-handwriting text-2xl text-[#C69F78] dark:text-[#D4A373] mt-1">
            notes from an aspiring data scientist & data analyst
          </p>
        </div>

        {/* Journal Spread Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Spread: Main Story on Warm Paper */}
          <div className="lg:col-span-7 bg-[#E8D8BC]/60 dark:bg-[#25221F]/80 border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded-lg p-6 sm:p-8 shadow-paper relative">
            <PaperClip className="absolute -top-4 right-8 w-8 h-12" />
            <WashiTape color="sage" angle="rotate-1" className="absolute -top-3 left-8 w-24 h-5" />

            <div className="space-y-5 text-[#292720] dark:text-[#F7F3EB] text-base sm:text-lg leading-relaxed font-sans pt-2">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-typewriter first-letter:mr-2 first-letter:float-left first-letter:text-[#292720] dark:first-letter:text-[#F7F3EB]">
                {personalInfo.aboutStory}
              </p>
            </div>

            {/* Compact Education Note */}
            <div className="mt-8 pt-6 border-t border-[#C69F78]/30">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-[#C69F78]" aria-hidden="true" />
                <h3 className="text-sm font-semibold tracking-wider uppercase font-typewriter text-[#292720] dark:text-[#F7F3EB]">
                  Education
                </h3>
              </div>

              <div className="bg-[#F3EBDD]/90 dark:bg-[#1A1816]/90 border border-[#C69F78]/30 dark:border-[#C69F78]/25 rounded-md p-4 space-y-1.5 shadow-sm">
                <p className="text-base sm:text-lg font-bold text-[#292720] dark:text-[#F7F3EB]">
                  {personalInfo.college}
                </p>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#292720]/80 dark:text-[#F7F3EB]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#8c8474] dark:text-[#A8A196]" aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#292720]/80 dark:text-[#F7F3EB]/80">
                  <Building className="w-3.5 h-3.5 text-[#8c8474] dark:text-[#A8A196]" aria-hidden="true" />
                  <span>{personalInfo.university}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#292720] dark:text-[#F7F3EB] pt-1 border-t border-[#C69F78]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#C69F78]" aria-hidden="true" />
                  <span>Expected graduation: {personalInfo.expectedGraduation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Spread: "What's on my desk right now?" Notepad */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Notepad Sticky Card */}
            <div className="bg-[#FAF6EE] dark:bg-[#221F1C] border border-[#d6cbba] dark:border-[#3d3731] rounded-lg p-6 sm:p-7 shadow-paper relative bg-ruled-lines rotate-1">
              <WashiTape
                color="pink"
                angle="-rotate-1"
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6"
              />

              <div className="flex items-center justify-between pb-3 border-b border-[#C69F78]/40 mb-4 pt-1">
                <h3 className="text-lg font-bold font-sans text-[#292720] dark:text-[#F7F3EB]">
                  What’s on my desk right now?
                </h3>
                <span className="font-handwriting text-xl text-[#C69F78] dark:text-[#D4A373]">today</span>
              </div>

              <p className="text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196] mb-4">
                CURRENT EXPLORATION & FOCUS
              </p>

              <ul className="space-y-4">
                {currentFocus.map((focusItem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#A6AD91]/30 dark:bg-[#A6AD91]/20 border border-[#A6AD91]/70 dark:border-[#A6AD91]/50 flex items-center justify-center text-xs font-typewriter text-[#292720] dark:text-[#F7F3EB]">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[#292720] dark:text-[#F7F3EB] leading-snug font-sans">
                      {focusItem}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#C69F78]/30 flex items-center justify-between">
                <span className="font-handwriting text-lg text-[#292720]/80 dark:text-[#F7F3EB]/80">
                  focus on fundamentals
                </span>
                <HandDrawnSparkle className="w-4 h-4 text-[#A6AD91]" />
              </div>
            </div>

            {/* Quick Fact Memo Card */}
            <div className="bg-[#A6AD91]/20 dark:bg-[#A6AD91]/15 border border-[#A6AD91]/50 dark:border-[#A6AD91]/30 rounded-lg p-5 shadow-sm -rotate-1">
              <div className="flex items-center gap-2 mb-2">
                <HandDrawnStar className="w-4 h-4 text-[#C69F78]" />
                <span className="font-typewriter text-xs text-[#292720] dark:text-[#F7F3EB] tracking-wide uppercase">
                  Philosophy
                </span>
              </div>
              <p className="font-handwriting text-2xl text-[#292720] dark:text-[#F7F3EB] leading-snug">
                “Making data accessible, grounded, and useful for real decision-making.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
