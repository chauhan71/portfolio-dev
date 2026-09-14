import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { CardVariant, CardPadding } from '../../types';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  glow = false,
  ...props
}) => {
  const getPadding = (): string => {
    switch (padding) {
      case 'none':
        return '0';
      case 'sm':
        return '1rem';
      case 'lg':
        return '2rem';
      case 'md':
      default:
        return '1.5rem';
    }
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'bordered':
        return {
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-strong)',
          boxShadow: 'none',
        };
      case 'glass':
        return {
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--surface-glass-border)',
          boxShadow: 'var(--shadow-md)',
        };
      case 'interactive':
        return {
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          boxShadow: glow ? 'var(--shadow-glow)' : 'var(--shadow-md)',
          cursor: 'pointer',
        };
      case 'default':
      default:
        return {
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: 'var(--radius-lg)',
    padding: getPadding(),
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    overflow: 'hidden',
    position: 'relative',
    ...getVariantStyles(),
  };

  if (variant === 'interactive') {
    return (
      <motion.div
        className={className}
        style={baseStyles}
        whileHover={{
          y: -4,
          borderColor: 'var(--border-interactive)',
          boxShadow: 'var(--shadow-lg)',
        }}
        whileTap={{ scale: 0.99 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} style={baseStyles} {...props}>
      {children}
    </motion.div>
  );
};
