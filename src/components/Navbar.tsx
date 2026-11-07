import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F3EBDD]/95 dark:bg-[#181715]/95 backdrop-blur-md border-b border-[#C69F78]/25 dark:border-[#C69F78]/20 shadow-sm py-3'
          : 'bg-[#F3EBDD]/80 dark:bg-[#181715]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-1 text-2xl font-bold tracking-tight text-[#292720] dark:text-[#F7F3EB] hover:text-[#C69F78] dark:hover:text-[#D4A373] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C69F78] rounded-sm"
          >
            <span className="font-typewriter text-xl tracking-normal">Jannath K. R.</span>
            <span className="font-handwriting text-base font-normal text-[#C69F78] dark:text-[#D4A373] group-hover:translate-x-0.5 transition-transform">
              · portfolio
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#292720]/80 dark:text-[#F7F3EB]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#292720] dark:hover:text-[#F7F3EB] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C69F78] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left focus-visible:outline-2 focus-visible:outline-[#C69F78] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action, Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#25221F] border border-[#C69F78]/50 dark:border-[#C69F78]/40 hover:bg-[#C69F78]/30 dark:hover:bg-[#C69F78]/20 transition-all shadow-xs hover:shadow focus-visible:outline-2 focus-visible:outline-[#C69F78]"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#292720]" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4 text-[#D4A373]" aria-hidden="true" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#25221F] border border-[#C69F78]/50 dark:border-[#C69F78]/40 rounded-md hover:bg-[#C69F78]/30 dark:hover:bg-[#C69F78]/20 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C69F78]"
            >
              <span>Let’s connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC]/60 dark:bg-[#25221F]/80 border border-[#C69F78]/30 dark:border-[#C69F78]/40 hover:bg-[#E8D8BC] dark:hover:bg-[#25221F] transition-colors focus-visible:outline-2 focus-visible:outline-[#C69F78]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scrapbook Scroll Progress Indicator (Washi-Tape & Bookmark Ribbon) */}
      <div
        role="progressbar"
        aria-label="Portfolio scroll progress"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#E8D8BC]/60 dark:bg-[#25221F]/80 overflow-visible pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-[#D9A5B0] via-[#C69F78] to-[#A6AD91] relative transition-[width] duration-75 ease-out shadow-[0_1px_2px_rgba(41,39,32,0.1)]"
          style={{ width: `${scrollProgress * 100}%` }}
        >
          {/* Subtle scrapbook bookmark tab at the leading edge */}
          {scrollProgress > 0.005 && (
            <div
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2.5 h-2.5 rounded-full bg-[#FAF6EE] dark:bg-[#25221F] border-2 border-[#C69F78] shadow-xs flex items-center justify-center"
            >
              <div className="w-0.5 h-0.5 rounded-full bg-[#292720] dark:bg-[#F7F3EB]" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[57px] bg-[#292720]/40 dark:bg-black/60 backdrop-blur-sm z-50 lg:hidden flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs h-full bg-[#F3EBDD] dark:bg-[#1C1A17] border-l border-[#C69F78]/40 p-6 flex flex-col justify-between shadow-2xl relative bg-notebook-dots"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 mb-4 border-b border-[#C69F78]/30 flex items-center justify-between">
                <span className="font-handwriting text-xl text-[#292720] dark:text-[#F7F3EB]">Portfolio Sections</span>
                <span className="font-typewriter text-xs text-[#8c8474] dark:text-[#A8A196]">INDEX</span>
              </div>
              <ul className="space-y-3">
                {navLinks.map((link, idx) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-sm font-medium text-[#292720] dark:text-[#F7F3EB] rounded-md hover:bg-[#E8D8BC] dark:hover:bg-[#2A2622] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="font-typewriter text-xs text-[#C69F78] dark:text-[#D4A373]">0{idx + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#C69F78]/30 space-y-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#292720] dark:text-[#F7F3EB] bg-[#E8D8BC] dark:bg-[#25221F] border border-[#C69F78]/40 rounded-md transition-colors"
              >
                <span>Theme: {theme === 'light' ? 'Light Parchment' : 'Midnight Scrapbook'}</span>
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#D4A373]" />}
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#292720] dark:text-[#F7F3EB] bg-[#C69F78]/40 dark:bg-[#C69F78]/30 hover:bg-[#C69F78]/60 border border-[#C69F78] rounded-md transition-colors"
              >
                <span>Let’s connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="mt-3 text-xs text-center font-handwriting text-[#292720]/70 dark:text-[#F7F3EB]/70 text-lg">
                Jannath K. R. · Thrissur, Kerala
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

