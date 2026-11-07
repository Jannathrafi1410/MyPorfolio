import React from 'react';
import { Trophy, Users, MapPin, Calendar, Eye, Award, Sparkles } from 'lucide-react';
import { hackathonActivities } from '../data/portfolioData';
import { WashiTape, PaperClip, HandDrawnStar, HandDrawnSparkle, HandDrawnUnderline } from './ScrapbookDecorations';

interface HackathonsProps {
  onSelectProof: (id: string) => void;
}

export function Hackathons({ onSelectProof }: HackathonsProps) {
  const winnerProof = hackathonActivities.find((h) => h.status === '1st Place');
  const participationProofs = hackathonActivities.filter((h) => h.status === 'Participant');

  return (
    <section
      id="hackathons"
      aria-label="Hackathons and Real-World Activities"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 06</span>
            <span aria-hidden="true">·</span>
            <span>Applied Challenges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            Out of the classroom, into the real world.
          </h2>
          <div className="w-52 mt-1">
            <HandDrawnUnderline />
          </div>
          <p className="font-handwriting text-2xl text-[#C69F78] dark:text-[#D4A373] mt-2">
            hackathons, problem solving under pressure, and collaborative building
          </p>
        </div>

        {/* Featured 1st Place Achievement Hero Card */}
        {winnerProof && (
          <div className="mb-12 relative">
            <div className="bg-[#FAF3E0] dark:bg-[#282319] border-2 border-[#b89547]/50 dark:border-[#b89547]/40 rounded-xl p-6 sm:p-8 shadow-paper relative overflow-hidden rotate-[-0.5deg]">
              
              {/* Decorative Washi Tape */}
              <WashiTape color="kraft" angle="rotate-2" className="absolute -top-3 left-12 w-28 h-6" />
              <PaperClip className="absolute -top-4 right-10 w-8 h-12" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Text & Citation */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#b89547]/20 dark:bg-[#b89547]/15 border border-[#b89547]/40 dark:border-[#b89547]/30 rounded text-xs font-bold font-typewriter text-[#7a591e] dark:text-[#E0A96D]">
                    <Trophy className="w-4 h-4 text-[#8a6825] dark:text-[#E0A96D]" />
                    <span>HONOR · 1ST PLACE WINNER</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#292720] dark:text-[#F7F3EB]">
                    1st Place — 24-Hour Hackathon
                  </h3>

                  <div className="space-y-2 text-sm text-[#292720]/85 dark:text-[#F7F3EB]/85 font-sans">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-[#292720] dark:text-[#F7F3EB] shrink-0 font-typewriter text-xs uppercase mt-0.5">
                        Organizers:
                      </span>
                      <span>{winnerProof.organizers}</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#8a6825] dark:text-[#E0A96D] shrink-0" />
                      <span className="font-typewriter text-xs text-[#292720] dark:text-[#F7F3EB]">{winnerProof.dates}</span>
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#292720]/80 dark:text-[#F7F3EB]/80 font-sans leading-relaxed pt-1">
                    Awarded first place in recognition of exceptional innovation, creativity, and technical execution in a fast-paced 24-hour sprint.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectProof(winnerProof.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#292720] hover:bg-[#3f3b31] dark:bg-[#FAF6EE] dark:text-[#292720] dark:hover:bg-[#E8D8BC] rounded-md transition-colors shadow-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Official Certificate of Excellence</span>
                    </button>
                  </div>
                </div>

                {/* Right: Certificate Clipping Preview */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => onSelectProof(winnerProof.id)}
                    className="group cursor-pointer relative bg-white dark:bg-[#25221F] p-2.5 rounded-lg border border-[#b89547]/40 dark:border-[#b89547]/30 shadow-polaroid rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded bg-stone-50 dark:bg-[#1C1A17] flex items-center justify-center">
                      <img
                        src={winnerProof.imageSrc}
                        alt="Certificate of Excellence awarded for 1st Place at 24-Hour Hackathon"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#292720]/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Proof</span>
                      </div>
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-handwriting text-xl text-[#292720] dark:text-[#F7F3EB] leading-none">
                        Certificate of Excellence · 1st Place
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Participation Hackathons Grid */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-4 h-4 text-[#8c8474] dark:text-[#A8A196]" />
            <h3 className="text-sm font-semibold tracking-wider uppercase font-typewriter text-[#8c8474] dark:text-[#A8A196]">
              Hackathon Participation Proofs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {participationProofs.map((item, idx) => (
              <article
                key={item.id}
                className="bg-[#FAF6EE] dark:bg-[#221F1C] border border-[#d6cbba] dark:border-[#3d3731] rounded-lg p-5 sm:p-6 shadow-paper hover:shadow-lifted transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C69F78]/25">
                    <span className="inline-flex items-center gap-1.5 text-xs font-typewriter text-[#486348] dark:text-[#A6D1A6] bg-[#A6AD91]/20 dark:bg-[#A6AD91]/15 px-2 py-0.5 rounded border border-[#A6AD91]/40 dark:border-[#A6AD91]/30">
                      <span>Status: Participant</span>
                    </span>
                    <span className="font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196]">
                      {item.dates}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold font-sans text-[#292720] dark:text-[#F7F3EB] mb-2">
                    {item.title}
                  </h4>

                  {item.venueOrTeam && (
                    <p className="text-xs sm:text-sm text-[#8c8474] dark:text-[#A8A196] font-sans mb-4">
                      {item.venueOrTeam.includes('Team') ? 'Team:' : 'Venue:'}{' '}
                      <span className="font-medium text-[#292720] dark:text-[#F7F3EB]">{item.venueOrTeam}</span>
                    </p>
                  )}

                  {/* Thumbnail Clipping */}
                  <div
                    onClick={() => onSelectProof(item.id)}
                    className="relative group cursor-pointer overflow-hidden rounded border border-[#C69F78]/30 dark:border-[#C69F78]/25 bg-white dark:bg-[#262320] p-2 aspect-[4/3] flex items-center justify-center mb-4 shadow-xs"
                  >
                    <img
                      src={item.imageSrc}
                      alt={`Certificate of Participation: ${item.title}`}
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#292720]/45 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                      <Eye className="w-4 h-4" />
                      <span>View Full Proof</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#C69F78]/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProof(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#292720] dark:text-[#F7F3EB] hover:text-[#C69F78] dark:hover:text-[#D4A373] uppercase tracking-wide transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Certificate</span>
                  </button>

                  {item.certificateId && (
                    <span className="text-[11px] font-typewriter text-[#8c8474] dark:text-[#A8A196]">
                      ID: {item.certificateId}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
