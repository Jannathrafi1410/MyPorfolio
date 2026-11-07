import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WashiTape, PaperClip, HandDrawnSparkle, HandDrawnUnderline, HandDrawnStar } from './ScrapbookDecorations';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Jannath"
      className="py-16 md:py-24 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196] tracking-wider uppercase mb-1">
            <span>Chapter 07</span>
            <span aria-hidden="true">·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] font-sans">
            Have an idea? I’d love to hear about it.
          </h2>
          <div className="w-48 mx-auto mt-1">
            <HandDrawnUnderline />
          </div>
          <p className="text-base sm:text-lg text-[#292720]/80 dark:text-[#F7F3EB]/80 mt-3 font-sans max-w-lg mx-auto">
            I’m always happy to connect, collaborate, and learn something new.
          </p>
        </div>

        {/* Vintage Postcard / Mail Card */}
        <div className="relative bg-[#FAF6EE] dark:bg-[#221F1C] border-2 border-[#d6cbba] dark:border-[#3d3731] rounded-xl p-6 sm:p-10 shadow-paper relative">
          
          {/* Washi Tape and Stamp Elements */}
          <WashiTape color="pink" angle="-rotate-2" className="absolute -top-3 left-10 w-28 h-6" />
          <PaperClip className="absolute -top-4 right-12 w-8 h-12" />

          {/* Postcard Airmail Border Motif */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Note */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#C69F78]" />
                <span>{personalInfo.location}</span>
              </div>

              <h3 className="text-2xl font-bold font-sans text-[#292720] dark:text-[#F7F3EB]">
                Let’s talk data, projects, or opportunities.
              </h3>

              <p className="text-sm sm:text-base text-[#292720]/85 dark:text-[#F7F3EB]/85 font-sans leading-relaxed">
                Whether you're looking for an engineering student with hands-on data analysis training or want to discuss analytical workflows, feel free to drop me an email or connect on LinkedIn.
              </p>

              {/* Direct Email Action Box */}
              <div className="pt-2">
                <div className="bg-[#E8D8BC]/60 dark:bg-[#2A2622] border border-[#C69F78]/40 dark:border-[#C69F78]/30 rounded-lg p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-5 h-5 text-[#C69F78] shrink-0" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold font-sans text-[#292720] dark:text-[#F7F3EB] hover:text-[#C69F78] dark:hover:text-[#D4A373] transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#FAF6EE] dark:bg-[#1E1B18] hover:bg-white dark:hover:bg-[#282420] text-[#292720] dark:text-[#F7F3EB] border border-[#C69F78]/50 dark:border-[#C69F78]/30 rounded transition-all shadow-xs"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5c6e4e] dark:text-[#7bb37b]" />
                        <span className="text-[#5c6e4e] dark:text-[#7bb37b] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Stamp & Social Links */}
            <div className="md:col-span-5 md:border-l md:border-[#C69F78]/30 md:pl-8 space-y-6">
              
              {/* Postage Stamp Box */}
              <div className="border-2 border-dashed border-[#C69F78]/70 dark:border-[#C69F78]/50 p-4 rounded bg-[#F3EBDD]/70 dark:bg-[#1A1816]/70 text-center relative max-w-[200px] mx-auto md:ml-auto">
                <div className="text-[11px] font-typewriter text-[#8c8474] dark:text-[#A8A196] uppercase tracking-wider mb-1">
                  AIR MAIL · INDIA
                </div>
                <div className="font-handwriting text-2xl text-[#292720] dark:text-[#F7F3EB]">
                  Jannath K. R.
                </div>
                <div className="text-[10px] font-typewriter text-[#8c8474] dark:text-[#A8A196] mt-1">
                  KERALA · 2026
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-typewriter text-[#8c8474] dark:text-[#A8A196] uppercase tracking-wider block">
                  Professional Profiles
                </span>

                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#FAF6EE] dark:bg-[#2A2622] hover:bg-white dark:hover:bg-[#332E2A] border border-[#C69F78]/40 dark:border-[#C69F78]/30 text-[#292720] dark:text-[#F7F3EB] transition-all shadow-xs group"
                >
                  <span className="flex items-center gap-2.5 text-sm font-semibold">
                    <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8c8474] dark:text-[#A8A196] group-hover:text-[#292720] dark:group-hover:text-[#F7F3EB] transition-colors" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#FAF6EE] dark:bg-[#2A2622] hover:bg-white dark:hover:bg-[#332E2A] border border-[#C69F78]/40 dark:border-[#C69F78]/30 text-[#292720] dark:text-[#F7F3EB] transition-all shadow-xs group"
                >
                  <span className="flex items-center gap-2.5 text-sm font-semibold">
                    <Github className="w-4 h-4 text-[#292720] dark:text-[#F7F3EB]" />
                    <span>GitHub Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8c8474] dark:text-[#A8A196] group-hover:text-[#292720] dark:group-hover:text-[#F7F3EB] transition-colors" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#292720] hover:bg-[#3f3b31] dark:bg-[#FAF6EE] dark:text-[#292720] dark:hover:bg-[#E8D8BC] rounded-md transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send an Email</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
