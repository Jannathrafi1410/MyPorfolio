export interface Project {
  id: string;
  title: string;
  summary: string;
  status?: 'In progress' | 'Completed';
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  paperNote?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  paperTone: 'cream' | 'sage' | 'pink' | 'kraft';
}

export interface Milestone {
  id: string;
  dateOrYear: string;
  title: string;
  description: string;
  type: 'education' | 'certificate' | 'internship' | 'hackathon' | 'achievement';
  badgeText?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  periodOrDate: string;
  details: string;
  altText: string;
  imageSrc: string;
  pdfUrl?: string;
  verifyUrl?: string;
  certificateId?: string;
  tagColor: 'sage' | 'pink' | 'kraft';
}

export interface HackathonActivity {
  id: string;
  title: string;
  event: string;
  dates: string;
  venueOrTeam?: string;
  status: '1st Place' | 'Participant';
  imageSrc: string;
  certificateId?: string;
  organizers?: string;
  highlight?: boolean;
}
