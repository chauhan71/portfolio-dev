import React, { useState } from 'react';
import { 
  IconSparkles, 
  IconCopy, 
  IconCheck, 
  IconLayersSubtract, 
  IconComponents, 
  IconLayoutNavbar,
  IconPalette
} from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import type { ButtonVariant, CardVariant } from '../../types';

interface ComponentPlaygroundProps {
  navVariant: 'floating' | 'sticky';
  onToggleNavVariant: (variant: 'floating' | 'sticky') => void;
}

export const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  navVariant,
  onToggleNavVariant,
}) => {
  const [selectedButtonVariant, setSelectedButtonVariant] = useState<ButtonVariant>('primary');
  const [selectedButtonSize, setSelectedButtonSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [activeTab, setActiveTab] = useState<'buttons' | 'cards' | 'navbar' | 'tokens'>('buttons');
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'accent'];
  const cardVariants: { variant: CardVariant; label: string; desc: string }[] = [
    { variant: 'default', label: 'Default Card', desc: 'Solid surface with subtle ambient elevation shadow' },
    { variant: 'bordered', label: 'Bordered Card', desc: 'Clean 1px stroke for high contrast corporate hierarchy' },
    { variant: 'glass', label: 'Glassmorphic Card', desc: 'Frosted 16px backdrop blur with translucent borders' },
    { variant: 'interactive', label: 'Interactive Card', desc: 'Framer Motion lift, glow effect, and responsive cursor' },
  ];

  return (
    <section id="playground" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <SectionHeader
          badge="Design System Architecture"
          title="Reusable Component"
          highlightedText="Variants Showcase"
          description="A demonstration of enterprise UI engineering where every component is strictly typed, modular, and available in multiple purposeful variants."
        />

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'buttons', label: 'Button Variants', icon: <IconComponents size={16} /> },
            { id: 'cards', label: 'Card Variants', icon: <IconLayersSubtract size={16} /> },
            { id: 'navbar', label: 'Navbar Styles', icon: <IconLayoutNavbar size={16} /> },
            { id: 'tokens', label: 'Reusable Colors & Tokens', icon: <IconPalette size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className="btn-reset"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: activeTab === tab.id ? 'var(--color-primary)' : 'var(--surface-elevated)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                border: activeTab === tab.id ? '1px solid transparent' : '1px solid var(--border-subtle)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          {/* BUTTONS TAB */}
          {activeTab === 'buttons' && (
            <Card variant="bordered" padding="lg">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    Button Component Matrix
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Type-safe variants (`primary`, `secondary`, `outline`, `ghost`, `accent`) with Framer Motion tap scale physics.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  icon={copied === 'btn-code' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  onClick={() => copyCode(`<Button variant="${selectedButtonVariant}" size="${selectedButtonSize}">Action</Button>`, 'btn-code')}
                >
                  {copied === 'btn-code' ? 'Copied' : 'Copy JSX'}
                </Button>
              </div>

              {/* Live Interactive Buttons Display */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                  padding: '2rem',
                  backgroundColor: 'var(--bg-app)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '2rem',
                }}
              >
                {buttonVariants.map((variant) => (
                  <Button
                    key={variant}
                    variant={variant}
                    size={selectedButtonSize}
                    icon={<IconSparkles size={16} />}
                    onClick={() => setSelectedButtonVariant(variant)}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
                  </Button>
                ))}
              </div>

              {/* Control panel */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    SIZE SCALES:
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {(['sm', 'md', 'lg'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedButtonSize(s)}
                        className="btn-reset"
                        style={{
                          padding: '0.35rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          backgroundColor: selectedButtonSize === s ? 'var(--color-primary-light)' : 'var(--surface-elevated)',
                          color: selectedButtonSize === s ? 'var(--color-primary)' : 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                        }}
                      >
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* CARDS TAB */}
          {activeTab === 'cards' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {cardVariants.map((c) => (
                <Card key={c.variant} variant={c.variant} padding="md" glow={c.variant === 'interactive'}>
                  <Badge variant="primary" style={{ marginBottom: '0.75rem' }}>
                    variant="{c.variant}"
                  </Badge>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {c.label}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {c.desc}
                  </p>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    &lt;Card variant="{c.variant}" /&gt;
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* NAVBAR STYLES TAB */}
          {activeTab === 'navbar' && (
            <Card variant="bordered" padding="lg">
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  Top Navigation Bar Variants
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Switch between the classic full-width sticky corporate header and the modern floating island/pill dock.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem',
                }}
              >
                <button
                  onClick={() => onToggleNavVariant('sticky')}
                  className="btn-reset"
                  style={{
                    flex: 1,
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: navVariant === 'sticky' ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: navVariant === 'sticky' ? 'var(--color-primary-light)' : 'var(--surface-elevated)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    1. Sticky Header Variant
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Full-width fixed top bar with frosted glass backdrop blur and active line tracker.
                  </div>
                </button>

                <button
                  onClick={() => onToggleNavVariant('floating')}
                  className="btn-reset"
                  style={{
                    flex: 1,
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: navVariant === 'floating' ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: navVariant === 'floating' ? 'var(--color-primary-light)' : 'var(--surface-elevated)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    2. Floating Pill Variant
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Centered floating island with 24px border radius and elevated glass shadow.
                  </div>
                </button>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Currently active at top of page: <strong>{navVariant.toUpperCase()} NAVBAR</strong>
              </div>
            </Card>
          )}

          {/* REUSABLE COLORS & TOKENS TAB */}
          {activeTab === 'tokens' && (
            <Card variant="bordered" padding="lg">
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  Harmonious Corporate Color System
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Unified CSS custom properties automatically adapting between Light (default) and Dark theme.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                }}
              >
                {[
                  { name: 'Primary Brand', token: '--color-primary', bg: 'var(--color-primary)', text: '#fff' },
                  { name: 'Indigo Accent', token: '--color-accent', bg: 'var(--color-accent)', text: '#fff' },
                  { name: 'Emerald Success', token: '--color-success', bg: 'var(--color-success)', text: '#fff' },
                  { name: 'App Background', token: '--bg-app', bg: 'var(--bg-app)', text: 'var(--text-main)', border: true },
                  { name: 'Elevated Surface', token: '--surface-card', bg: 'var(--surface-card)', text: 'var(--text-main)', border: true },
                  { name: 'Border Strong', token: '--border-strong', bg: 'var(--border-strong)', text: 'var(--text-main)' },
                ].map((col) => (
                  <div
                    key={col.token}
                    style={{
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      style={{
                        height: '60px',
                        backgroundColor: col.bg,
                        borderBottom: col.border ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    />
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--surface-elevated)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {col.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {col.token}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
