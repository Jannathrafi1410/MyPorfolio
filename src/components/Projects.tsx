import React from 'react';
import { ExternalLink, Github, Terminal, Database, Clock, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { WashiTape, PaperClip, HandDrawnSparkle, HandDrawnUnderline } from './ScrapbookDecorations';

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="GitHub Projects"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
              <span>Chapter 02</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
              Things I’ve been building
            </h2>
            <div className="w-36 mt-1">
              <HandDrawnUnderline />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196]">
            <Terminal className="w-4 h-4 text-[#C69F78]" aria-hidden="true" />
            <span>3 Verified GitHub Projects</span>
          </div>
        </div>

        {/* Exactly 3 Projects in a Responsive Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const rotations = ['rotate-[-0.75deg]', 'rotate-[0.75deg]', 'rotate-[-0.5deg]'];
            const tapeColors: Array<'pink' | 'sage' | 'kraft'> = ['pink', 'sage', 'kraft'];
            const rotation = rotations[idx % rotations.length];
            const tapeColor = tapeColors[idx % tapeColors.length];

            return (
              <article
                key={project.id}
                className={`relative bg-[#FAF6EE] dark:bg-[#221F1C] border border-[#d6cbba] dark:border-[#3d3731] rounded-lg p-6 sm:p-7 shadow-paper hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${rotation}`}
              >
                {/* Washi Tape Strip at top */}
                <WashiTape
                  color={tapeColor}
                  angle={idx % 2 === 0 ? '-rotate-1' : 'rotate-2'}
                  className="absolute -top-3 left-8 w-24 h-5"
                />

                {/* Card Top: Numbering & Status */}
                <div>
                  <div className="flex items-center justify-between pt-2 pb-4 border-b border-[#C69F78]/25">
                    <span className="font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider">
                      PROJECT 0{idx + 1}
                    </span>

                    {/* Status Badge */}
                    {project.status === 'In progress' ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-typewriter text-[#805b38] dark:text-[#E0A96D] bg-[#C69F78]/20 dark:bg-[#C69F78]/15 px-2 py-0.5 rounded border border-[#C69F78]/40 dark:border-[#C69F78]/30">
                        <Clock className="w-3 h-3 animate-pulse" aria-hidden="true" />
                        <span>In progress</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-[11px] font-typewriter text-[#3f5e3f] dark:text-[#A6D1A6] bg-[#A6AD91]/25 dark:bg-[#A6AD91]/15 px-2 py-0.5 rounded border border-[#A6AD91]/40 dark:border-[#A6AD91]/30">
                        <span>Completed</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#292720] dark:text-[#F7F3EB] mt-4 mb-3 group-hover:text-[#C69F78] dark:group-hover:text-[#D4A373] transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-[#292720]/80 dark:text-[#F7F3EB]/80 leading-relaxed font-sans mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Card Bottom: Technologies & Working Link */}
                <div className="pt-4 border-t border-[#C69F78]/25 space-y-4">
                  {/* Technologies: unboxed text with typographic dot separators */}
                  <div>
                    <span className="text-[11px] font-typewriter text-[#8c8474] dark:text-[#A8A196] uppercase tracking-wider block mb-1">
                      Stack / Focus
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#292720]/90 dark:text-[#F7F3EB]/90">
                      {project.technologies.map((tech, techIdx) => (
                        <React.Fragment key={tech}>
                          <span className="bg-[#E8D8BC]/80 dark:bg-[#2C2824] px-2 py-0.5 rounded text-xs border border-[#C69F78]/30 dark:border-[#C69F78]/25">
                            {tech}
                          </span>
                          {techIdx < project.technologies.length - 1 && (
                            <span className="text-[#C69F78]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Handwritten Note if present */}
                  {project.paperNote && (
                    <div className="text-xs font-handwriting text-[#8c7457] dark:text-[#D4A373] text-lg leading-tight">
                      note: {project.paperNote}
                    </div>
                  )}

                  {/* Working GitHub Link */}
                  <div className="pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#2C2824] hover:bg-[#decbb0] dark:hover:bg-[#38332E] border border-[#C69F78]/50 dark:border-[#C69F78]/40 rounded-md transition-colors shadow-sm group"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-[#292720] dark:text-[#F7F3EB]" aria-hidden="true" />
                        <span>View Repository</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#8c8474] dark:text-[#A8A196] group-hover:text-[#292720] dark:group-hover:text-[#F7F3EB] transition-colors" aria-hidden="true" />
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Scrapbook Footer Note */}
        <div className="mt-12 text-center">
          <p className="font-handwriting text-2xl text-[#292720]/80 dark:text-[#F7F3EB]/80">
            “Clean datasets, thoughtful questions, and verifiable code.”
          </p>
        </div>

      </div>
    </section>
  );
}
