import React from 'react';
import { IconArrowUp, IconCode } from '@tabler/icons-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-subtle)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        marginTop: '6rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: 'var(--text-main)',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  color: '#ffffff',
                }}
              >
                <IconCode size={18} />
              </span>
              <span>
                Dev<span style={{ color: 'var(--color-primary)' }}>Portfolio</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Crafting high-precision web architectures, cross-platform mobile apps, and scalable UI design systems with corporate-grade cleanliness.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li><a href="#experience" style={{ color: 'var(--text-secondary)' }}>Experience</a></li>
                <li><a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a></li>
                <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)' }}>Tech Stack</a></li>
                <li><a href="#architecture" style={{ color: 'var(--text-secondary)' }}>Architecture</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                Engineering
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li><a href="#playground" style={{ color: 'var(--text-secondary)' }}>Component Variants</a></li>
                <li><a href="#projects" style={{ color: 'var(--text-secondary)' }}>School Suite (Mobile)</a></li>
                <li><a href="#experience" style={{ color: 'var(--text-secondary)' }}>uipirate System</a></li>
                <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Get in Touch</a></li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn-reset"
              aria-label="Scroll to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
              }}
            >
              <span>Back to Top</span>
              <IconArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Frontend & Mobile Developer. Engineered with clean corporate patterns.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Built with React 19, Vite, TypeScript & Tabler Icons library</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
