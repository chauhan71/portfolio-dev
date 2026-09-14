import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconSun,
  IconMoon,
  IconMenu2,
  IconX,
  IconCode,
  IconBriefcase,
  IconDeviceMobile,
  IconLayersSubtract,
  IconSend
} from '@tabler/icons-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import profilePic from '../../assets/my pic.jpeg';

export interface NavbarProps {
  variant?: 'floating' | 'sticky';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'floating' }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'experience', 'projects', 'tech-stack', 'architecture', 'playground', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience', id: 'experience', icon: <IconBriefcase size={16} /> },
    { label: 'Projects', href: '#projects', id: 'projects', icon: <IconDeviceMobile size={16} /> },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack', icon: <IconCode size={16} /> },
    { label: 'Architecture', href: '#architecture', id: 'architecture', icon: <IconLayersSubtract size={16} /> },
    { label: 'Components', href: '#playground', id: 'playground', badge: 'Variants' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: variant === 'floating' ? '1rem' : 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        padding: variant === 'floating' ? '0 1.25rem' : 0,
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: variant === 'floating' ? '1120px' : '100%',
          backgroundColor: isScrolled || variant === 'floating' ? 'var(--surface-glass)' : 'transparent',
          backdropFilter: isScrolled || variant === 'floating' ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled || variant === 'floating' ? 'blur(16px)' : 'none',
          borderBottom: variant === 'sticky' ? (isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent') : 'none',
          border: variant === 'floating' ? '1px solid var(--surface-glass-border)' : undefined,
          borderRadius: variant === 'floating' ? 'var(--radius-xl)' : 0,
          boxShadow: isScrolled || variant === 'floating' ? 'var(--shadow-md)' : 'none',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: 'var(--text-main)',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                border: '2px solid var(--color-primary)',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
                flexShrink: 0,
              }}
            >
              <img
                src={profilePic}
                alt="Ritik"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </span>
            <span>
              Ritik<span style={{ color: 'var(--color-primary)' }}>Portfolio</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.25rem',
            }}
            className="desktop-nav-links"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredSection === item.id;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  animate={{
                    y: isHovered ? -2 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{
                    position: 'relative',
                    padding: '0.4rem 0.25rem',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive
                      ? 'var(--color-primary)'
                      : isHovered
                      ? 'var(--color-primary)'
                      : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {/* Icon with micro animation on hover or active */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: isActive || isHovered ? 'var(--color-primary)' : 'inherit',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span>{item.label}</span>

                  {/* Badge */}
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.12rem 0.45rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: isActive ? 'var(--color-primary-light)' : 'var(--color-accent-light)',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-accent)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Right Action Icons: Theme Switcher & Contact Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="btn-reset"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-subtle)',
                transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
              }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
              </motion.div>
            </button>

            {/* Desktop CTA */}
            <div className="desktop-nav-cta" style={{ display: 'none' }}>
              <Button href="#contact" variant="primary" size="sm" icon={<IconSend size={16} />}>
                Contact
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="btn-reset mobile-menu-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '76px',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'var(--surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              zIndex: 899,
            }}
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: isActive ? 'var(--color-primary)' : 'var(--text-main)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: isActive ? 'var(--color-primary)' : 'inherit' }}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <Button
                href="#contact"
                variant="primary"
                fullWidth
                icon={<IconSend size={16} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 868px) {
          .desktop-nav-links {
            display: flex !important;
          }
          .desktop-nav-cta {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
