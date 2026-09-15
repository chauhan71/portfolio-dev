import React from 'react';
import { motion } from 'framer-motion';
import { IconCheck, IconDeviceMobile, IconComponents } from '@tabler/icons-react';
import { SectionHeader } from '../layout';
import { Card, Badge } from '../components/ui';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const leftExp = EXPERIENCE_DATA[0];
  const rightExp = EXPERIENCE_DATA[1];

  const renderExperienceCard = (exp: typeof leftExp, isLeft: boolean) => (
    <Card
      variant="bordered"
      padding="lg"
      className={isLeft ? 'book-page-left' : 'book-page-right'}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: 'var(--surface-card)',
      }}
    >
      <div>
        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: isLeft ? 'rgba(14, 165, 233, 0.12)' : 'rgba(99, 102, 241, 0.12)',
              color: isLeft ? '#0ea5e9' : '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: `1px solid ${isLeft ? 'rgba(14, 165, 233, 0.25)' : 'rgba(99, 102, 241, 0.25)'}`,
            }}
          >
            {isLeft ? <IconComponents size={24} /> : <IconDeviceMobile size={24} />}
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
              {exp.role}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <strong style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                @{exp.company}
              </strong>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.location}</span>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <Badge variant="subtle" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                {exp.type}
              </Badge>
            </div>
          </div>
        </div>

        {/* Overview statement */}
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.25rem',
            lineHeight: 1.6,
          }}
        >
          {exp.overview}
        </p>

        {/* Key Bullet Highlights */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              fontWeight: 700,
            }}
          >
            Core Responsibilities & Deliverables
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {exp.highlights.map((highlight, hIdx) => (
              <div
                key={hIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.45,
                }}
              >
                <span
                  style={{
                    color: 'var(--color-success)',
                    marginTop: '0.15rem',
                    display: 'inline-flex',
                    flexShrink: 0,
                  }}
                >
                  <IconCheck size={16} stroke={2.5} />
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Pills */}
      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Tech Stack:
          </span>
          {exp.technologies.map((t) => (
            <Badge key={t} variant="outline" style={{ fontSize: '0.74rem', padding: '0.2rem 0.5rem' }}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );

  const renderPageCover = () => (
    <Card
      variant="bordered"
      padding="lg"
      className="book-page-right"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.18)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconDeviceMobile size={22} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              @uipirate
            </h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cross-Platform Mobile</span>
          </div>
        </div>
        <Badge variant="accent">Volume II</Badge>
      </div>

      <div style={{ padding: '2rem 0', textAlign: 'center' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            color: 'var(--color-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.18)',
          }}
        >
          <IconDeviceMobile size={32} />
        </div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
          Lead Mobile App Developer
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto', lineHeight: 1.55 }}>
          Dual production iOS & Android mobile ecosystem powered by React Native and Expo.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2026 - Present</span>
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          Turn Page Open &rarr;
        </span>
      </div>
    </Card>
  );

  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Work History & Experience"
          title="Proven Impact in"
          highlightedText="Production & UI Systems"
          description="Track record of shipping production-ready web platforms and cross-platform mobile apps with corporate-grade cleanliness."
        />

        {/* 3D Book Page Flip Spread */}
        <div className="experience-book-container">
          <div className="experience-book-spread">
            {/* Center Spine Crease */}
            <div className="experience-book-spine" aria-hidden="true" />

            {/* Left Page (Base): Frontend Engineer */}
            <div style={{ height: '100%', position: 'relative', zIndex: 1 }}>
              {renderExperienceCard(leftExp, true)}
              {/* Cinematic Turning Shadow on Left Page */}
              <motion.div
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.3, delay: 0.25, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to left, rgba(0,0,0,0.18), transparent 75%)',
                  pointerEvents: 'none',
                  borderRadius: 'inherit',
                }}
              />
            </div>

            {/* Right Page (Page Flip): Cinematic 1.45s Turn from Left (-180deg) to Right (0deg) */}
            <motion.div
              className="page-flip-container"
              initial={{ 
                rotateY: -180,
                filter: 'drop-shadow(0 30px 30px rgba(0,0,0,0.22))'
              }}
              whileInView={{ 
                rotateY: 0,
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.04))'
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.45,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: 10,
              }}
            >
              {/* Front Face: Visible when open on the right */}
              <div className="page-face-front">
                {renderExperienceCard(rightExp, false)}
              </div>

              {/* Back Face: Visible when closed over the left */}
              <div className="page-face-back">
                {renderPageCover()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
