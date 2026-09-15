import React from 'react';
import { motion } from 'framer-motion';
import {
  IconSparkles,
  IconArrowRight,
  IconLayoutNavbar,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact
} from '@tabler/icons-react';
import { Button, Card } from '../components/ui';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface HeroSectionProps {
  navVariant?: 'sticky' | 'floating';
  onToggleNavVariant?: (variant: 'sticky' | 'floating') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  navVariant = 'floating',
  onToggleNavVariant,
}) => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative subtle background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', marginBottom: '1.5rem' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success)',
                  boxShadow: '0 0 8px var(--color-success)',
                }}
              />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
            }}
          >
            Frontend Web & Mobile App Developer Crafting{' '}
            <span className="gradient-text">Clean, Reusable-component</span> Experiences.
          </motion.h1>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '780px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Knowledgeable in translating sophisticated business workflows into high-speed Web portals (React, Next.js, Angular) and dual mobile applications (React Native & Expo). Proven track record at{' '}
            <strong style={{ color: 'var(--text-main)' }}>uipirate</strong> delivering reusable, copy-paste UI systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<IconArrowRight size={18} />}
              iconPosition="right"
            >
              Explore Featured Projects
            </Button>
            <Button
              variant={navVariant === 'floating' ? 'accent' : 'secondary'}
              size="lg"
              icon={<IconLayoutNavbar size={18} />}
              onClick={() => onToggleNavVariant?.(navVariant === 'floating' ? 'sticky' : 'floating')}
              title="Toggle top navigation bar between Floating Pill and Sticky Header"
            >
              Navbar: {navVariant === 'floating' ? 'Pill Dock' : 'Sticky Bar'}
            </Button>
            <Button
              href="#playground"
              variant="secondary"
              size="lg"
              icon={<IconSparkles size={18} />}
            >
              Component Variants
            </Button>
            <Button
              href="#architecture"
              variant="outline"
              size="lg"
            >
              Architecture
            </Button>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hero-metrics-grid">
              {[
                {
                  name: 'HTML5',
                  subtitle: 'Semantic Web Structure',
                  icon: <IconBrandHtml5 size={32} stroke={1.75} style={{ color: '#e34f26' }} />,
                  bg: 'rgba(227, 79, 38, 0.1)',
                },
                {
                  name: 'JavaScript',
                  subtitle: 'Modern ES6+ Logic',
                  icon: <IconBrandJavascript size={32} stroke={1.75} style={{ color: '#eab308' }} />,
                  bg: 'rgba(234, 179, 8, 0.1)',
                },
                {
                  name: 'React',
                  subtitle: 'Component Architecture',
                  icon: <IconBrandReact size={32} stroke={1.75} style={{ color: '#0ea5e9' }} />,
                  bg: 'rgba(14, 165, 233, 0.1)',
                },
                {
                  name: 'Expo',
                  subtitle: 'Mobile App Engineering',
                  icon: (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-main)' }}>
                      <path d="M4.5 4.5l7.5 15 7.5-15h-3.5l-4 8-4-8z" />
                    </svg>
                  ),
                  bg: 'rgba(99, 102, 241, 0.1)',
                },
              ].map((tech) => (
                <Card
                  key={tech.name}
                  variant="interactive"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.75rem',
                    padding: '1.75rem 1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: tech.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {tech.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                      }}
                    >
                      {tech.subtitle}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
