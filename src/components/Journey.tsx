import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { Trophy, Award, Briefcase, GraduationCap, Code2, Calendar } from 'lucide-react';
import { WashiTape, HandDrawnSparkle, HandDrawnStar } from './ScrapbookDecorations';

export function Journey() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Trophy className="w-4 h-4 text-[#8a6825]" aria-hidden="true" />;
      case 'certificate':
        return <Award className="w-4 h-4 text-[#C69F78]" aria-hidden="true" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-[#5c6e4e]" aria-hidden="true" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#292720]" aria-hidden="true" />;
      case 'hackathon':
        return <Code2 className="w-4 h-4 text-[#824d58]" aria-hidden="true" />;
      default:
        return <Calendar className="w-4 h-4 text-[#8c8474]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="journey"
      aria-label="Timeline Journey"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 03</span>
            <span aria-hidden="true">·</span>
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            Little steps, big ideas
          </h2>
          <p className="font-handwriting text-2xl text-[#C69F78] dark:text-[#D4A373] mt-1">
            a chronological scrapbook of learning and growth
          </p>
        </div>

        {/* Scrapbook Timeline with notebook margin line */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#C69F78]/50 dark:border-[#C69F78]/30 space-y-8 sm:space-y-10">
          
          {/* Top Washi Tape decorative anchor */}
          <div className="absolute -top-6 -left-3">
            <WashiTape color="sage" angle="rotate-3" className="w-20 h-5" />
          </div>

          {journeyMilestones.map((item, idx) => {
            const isHighlight = item.type === 'achievement';
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Pin Node */}
                <div
                  aria-hidden="true"
                  className={`absolute -left-[31px] sm:-left-[47px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isHighlight
                      ? 'bg-[#E8D8BC] dark:bg-[#2C2417] border-[#8a6825] dark:border-[#C69F78] shadow-md ring-2 ring-[#C69F78]/50'
                      : 'bg-[#F3EBDD] dark:bg-[#1A1816] border-[#C69F78] dark:border-[#D4A373] shadow-sm'
                  }`}
                >
                  {getIcon(item.type)}
                </div>

                {/* Scrapbook Card for the Milestone */}
                <div
                  className={`p-5 sm:p-6 rounded-lg border transition-all duration-200 ${
                    isHighlight
                      ? 'bg-[#FAF3E0] dark:bg-[#282319] border-[#b89547]/50 dark:border-[#b89547]/40 shadow-paper ring-1 ring-[#b89547]/20 rotate-[-0.5deg]'
                      : 'bg-[#FAF6EE] dark:bg-[#221F1C] border-[#d6cbba] dark:border-[#3d3731] shadow-sm hover:shadow-paper'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#C69F78]/25">
                    {/* Date / Period in Typewriter Font */}
                    <span className="font-typewriter text-xs sm:text-sm font-bold text-[#8c8474] dark:text-[#A8A196]">
                      {item.dateOrYear}
                    </span>

                    {/* Unboxed category label */}
                    {item.badgeText && (
                      <span className="text-xs font-typewriter text-[#292720]/80 dark:text-[#F7F3EB]/80">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#292720] dark:text-[#F7F3EB] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#292720]/85 dark:text-[#F7F3EB]/85 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {isHighlight && (
                    <div className="mt-3 pt-2 border-t border-[#b89547]/30 flex items-center gap-1.5 text-xs font-handwriting text-xl text-[#8a6825] dark:text-[#E0A96D]">
                      <HandDrawnStar className="w-4 h-4 text-[#8a6825] dark:text-[#E0A96D]" />
                      <span>24-hour hackathon winner · exceptional innovation and technical execution</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

          {/* Bottom Washi Tape anchor */}
          <div className="pt-2">
            <div className="inline-block p-4 bg-[#E8D8BC]/80 dark:bg-[#25221F]/90 border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded-md shadow-sm">
              <p className="font-handwriting text-xl text-[#292720] dark:text-[#F7F3EB]">
                ... and more pages waiting to be written!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
