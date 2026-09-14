import React from 'react';
import { motion } from 'framer-motion';
import { 
  IconBrandReact, 
  IconBrandNextjs, 
  IconCheck, 
  IconBolt, 
  IconServer 
} from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ARCHITECTURE_EXPLANATION } from '../../data/portfolioData';

export const ArchitectureCallout: React.FC = () => {
  return (
    <section id="architecture" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Architecture Decision Record (ADR)"
          title="Why React Here vs."
          highlightedText="Next.js for Enterprise"
          description="A senior engineering perspective on picking the exact right tool for the project scope rather than blindly following trends."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: React + Vite for this Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="bordered" padding="lg" style={{ height: '100%', borderColor: 'rgba(14, 165, 233, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(14, 165, 233, 0.12)',
                      color: '#0ea5e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconBrandReact size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>React + Vite</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Chosen for this portfolio</span>
                  </div>
                </div>
                <Badge variant="primary">Current Build</Badge>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.25rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconBolt size={18} style={{ color: '#0ea5e9' }} />
                <span>Simplicity, zero-overhead & instant client state</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                {ARCHITECTURE_EXPLANATION.whyReactHere.points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem', flexShrink: 0 }}>
                      <IconCheck size={16} stroke={3} />
                    </span>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Next.js Strategic Enterprise Preference */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="bordered" padding="lg" style={{ height: '100%', borderColor: 'rgba(99, 102, 241, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconBrandNextjs size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Next.js (App Router)</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Preferred for large products</span>
                  </div>
                </div>
                <Badge variant="accent">Enterprise Standard</Badge>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.25rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconServer size={18} style={{ color: 'var(--color-accent)' }} />
                <span>SSR, Edge caching, sub-second FCP & SEO</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                {ARCHITECTURE_EXPLANATION.whyNextJsForEnterprise.points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--color-accent)', marginTop: '0.2rem', flexShrink: 0 }}>
                      <IconCheck size={16} stroke={3} />
                    </span>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
