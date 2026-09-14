import React from 'react';
import { Badge } from '../ui/Badge';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedText,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '100%',
        margin: align === 'center' ? '0 auto 3rem auto' : '0 0 2.5rem 0',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.85rem' }}>
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text-main)',
          lineHeight: 1.2,
          marginBottom: description ? '1rem' : '0',
          letterSpacing: '-0.03em',
        }}
      >
        {title}{' '}
        {highlightedText && <span className="gradient-text">{highlightedText}</span>}
      </h2>
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
