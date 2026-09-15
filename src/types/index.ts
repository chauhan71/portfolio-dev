export type Theme = 'light' | 'dark';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'bordered' | 'glass' | 'interactive' | 'elevated' | 'subtle' | 'accent';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export type BadgeVariant = 'primary' | 'accent' | 'subtle' | 'outline' | 'success';

export interface Skill {
  name: string;
  category: 'core' | 'framework' | 'mobile' | 'styling';
  description: string;
  proficiency: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  overview: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  platform: 'Mobile App' | 'Web Platform' | 'Design System';
  category: 'mobile' | 'web' | 'system';
  tagline: string;
  summary: string;
  details: string;
  role: string;
  stack: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  targetAudience: string;
  demoUrl?: string;
  githubUrl?: string;
  mockupType: 'mobile-student' | 'mobile-teacher' | 'web-uipirate' | 'web-saas';
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}
