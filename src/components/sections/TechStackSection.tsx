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
  IconCheck
} from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SKILLS_DATA } from '../../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredSkills = activeFilter === 'all'
    ? SKILLS_DATA
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
            gap: '0.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'All Technologies', value: 'all' },
            { label: 'Frameworks (React / Next / Angular)', value: 'framework' },
            { label: 'Mobile (React Native / Expo)', value: 'mobile' },
            { label: 'Core & Styling (Tailwind / JS / CSS)', value: 'core' },
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
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card variant="default" padding="md" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                    <Badge variant={skill.proficiency === 'Expert' ? 'primary' : 'subtle'}>
                      {skill.proficiency}
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
                  <IconCheck size={14} style={{ color: 'var(--color-success)' }} />
                  <span>Corporate Clean Code Standard</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
