import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ArchitectureCallout } from './components/sections/ArchitectureCallout';
import { ComponentPlayground } from './components/sections/ComponentPlayground';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  const [navVariant, setNavVariant] = useState<'sticky' | 'floating'>('floating');

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Reusable Navbar with Variant Switch */}
      <Navbar variant={navVariant} />

      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <HeroSection
          navVariant={navVariant}
          onToggleNavVariant={setNavVariant}
        />

        {/* 2. Experience Section (uipirate & School Management) */}
        <ExperienceSection />

        {/* 3. Featured Projects (Student & Teacher Mobile Apps, UI Pirate Vault, SaaS) */}
        <ProjectsSection />

        {/* 4. Categorized Tech Stack Matrix */}
        <TechStackSection />

        {/* 5. Senior Architecture Callout: React vs Next.js */}
        <ArchitectureCallout />

        {/* 6. Live Reusable Component Variants Playground */}
        <ComponentPlayground
          navVariant={navVariant}
          onToggleNavVariant={setNavVariant}
        />

        {/* 7. Frontend-Operated Contact Section */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
