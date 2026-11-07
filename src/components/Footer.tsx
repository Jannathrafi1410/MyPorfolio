import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { HandDrawnStar } from './ScrapbookDecorations';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#C69F78]/30 dark:border-[#C69F78]/20 bg-[#E8D8BC]/40 dark:bg-[#151412] py-12 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left Brand & School */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-typewriter text-lg font-bold text-[#292720] dark:text-[#F7F3EB]">
                {personalInfo.name}
              </span>
              <span className="font-handwriting text-xl text-[#C69F78] dark:text-[#D4A373]">
                · digital scrapbook
              </span>
            </div>
            <p className="text-xs text-[#292720]/75 dark:text-[#F7F3EB]/75 font-sans mt-1">
              Engineering student at {personalInfo.college} · {personalInfo.university}
            </p>
            <p className="text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196] mt-0.5">
              Thrissur, Kerala · Expected graduation 2028
            </p>
          </div>

          {/* Center Note */}
          <div className="hidden lg:flex items-center gap-1.5 font-handwriting text-xl text-[#292720]/80 dark:text-[#F7F3EB]/80">
            <HandDrawnStar className="w-4 h-4 text-[#C69F78] dark:text-[#D4A373]" />
            <span>“Collecting ideas, building things, and making sense of data.”</span>
          </div>

          {/* Right: Back to Top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#292720] dark:text-[#F7F3EB] bg-[#FAF6EE] dark:bg-[#221F1C] hover:bg-white dark:hover:bg-[#2D2925] border border-[#C69F78]/50 dark:border-[#C69F78]/30 rounded-md transition-all shadow-xs hover:shadow focus-visible:outline-2 focus-visible:outline-[#C69F78]"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C69F78] dark:text-[#D4A373]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright hairline */}
        <div className="mt-8 pt-6 border-t border-[#C69F78]/20 dark:border-[#C69F78]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-typewriter text-[#8c8474] dark:text-[#A8A196] gap-2">
          <span>Curated with warm paper & clean code</span>
          <span>© {new Date().getFullYear()} Jannath K. R.</span>
        </div>
      </div>
    </footer>
  );
}
