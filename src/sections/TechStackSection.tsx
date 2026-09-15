import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandTailwind,
  IconDeviceMobile,
  IconCode,
  IconCpu,
} from '@tabler/icons-react';
import { SectionHeader } from '../layout';
import { Card, Badge } from '../components/ui';
import { SKILLS_DATA } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredSkills = activeFilter === 'all'
    ? SKILLS_DATA
    : activeFilter === 'core'
      ? SKILLS_DATA.filter((s) => s.category === 'core' || s.category === 'styling')
      : SKILLS_DATA.filter((s) => s.category === activeFilter);

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'react.js':
        return <IconBrandReact size={26} style={{ color: '#0ea5e9' }} />;
      case 'next.js':
        return <IconBrandNextjs size={26} style={{ color: 'var(--text-main)' }} />;
      case 'angular':
        return <IconCpu size={26} style={{ color: '#ef4444' }} />;
      case 'react native':
      case 'expo':
        return <IconDeviceMobile size={26} style={{ color: 'var(--color-primary)' }} />;
      case 'javascript (es6+)':
        return <IconBrandJavascript size={26} style={{ color: '#f59e0b' }} />;
      case 'tailwind css':
        return <IconBrandTailwind size={26} style={{ color: '#06b6d4' }} />;
      case 'html5 & css3':
      default:
        return <IconCode size={26} style={{ color: 'var(--color-accent)' }} />;
    }
  };

  return (
    <section id="tech-stack" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <SectionHeader
          badge="Technical Competencies"
          title="Modern Frontend &"
          highlightedText="Mobile Architecture"
          description="A specialized toolkit focused on component modularity, cross-platform mobile parity, and clean type-safe development."
        />

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'All Technologies', value: 'all' },
            { label: 'Frameworks', value: 'framework' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Core & Styling', value: 'core' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className="btn-reset"
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: activeFilter === btn.value ? 'var(--color-primary)' : 'var(--surface-elevated)',
                color: activeFilter === btn.value ? '#ffffff' : 'var(--text-secondary)',
                border: activeFilter === btn.value ? '1px solid transparent' : '1px solid var(--border-subtle)',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filteredSkills.map((skill, index) => {
            const isAll = activeFilter === 'all';
            const isTopRow = isAll && index < 4;
            const isBottomRow = isAll && index >= 4;

            // Subtle rotation angles so bottom cards feel like scattered cards sliding out
            const scatterRotations = [-3, -1, 1.5, 3];
            const scatterRotation = isBottomRow ? (scatterRotations[index - 4] ?? 0) : 0;

            // The exact vertical offset to place row 2 cards directly behind row 1 (card height ~250px + gap 20px)
            const rowOffset = -270;

            const initialAnimation = isBottomRow
              ? { opacity: 0, y: rowOffset, scale: 0.95, rotate: scatterRotation }
              : isTopRow
                ? { opacity: 0, y: -20, scale: 1, rotate: 0 }
                : { opacity: 0, y: 20, scale: 0.96, rotate: 0 };

            const inViewAnimation = {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
            };

            const animationTransition = isBottomRow
              ? {
                y: {
                  type: 'spring' as const,
                  stiffness: 110,
                  damping: 15,
                  mass: 0.9,
                  delay: 0.25 + (index - 4) * 0.12,
                },
                rotate: {
                  type: 'spring' as const,
                  stiffness: 110,
                  damping: 15,
                  mass: 0.9,
                  delay: 0.25 + (index - 4) * 0.12,
                },
                scale: {
                  duration: 0.4,
                  delay: 0.25 + (index - 4) * 0.12,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15 + (index - 4) * 0.12,
                },
              }
              : isTopRow
                ? {
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: 'easeOut' as const,
                }
                : {
                  duration: 0.3,
                  delay: index * 0.05,
                };

            return (
              <motion.div
                key={skill.name}
                initial={initialAnimation}
                whileInView={inViewAnimation}
                viewport={{ once: false, amount: 0.2 }}
                transition={animationTransition}
                style={{
                  position: 'relative',
                  zIndex: isTopRow ? 2 : 1,
                }}
              >
                <Card
                  variant="default"
                  dualHoverBorder
                  padding="md"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--bg-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {getTechIcon(skill.name)}
                      </div>
                      <Badge variant="primary">
                        Conversant
                      </Badge>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      {skill.name}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {skill.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>

                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
