/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Hackathons } from './components/Hackathons';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProofModal, ProofItem } from './components/ProofModal';
import { certificates, hackathonActivities } from './data/portfolioData';

// Consolidated proof items for lightbox gallery
const allProofItems: ProofItem[] = [
  ...certificates.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: c.issuer,
    dateOrPeriod: c.periodOrDate,
    details: c.details,
    imageSrc: c.imageSrc,
    pdfUrl: c.pdfUrl,
    verifyUrl: c.verifyUrl,
    certificateId: c.certificateId,
    badge: 'Certification',
  })),
  ...hackathonActivities.map((h) => ({
    id: h.id,
    title: h.title,
    subtitle: h.organizers || h.venueOrTeam || 'Hackathon Event',
    dateOrPeriod: h.dates,
    details: h.status === '1st Place' 
      ? 'Certificate of Excellence: 1st Place awarded in recognition of exceptional innovation, creativity, and technical execution at the 24-Hour Hackathon.'
      : `Certificate of Participation in ${h.event}.`,
    imageSrc: h.imageSrc,
    certificateId: h.certificateId,
    badge: h.status === '1st Place' ? '1st Place Winner' : 'Participation',
  })),
];

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);

  const handleSelectProof = (proofId: string) => {
    const foundIndex = allProofItems.findIndex((item) => item.id === proofId);
    if (foundIndex !== -1) {
      setCurrentProofIndex(foundIndex);
      setModalOpen(true);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F3EBDD] dark:bg-[#181715] text-[#292720] dark:text-[#F7F3EB] flex flex-col font-sans selection:bg-[#D9A5B0]/30 selection:text-[#292720] dark:selection:bg-[#E0ACB5]/30 dark:selection:text-[#F7F3EB] transition-colors duration-200">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Journey />
          <Skills />
          <Certifications onSelectProof={handleSelectProof} />
          <Hackathons onSelectProof={handleSelectProof} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Lightbox Modal for Certificate Proofs */}
        <ProofModal
          isOpen={modalOpen}
          currentIndex={currentProofIndex}
          items={allProofItems}
          onClose={() => setModalOpen(false)}
          onNavigate={(newIndex) => setCurrentProofIndex(newIndex)}
        />
      </div>
    </ThemeProvider>
  );
}
