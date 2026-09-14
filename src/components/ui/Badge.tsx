import React from 'react';
import type { BadgeVariant } from '../../types';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  style = {},
}) => {
  const getStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'var(--color-accent-light)',
          color: 'var(--color-accent)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-strong)',
        };
      case 'success':
        return {
          backgroundColor: 'var(--color-success-light)',
          color: 'var(--color-success)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
        };
      case 'subtle':
        return {
          backgroundColor: 'var(--bg-subtle)',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-subtle)',
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          border: '1px solid rgba(37, 99, 235, 0.25)',
        };
    }
  };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.25rem 0.65rem',
        fontSize: '0.78rem',
        fontWeight: 600,
        borderRadius: 'var(--radius-full)',
        letterSpacing: '0.02em',
        lineHeight: 1.2,
        userSelect: 'none',
        ...getStyles(),
        ...style,
      }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
