import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { CardVariant, CardPadding } from '../../types';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'style'> {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  glow?: boolean;
  dualHoverBorder?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  glow = false,
  dualHoverBorder,
  style = {},
  ...restProps
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
      case 'elevated':
        return {
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        };
      case 'subtle':
        return {
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid transparent',
          boxShadow: 'none',
        };
      case 'accent':
        return {
          backgroundColor: 'var(--surface-card)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          boxShadow: '0 8px 28px -4px rgba(99, 102, 241, 0.15)',
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

  const combinedStyles: React.CSSProperties = {
    borderRadius: 'var(--radius-lg)',
    padding: getPadding(),
    overflow: 'hidden',
    position: 'relative',
    ...getVariantStyles(),
    ...style,
  };

  const hasTopGradient = dualHoverBorder ?? (variant === 'interactive');
  const finalClassName = `${hasTopGradient ? 'card-dual-hover ' : ''}${className}`.trim();

  if (variant === 'interactive') {
    return (
      <motion.div
        className={finalClassName}
        style={combinedStyles}
        whileHover={{
          y: -6,
          boxShadow: 'var(--shadow-lg)',
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 15,
        }}
        {...restProps}
      >
        {hasTopGradient && <div className="card-top-border" aria-hidden="true" />}
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={finalClassName} style={combinedStyles} {...restProps}>
      {hasTopGradient && <div className="card-top-border" aria-hidden="true" />}
      {children}
    </motion.div>
  );
};
