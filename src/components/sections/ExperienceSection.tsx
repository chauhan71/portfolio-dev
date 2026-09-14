import React from 'react';
import { motion } from 'framer-motion';
import { IconCheck, IconDeviceMobile, IconComponents } from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Work History & Experience"
          title="Proven Impact in"
          highlightedText="Production & UI Systems"
          description="Track record of shipping production-ready web platforms and cross-platform mobile apps with corporate-grade cleanliness."
        />

        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card variant="bordered" padding="lg" style={{ position: 'relative' }}>
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {exp.company === 'uipirate' ? (
                        <IconComponents size={24} />
                      ) : (
                        <IconDeviceMobile size={24} />
                      )}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <strong style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                          @{exp.company}
                        </strong>
                        <span style={{ color: 'var(--border-strong)' }}>•</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="subtle">{exp.period}</Badge>
                    <Badge variant="primary">{exp.type}</Badge>
                  </div>
                </div>

                {/* Overview statement */}
                <p
                  style={{
                    fontSize: '0.98rem',
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
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Core Responsibilities & Deliverables
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-main)',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--color-success)',
                            marginTop: '0.2rem',
                            display: 'inline-flex',
                            flexShrink: 0,
                          }}
                        >
                          <IconCheck size={16} stroke={3} />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Tech Stack:
                  </span>
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
