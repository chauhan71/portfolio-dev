import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps, MotionStyle } from 'framer-motion';
import type { ButtonVariant, ButtonSize } from '../../types';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  radius,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  isLoading = false,
  className = '',
  href,
  onClick,
  ...props
}) => {
  // Styles for different variants
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          border: '1px solid transparent',
          boxShadow: 'var(--shadow-sm)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-subtle)',
          color: 'var(--text-main)',
          border: '1px solid var(--border-subtle)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-main)',
          border: '1px solid var(--border-strong)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-secondary)',
          border: '1px solid transparent',
        };
      case 'accent':
        return {
          backgroundColor: 'var(--color-accent)',
          color: '#ffffff',
          border: '1px solid transparent',
          boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
        };
      default:
        return {};
    }
  };

  // Styles for different sizes
  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.4rem 0.85rem',
          fontSize: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          gap: '0.4rem',
        };
      case 'lg':
        return {
          padding: '0.8rem 1.6rem',
          fontSize: '1.05rem',
          borderRadius: 'var(--radius-md)',
          gap: '0.65rem',
        };
      case 'md':
      default:
        return {
          padding: '0.6rem 1.25rem',
          fontSize: '0.95rem',
          borderRadius: 'var(--radius-md)',
          gap: '0.5rem',
        };
    }
  };

  const getRadiusStyles = (): React.CSSProperties => {
    if (!radius) return {};
    switch (radius) {
      case 'none':
        return { borderRadius: '0px' };
      case 'sm':
        return { borderRadius: 'var(--radius-sm)' };
      case 'md':
        return { borderRadius: 'var(--radius-md)' };
      case 'lg':
        return { borderRadius: 'var(--radius-lg)' };
      case 'full':
        return { borderRadius: 'var(--radius-full)' };
      default:
        return {};
    }
  };

  const baseStyles: MotionStyle = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    cursor: props.disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: props.disabled || isLoading ? 0.65 : 1,
    transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s',
    textDecoration: 'none',
    userSelect: 'none',
    lineHeight: 1,
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...getRadiusStyles(),
    ...props.style,
  };

  const content = (
    <>
      {isLoading && (
        <span
          style={{
            width: '14px',
            height: '14px',
            border: '2px solid currentColor',
            borderRightColor: 'transparent',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'spin 0.8s linear infinite',
          }}
        />
      )}
      {!isLoading && icon && iconPosition === 'left' && (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>
      )}
      {children && <span>{children}</span>}
      {!isLoading && icon && iconPosition === 'right' && (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        style={baseStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      style={baseStyles}
      whileHover={props.disabled || isLoading ? undefined : { scale: 1.02 }}
      whileTap={props.disabled || isLoading ? undefined : { scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
};
