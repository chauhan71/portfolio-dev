import type { Experience, Project, Skill } from '../types';

export const PERSONAL_INFO = {
  name: 'Senior Frontend & Mobile Developer',
  tagline: 'Engineering Corporate-Grade Web & Mobile Experiences',
  role: 'Frontend Web & Mobile App Specialist',
  bio: 'Specialized in building high-performance, accessible, and scalable digital products. Deep proficiency across React, Next.js, Angular, React Native, and Expo with a strong emphasis on clean code architecture and modular design systems.',
  email: 'developer.connect@portfolio.dev',
  status: 'Open for Enterprise Roles & Senior Contracts',
  location: 'Remote / Hybrid',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Production Apps', value: '15+' },
    { label: 'Component Systems', value: '4+' },
    { label: 'Code Cleanliness', value: '100%' },
  ]
};

export const SKILLS_DATA: Skill[] = [
  // Core Web & Mobile
  {
    name: 'React.js',
    category: 'framework',
    proficiency: 'Expert',
    description: 'Component architecture, custom hooks, context state management, and performance optimization.',
    featured: true,
  },
  {
    name: 'Next.js',
    category: 'framework',
    proficiency: 'Advanced',
    description: 'App router, Server Components (RSC), SSR/SSG rendering strategies, and SEO performance.',
    featured: true,
  },
  {
    name: 'Angular',
    category: 'framework',
    proficiency: 'Proficient',
    description: 'Enterprise architecture, RxJS reactive programming, dependency injection, and modular routing.',
    featured: true,
  },
  {
    name: 'React Native',
    category: 'mobile',
    proficiency: 'Advanced',
    description: 'Cross-platform iOS & Android mobile engineering with native bridge performance and smooth gestures.',
    featured: true,
  },
  {
    name: 'Expo',
    category: 'mobile',
    proficiency: 'Advanced',
    description: 'Rapid mobile prototyping, OTA updates, EAS builds, push notifications, and hardware sensor integration.',
    featured: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'core',
    proficiency: 'Expert',
    description: 'Modern asynchronous programming, event loop mechanics, closures, and clean functional patterns.',
    featured: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'styling',
    proficiency: 'Expert',
    description: 'Utility-first scalable styling, custom design token integration, dark mode schemas, and responsive layouts.',
    featured: true,
  },
  {
    name: 'HTML5 & CSS3',
    category: 'core',
    proficiency: 'Expert',
    description: 'Semantic markup, accessible WCAG standards, CSS custom properties, grid/flexbox, and keyframe animations.',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: 'uipirate',
    role: 'Frontend Engineer & UI Component Specialist',
    period: '2023 - Present',
    type: 'Full-Time / Contract',
    location: 'Remote',
    overview: 'Spearheaded the engineering of functional, accessible, and attractive copy-paste UI component libraries and modular production templates utilized across multiple enterprise client projects.',
    highlights: [
      'Architected 80+ reusable, copy-paste-ready UI components with distinct variants, strict TypeScript typings, and zero external runtime bloat.',
      'Enforced corporate-grade code standards, linting rules, and modular folder structures for multi-tenant frontend architectures.',
      'Engineered fluid micro-interactions, responsive states, and full WCAG accessibility compliance across light/dark themes.',
      'Reduced initial client setup time by 45% through self-documenting prop interfaces and modular tokenized styling systems.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Design Tokens'],
  },
  {
    company: 'School Management Suite (EdTech)',
    role: 'Lead Mobile App Developer',
    period: '2022 - 2023',
    type: 'Client Project',
    location: 'Hybrid',
    overview: 'Engineered two interconnected production mobile apps (Student App & Teacher App) powering a full-scale School Management ERP ecosystem.',
    highlights: [
      'Delivered dual cross-platform mobile apps for iOS and Android using React Native and Expo.',
      'Engineered the Teacher App with 1-tap rapid roll-call attendance, gradebook entry, and instant announcements.',
      'Built the Student App featuring real-time attendance tracking, exam timetables, homework submissions, and offline caching.',
      'Maintained 99.4% crash-free sessions across 10,000+ active student and faculty users.'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Context API', 'AsyncStorage', 'REST APIs'],
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'school-student-app',
    title: 'School Management Suite - Student App',
    platform: 'Mobile App',
    category: 'mobile',
    tagline: 'Cross-platform student portal for attendance, timetables & assignments',
    summary: 'A clean, high-performance mobile application engineered with React Native and Expo allowing students and parents to track academic progress, attendance records, exam schedules, and school announcements.',
    details: 'The Student App serves as the primary touchpoint for thousands of learners. Key technical considerations included optimistic UI updates, offline data caching for spotty network environments, and lightweight chart visualizations of student performance metrics.',
    role: 'Lead Mobile Developer',
    stack: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Navigation'],
    targetAudience: 'Students & Parents across K-12 and Higher-Ed institutions',
    keyFeatures: [
      'Interactive Daily Timetable with countdown to current and upcoming periods',
      'Real-time Attendance Analytics with monthly percentage warnings and trends',
      'Digital Homework Hub with PDF view, deadline countdowns, and submission confirmation',
      'Instant Emergency & Routine Broadcast Notifications via push service',
      'Digital Report Card & Gradebook breakdown by semester'
    ],
    architectureHighlights: [
      'Engineered offline-first state syncing using AsyncStorage with conflict resolution',
      'Optimized list rendering using FlashList for high-density notices and schedules',
      'Designed a distraction-free student UI adhering to high legibility and contrast'
    ],
    mockupType: 'mobile-student'
  },
  {
    id: 'school-teacher-app',
    title: 'School Management Suite - Teacher App',
    platform: 'Mobile App',
    category: 'mobile',
    tagline: 'Rapid classroom management, roll-call attendance & grading suite',
    summary: 'A fast, ergonomic mobile utility built for educators to mark daily class attendance in under 30 seconds, record examination marks, push homework assignments, and communicate with parents.',
    details: 'Designed with a workflow-first mentality. Teachers required instant action buttons and batch operations rather than multi-step wizard forms to minimize administrative burden in fast-paced classroom settings.',
    role: 'Mobile Frontend Architect',
    stack: ['React Native', 'Expo', 'TypeScript', 'Custom Gestures', 'Framer Motion Mobile'],
    targetAudience: 'School Faculty, Teachers, and Department Heads',
    keyFeatures: [
      'Ultra-fast 1-Tap Attendance Roll Call (Present, Absent, Late, Excused) with batch toggle',
      'Instant Gradebook Entry with auto-calculation of class averages and percentiles',
      'Homework Dispatcher allowing photo attachments and schedule due-dates',
      'Direct Broadcast Channel to class parents with read receipts',
      'Teacher Daily Schedule with classroom room number and lesson plan reminders'
    ],
    architectureHighlights: [
      'Gesture-driven quick actions (swipe-to-mark attendance, pull-to-sync)',
      'Strict client-side input validation for mark entries to prevent calculation anomalies',
      'Unified component library shared with the companion Student App'
    ],
    mockupType: 'mobile-teacher'
  },
  {
    id: 'uipirate-component-vault',
    title: 'uipirate Design System & Snippet Vault',
    platform: 'Design System',
    category: 'system',
    tagline: 'Modular, copy-paste ready UI component system with variants & tokens',
    summary: 'A commercial-grade library of copy-paste-ready UI components, animated cards, navigational headers, and interactive modals crafted during experience at uipirate for rapid product assembly.',
    details: 'Demonstrates clean code architecture where every reusable component comes in distinct, purposeful variants (default, bordered, glassmorphic, interactive) avoiding repetitive styling while remaining zero-bloat.',
    role: 'System Architect & Frontend Engineer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS Variables'],
    targetAudience: 'Enterprise Developers & Fast-Moving Product Teams',
    keyFeatures: [
      'Comprehensive Button variants: primary, secondary, outline, ghost, accent',
      'Multi-variant Surface Cards: default elevated, 1px bordered, frosted glass, and interactive hover-lift',
      'Dual theme engine with CSS variable token injection and zero layout flash',
      'WCAG 2.1 AA accessible with full keyboard navigation and ARIA landmarks',
      'Copy-paste ready code architecture requiring zero external runtime wrappers'
    ],
    architectureHighlights: [
      'Encapsulated variant props using TypeScript discriminated unions',
      'Hardware-accelerated CSS animations and GPU-friendly Framer Motion physics',
      'Modular folder structure separating UI primitives, layout shells, and compound sections'
    ],
    mockupType: 'web-uipirate'
  },
  {
    id: 'enterprise-saas-portal',
    title: 'Next.js Enterprise SaaS Platform',
    platform: 'Web Platform',
    category: 'web',
    tagline: 'High-performance web dashboard showcasing Next.js capabilities',
    summary: 'A showcase of scalable web architecture contrasting single-page client rendering with server-side generation, dynamic data fetching, edge caching, and rich analytical charts.',
    details: 'Built to illustrate why Next.js is preferred for large-scale enterprise portals that demand instant initial page loads (SSR), organic search engine discovery (SEO), and dynamic data caching.',
    role: 'Full-Frontend Engineer',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Server Components'],
    targetAudience: 'Enterprise Stakeholders, Operations & Engineering Leads',
    keyFeatures: [
      'Server-Side Rendered (SSR) financial metrics and user behavior charts',
      'Instant search and data filtering with URL search params state synchronization',
      'Role-based dashboard views (Admin, Manager, Contributor)',
      'Optimized responsive layouts for desktop command centers down to mobile'
    ],
    architectureHighlights: [
      'Zero-JS server components for static sections, cutting bundle weight by 60%',
      'Predictive route prefetching and streaming hydration using Suspense boundaries'
    ],
    mockupType: 'web-saas'
  }
];

export const ARCHITECTURE_EXPLANATION = {
  whyReactHere: {
    title: 'Why React + Vite for This Portfolio?',
    summary: 'Agile, Zero-Overhead Client Architecture',
    points: [
      'Pure Client-Side Agility: As a standalone personal showcase, a client-rendered SPA provides lightning-fast hot module replacement, 0 server cold-starts, and cost-effective static hosting anywhere (Vercel, Netlify, GitHub Pages).',
      'Direct State & Animation Control: Instant, tear-free theme transitions (Light/Dark mode) and uninterrupted Framer Motion micro-interactions without SSR hydration mismatch or flash.',
      'Transparent Code Architecture: Clean, readable TypeScript structure where recruiters and tech leads can immediately inspect the component patterns without framework-specific boilerplate.'
    ]
  },
  whyNextJsForEnterprise: {
    title: 'When & Why Next.js Is My Strategic Choice for Enterprise',
    summary: 'Large-Scale Performance, SSR, Edge Caching & SEO',
    points: [
      'Server-Side Rendering (SSR) & Static Generation (SSG): Crucial for high-traffic platforms, e-commerce, and SaaS where sub-second First Contentful Paint (FCP) and automatic SEO indexing directly impact revenue.',
      'Server Components & Edge Caching: Rendering heavy data logic on the server reduces the client bundle size drastically, enabling buttery-smooth mobile web experiences.',
      'Built-in Image & Asset Optimization: Automatic WebP/AVIF transcoding, responsive image sizing, and streaming suspense boundaries make Next.js the gold standard for enterprise web applications.'
    ]
  }
};
