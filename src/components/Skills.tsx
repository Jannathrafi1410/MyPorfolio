import React from 'react';
import { skillsList } from '../data/portfolioData';
import { Code, Database, Table, LineChart, Wrench, Sparkles } from 'lucide-react';
import { WashiTape, PaperClip, HandDrawnSparkle, HandDrawnUnderline } from './ScrapbookDecorations';

// The verified skills from prompt and verified projects
const skillItems = [
  { name: 'Python', category: 'Language', icon: Code, note: 'Data pipelines & analysis' },
  { name: 'SQL', category: 'Querying', icon: Database, note: 'Relational data retrieval' },
  { name: 'SQLite', category: 'Database', icon: Database, note: 'Embedded data storage' },
  { name: 'Excel', category: 'Spreadsheets', icon: Table, note: 'Formulas & tabular modeling' },
  { name: 'Data cleaning', category: 'Wrangling', icon: Wrench, note: 'Handling nulls & type fixes' },
  { name: 'Exploratory data analysis', category: 'Statistics', icon: LineChart, note: 'Patterns, distributions, outliers' },
  { name: 'Data visualization', category: 'Storytelling', icon: LineChart, note: 'Charts, plots & insights' },
  { name: 'Jupyter Notebook', category: 'Workflow', icon: Sparkles, note: 'Interactive development' },
  { name: 'Cognos Analytics', category: 'Business Intelligence', icon: Table, note: 'Dashboards & enterprise BI' },
  { name: 'Hypothesis testing', category: 'Statistics', icon: LineChart, note: 'A/B testing & significance' },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills & Tools"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 04</span>
            <span aria-hidden="true">·</span>
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            Tools in my toolbox
          </h2>
          <div className="w-32 mt-1">
            <HandDrawnUnderline />
          </div>
          <p className="font-handwriting text-2xl text-[#C69F78] dark:text-[#D4A373] mt-2">
            proven tools and analytical methods (no arbitrary percentage bars)
          </p>
        </div>

        {/* Paper Swatches / Tag Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skillItems.map((skill, idx) => {
            const rotations = ['rotate-[-1deg]', 'rotate-[1deg]', 'rotate-[-0.5deg]', 'rotate-[0.8deg]', 'rotate-[-1.2deg]'];
            const rot = rotations[idx % rotations.length];
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={`relative bg-[#FAF6EE] dark:bg-[#221F1C] border border-[#d6cbba] dark:border-[#3d3731] rounded-md p-4 sm:p-5 shadow-sm hover:shadow-paper hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between ${rot}`}
              >
                {/* Tiny Washi Tape at corner */}
                {idx % 3 === 0 && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-2 left-3 w-10 h-3 bg-[#D9A5B0]/70 -rotate-2 rounded-xs shadow-xs"
                  />
                )}
                {idx % 3 === 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-2 right-3 w-10 h-3 bg-[#A6AD91]/70 rotate-3 rounded-xs shadow-xs"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-[#8c8474] dark:text-[#A8A196] font-typewriter pb-2 mb-2 border-b border-[#C69F78]/20">
                    <span className="uppercase text-[10px] tracking-wider truncate">
                      {skill.category}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#C69F78] shrink-0" aria-hidden="true" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#292720] dark:text-[#F7F3EB] font-sans">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-[#C69F78]/15">
                  <p className="text-xs text-[#292720]/70 dark:text-[#F7F3EB]/70 font-sans leading-relaxed">
                    {skill.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Transparency & Continuous Learning */}
        <div className="mt-10 p-5 bg-[#E8D8BC]/50 dark:bg-[#25221F]/80 border border-[#C69F78]/30 dark:border-[#C69F78]/20 rounded-lg max-w-2xl mx-auto flex items-center gap-4">
          <PaperClip className="w-6 h-10 shrink-0 text-[#8c8474] dark:text-[#A8A196]" />
          <div>
            <p className="text-xs sm:text-sm text-[#292720]/90 dark:text-[#F7F3EB]/90 font-sans leading-relaxed">
              <strong>Ground truth approach:</strong> Skills listed reflect verified course completion, internship practice, and working code in GitHub repositories.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
