import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconCheck,
  IconBolt,
  IconServer,
  IconRotateClockwise,
} from '@tabler/icons-react';
import { SectionHeader } from '../layout';
import { Badge } from '../components/ui';
import { ARCHITECTURE_EXPLANATION } from '../data/portfolioData';

interface AssembledCardSectionProps {
  children: React.ReactNode;
  initialScatter: {
    x: number;
    y: number;
    rotateZ: number;
    rotateX: number;
    rotateY: number;
    scale?: number;
  };
  delay: number;
  position: 'top' | 'middle' | 'bottom';
  borderColor: string;
  seamColor: string;
  replayKey: number;
  padding?: string;
}

const AssembledCardSection: React.FC<AssembledCardSectionProps> = ({
  children,
  initialScatter,
  delay,
  position,
  borderColor,
  seamColor,
  replayKey,
  padding = '0.85rem 1.5rem',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth < 992;
  const isStatic = shouldReduceMotion || isMobileOrTablet;

  // Assembled border radius & border styling
  const assembledRadius =
    position === 'top'
      ? 'var(--radius-lg) var(--radius-lg) 0 0'
      : position === 'bottom'
        ? '0 0 var(--radius-lg) var(--radius-lg)'
        : '0px';

  return (
    <motion.div
      key={replayKey}
      initial={
        isStatic
          ? { opacity: 0, y: 15 }
          : {
            opacity: 0,
            x: initialScatter.x,
            y: initialScatter.y,
            rotateZ: initialScatter.rotateZ,
            rotateX: initialScatter.rotateX,
            rotateY: initialScatter.rotateY,
            scale: initialScatter.scale ?? 0.92,
            borderRadius: '12px',
            border: `1px solid ${borderColor}`,
            boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.12)',
          }
      }
      whileInView={
        isStatic
          ? { opacity: 1, y: 0, borderRadius: assembledRadius }
          : {
            opacity: 1,
            x: 0,
            y: 0,
            rotateZ: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            borderRadius: assembledRadius,
            boxShadow: 'none',
          }
      }
      viewport={{ once: true, amount: 0.1 }}
      transition={
        isStatic
          ? { duration: 0.35, delay: delay * 0.5 }
          : {
            type: 'spring',
            stiffness: 85,
            damping: 14,
            mass: 0.85,
            delay: delay,
          }
      }
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        padding: padding,
        borderLeft: `1px solid ${borderColor}`,
        borderRight: `1px solid ${borderColor}`,
        borderTop: position === 'top' ? `1px solid ${borderColor}` : 'none',
        borderBottom: position === 'bottom' ? `1px solid ${borderColor}` : `1px solid ${seamColor}`,
        marginTop: position === 'top' ? 0 : '-1px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

export const ArchitectureCallout: React.FC = () => {
  const [replayCount, setReplayCount] = useState(0);

  const handleReplay = () => {
    setReplayCount((prev) => prev + 1);
  };

  const renderPoint = (point: string, checkColor: string, bgColor: string) => {
    const colonIndex = point.indexOf(':');
    let title = '';
    let desc = point;
    if (colonIndex !== -1) {
      title = point.slice(0, colonIndex);
      desc = point.slice(colonIndex + 1);
    }

    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem' }}>
        <span
          style={{
            color: checkColor,
            backgroundColor: bgColor,
            padding: '0.2rem',
            borderRadius: '6px',
            marginTop: '0.15rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <IconCheck size={15} stroke={3} />
        </span>
        <span style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
          {title ? (
            <>
              <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>{title}:</strong>
              {desc}
            </>
          ) : (
            desc
          )}
        </span>
      </div>
    );
  };

  return (
    <section id="architecture" style={{ padding: '5rem 0', overflow: 'hidden' }}>
      <div className="container">
        <SectionHeader
          badge="Architecture Decision Record"
          title="Why React Here vs."
          highlightedText="Next.js for Enterprise"
          description="A senior engineering perspective on picking the exact right tool for project scope rather than blindly following trends."
        />

        {/* Puzzle Assembly Status & Replay Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={handleReplay}
            className="btn-reset"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--surface-elevated)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
            }}
          >
            <IconRotateClockwise size={16} style={{ color: 'var(--color-primary)' }} />
            <span>Replay 3D Assembly Animation</span>
          </button>

        </div>

        {/* 3D Perspective Grid: 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            maxWidth: '1080px',
            margin: '0 auto',
            perspective: '1200px',
          }}
        >
          {/* ================= COLUMN 1: REACT + VITE SINGLE CARD ================= */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              borderRadius: 'var(--radius-lg)',
            }}
            whileHover={{
              y: -5,
              boxShadow: '0 16px 36px -8px rgba(14, 165, 233, 0.16)',
              transition: { duration: 0.18, ease: 'easeOut' },
            }}
          >
            {/* Part 1: Top Header & Highlight Pill */}
            <AssembledCardSection
              position="top"
              borderColor="rgba(14, 165, 233, 0.4)"
              seamColor="rgba(14, 165, 233, 0.15)"
              delay={0.04}
              replayKey={replayCount}
              padding="1.5rem 1.5rem 1.15rem 1.5rem"
              initialScatter={{ x: -65, y: -70, rotateZ: -6, rotateX: 18, rotateY: -10, scale: 0.92 }}
            >
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
                      flexShrink: 0,
                    }}
                  >
                    <IconBrandReact size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>React + Vite</h3>
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
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconBolt size={18} style={{ color: '#0ea5e9', flexShrink: 0 }} />
                <span>Lightweight, fast loading, and smooth interactions</span>
              </div>
            </AssembledCardSection>

            {/* Part 2: Point 1 */}
            <AssembledCardSection
              position="middle"
              borderColor="rgba(14, 165, 233, 0.4)"
              seamColor="rgba(14, 165, 233, 0.12)"
              delay={0.12}
              replayKey={replayCount}
              padding="0.9rem 1.5rem"
              initialScatter={{ x: -85, y: -15, rotateZ: 5, rotateX: -12, rotateY: 15, scale: 0.94 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyReactHere.points[0],
                '#0ea5e9',
                'rgba(14, 165, 233, 0.12)'
              )}
            </AssembledCardSection>

            {/* Part 3: Point 2 */}
            <AssembledCardSection
              position="middle"
              borderColor="rgba(14, 165, 233, 0.4)"
              seamColor="rgba(14, 165, 233, 0.12)"
              delay={0.2}
              replayKey={replayCount}
              padding="0.9rem 1.5rem"
              initialScatter={{ x: -70, y: 35, rotateZ: -5, rotateX: 12, rotateY: -12, scale: 0.94 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyReactHere.points[1],
                '#0ea5e9',
                'rgba(14, 165, 233, 0.12)'
              )}
            </AssembledCardSection>

            {/* Part 4: Point 3 */}
            <AssembledCardSection
              position="bottom"
              borderColor="rgba(14, 165, 233, 0.4)"
              seamColor="rgba(14, 165, 233, 0.12)"
              delay={0.28}
              replayKey={replayCount}
              padding="0.9rem 1.5rem 1.5rem 1.5rem"
              initialScatter={{ x: -40, y: 75, rotateZ: 6, rotateX: -16, rotateY: 10, scale: 0.92 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyReactHere.points[2],
                '#0ea5e9',
                'rgba(14, 165, 233, 0.12)'
              )}
            </AssembledCardSection>
          </motion.div>

          {/* ================= COLUMN 2: NEXT.JS SINGLE CARD ================= */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              borderRadius: 'var(--radius-lg)',
            }}
            whileHover={{
              y: -5,
              boxShadow: '0 16px 36px -8px rgba(99, 102, 241, 0.16)',
              transition: { duration: 0.18, ease: 'easeOut' },
            }}
          >
            {/* Part 1: Top Header & Highlight Pill */}
            <AssembledCardSection
              position="top"
              borderColor="rgba(99, 102, 241, 0.4)"
              seamColor="rgba(99, 102, 241, 0.15)"
              delay={0.06}
              replayKey={replayCount}
              padding="1.5rem 1.5rem 1.15rem 1.5rem"
              initialScatter={{ x: 65, y: -70, rotateZ: 6, rotateX: 18, rotateY: 10, scale: 0.92 }}
            >
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
                      flexShrink: 0,
                    }}
                  >
                    <IconBrandNextjs size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>Next.js (App Router)</h3>
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
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconServer size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <span>Fast page loads, better SEO ranking, and built for scale</span>
              </div>
            </AssembledCardSection>

            {/* Part 2: Point 1 */}
            <AssembledCardSection
              position="middle"
              borderColor="rgba(99, 102, 241, 0.4)"
              seamColor="rgba(99, 102, 241, 0.12)"
              delay={0.14}
              replayKey={replayCount}
              padding="0.9rem 1.5rem"
              initialScatter={{ x: 85, y: -15, rotateZ: -5, rotateX: -12, rotateY: -15, scale: 0.94 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyNextJsForEnterprise.points[0],
                'var(--color-accent)',
                'rgba(99, 102, 241, 0.12)'
              )}
            </AssembledCardSection>

            {/* Part 3: Point 2 */}
            <AssembledCardSection
              position="middle"
              borderColor="rgba(99, 102, 241, 0.4)"
              seamColor="rgba(99, 102, 241, 0.12)"
              delay={0.22}
              replayKey={replayCount}
              padding="0.9rem 1.5rem"
              initialScatter={{ x: 70, y: 35, rotateZ: 5, rotateX: 12, rotateY: 12, scale: 0.94 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyNextJsForEnterprise.points[1],
                'var(--color-accent)',
                'rgba(99, 102, 241, 0.12)'
              )}
            </AssembledCardSection>

            {/* Part 4: Point 3 */}
            <AssembledCardSection
              position="bottom"
              borderColor="rgba(99, 102, 241, 0.4)"
              seamColor="rgba(99, 102, 241, 0.12)"
              delay={0.3}
              replayKey={replayCount}
              padding="0.9rem 1.5rem 2.9rem 1.5rem"
              initialScatter={{ x: 40, y: 75, rotateZ: -6, rotateX: -16, rotateY: -10, scale: 0.92 }}
            >
              {renderPoint(
                ARCHITECTURE_EXPLANATION.whyNextJsForEnterprise.points[2],
                'var(--color-accent)',
                'rgba(99, 102, 241, 0.12)'
              )}
            </AssembledCardSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
