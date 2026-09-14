import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IconArrowUpRight, 
  IconCheck, 
  IconSchool, 
  IconUserCheck, 
  IconCalendarEvent, 
  IconBellRinging, 
  IconBooks, 
  IconClock,
  IconShieldCheck
} from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mobile' | 'web' | 'system'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const renderMockup = (type: Project['mockupType']) => {
    switch (type) {
      case 'mobile-student':
        return (
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {/* Student App Screen Mock */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <IconSchool size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Alex Morgan</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Grade 10-A • Roll #14</div>
                </div>
              </div>
              <Badge variant="success">96.4% Attendance</Badge>
            </div>

            {/* Daily Schedule Card */}
            <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><IconClock size={12} /> Today's Schedule</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Period 3 of 6</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Advanced Mathematics</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Room 304 • Mr. Harrison (In 15 mins)</div>
            </div>

            {/* Quick Actions Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.75rem', fontWeight: 600 }}>
                <IconBooks size={16} style={{ color: 'var(--color-primary)', margin: '0 auto 0.25rem auto' }} />
                <span>3 Homework</span>
              </div>
              <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.75rem', fontWeight: 600 }}>
                <IconCalendarEvent size={16} style={{ color: 'var(--color-accent)', margin: '0 auto 0.25rem auto' }} />
                <span>Exam Dates</span>
              </div>
              <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.75rem', fontWeight: 600 }}>
                <IconBellRinging size={16} style={{ color: 'var(--color-success)', margin: '0 auto 0.25rem auto' }} />
                <span>Circulars</span>
              </div>
            </div>
          </div>
        );

      case 'mobile-teacher':
        return (
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {/* Teacher Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <IconUserCheck size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Faculty Portal</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Class 10-A Attendance</div>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 700 }}>All Marked (28/28)</span>
            </div>

            {/* Attendance Quick Toggle Strip */}
            <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Roll 01: Arthur Dent</span>
                <Badge variant="success">Present</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Roll 02: Clara Oswald</span>
                <Badge variant="accent">Late (Excused)</Badge>
              </div>
            </div>

            {/* Teacher Fast Actions */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ flex: 1, backgroundColor: 'var(--surface-elevated)', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center', fontSize: '0.72rem', fontWeight: 600 }}>
                + Post Homework
              </div>
              <div style={{ flex: 1, backgroundColor: 'var(--surface-elevated)', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center', fontSize: '0.72rem', fontWeight: 600 }}>
                Enter Marks
              </div>
            </div>
          </div>
        );

      case 'web-uipirate':
        return (
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                uipirate-components.tsx
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>&lt;Button variant="primary" /&gt;</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Copy-paste ready</div>
              </div>
              <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-accent)', fontWeight: 700 }}>&lt;Card variant="glass" /&gt;</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Backdrop blur 16px</div>
              </div>
            </div>
          </div>
        );

      case 'web-saas':
      default:
        return (
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>Enterprise Dashboard</span>
              <Badge variant="primary">SSR Hydrated</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem', height: '54px', paddingBottom: '0.3rem' }}>
              {[40, 65, 55, 80, 70, 95, 88].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    backgroundColor: i === 5 ? 'var(--color-primary)' : 'var(--border-strong)',
                    borderRadius: '3px 3px 0 0',
                  }}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Featured Projects"
          title="Engineered with Precision &"
          highlightedText="Clean Code"
          description="Flagship mobile applications and enterprise web systems featuring the School Management Suite and UI Pirate component architecture."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'All Featured', value: 'all' },
            { label: 'Mobile Apps (React Native / Expo)', value: 'mobile' },
            { label: 'UI Systems (uipirate)', value: 'system' },
            { label: 'Web Platforms (Next.js)', value: 'web' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value as any)}
              className="btn-reset"
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                backgroundColor: activeCategory === tab.value ? 'var(--color-primary)' : 'var(--surface-elevated)',
                color: activeCategory === tab.value ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategory === tab.value ? '1px solid transparent' : '1px solid var(--border-subtle)',
                boxShadow: activeCategory === tab.value ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              style={{ display: 'flex' }}
            >
              <Card
                variant="interactive"
                padding="md"
                onClick={() => setSelectedProject(project)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top Metadata */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Badge variant={project.category === 'mobile' ? 'accent' : 'primary'}>
                      {project.platform}
                    </Badge>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                      }}
                    >
                      <span>Explore Details</span>
                      <IconArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.35rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Live Mini Preview / Mockup Graphic */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    {renderMockup(project.mockupType)}
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Chips at bottom */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                  }}
                >
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="subtle">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
          subtitle={selectedProject ? `${selectedProject.platform} • Role: ${selectedProject.role}` : undefined}
          maxWidth="720px"
        >
          {selectedProject && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Target & Overview */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Target Audience & Scope
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {selectedProject.targetAudience}
                </p>
              </div>

              {/* In-depth details */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Technical Narrative & Implementation
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  {selectedProject.details}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  Key Engineered Features
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem' }}>
                      <span style={{ color: 'var(--color-success)', marginTop: '0.15rem' }}>
                        <IconCheck size={16} stroke={3} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <IconShieldCheck size={18} />
                  <span>Architecture & Clean Code Measures</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  {selectedProject.architectureHighlights.map((arch, aIdx) => (
                    <li key={aIdx} style={{ display: 'flex', gap: '0.5rem' }}>
                      <span>•</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedProject(null);
                    window.location.hash = '#contact';
                  }}
                >
                  Discuss This Project
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
