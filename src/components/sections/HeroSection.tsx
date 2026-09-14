import React from 'react';
import { motion } from 'framer-motion';
import {
  IconSparkles,
  IconArrowRight,
  IconLayoutNavbar
} from '@tabler/icons-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { PERSONAL_INFO } from '../../data/portfolioData';

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
            Specialized in translating sophisticated business workflows into high-speed Web portals (React, Next.js, Angular) and dual mobile applications (React Native & Expo). Proven track record at{' '}
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  variant="glass"
                  padding="sm"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      lineHeight: 1.1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {stat.label}
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
