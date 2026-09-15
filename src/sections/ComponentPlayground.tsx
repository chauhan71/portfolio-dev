import React, { useState } from 'react';
import {
  IconSparkles,
  IconCopy,
  IconCheck,
  IconLayersSubtract,
  IconComponents,
  IconLayoutNavbar,
  IconPalette,
  IconInfoCircle
} from '@tabler/icons-react';
import { SectionHeader } from '../layout';
import { Card, Button, Badge } from '../components/ui';
import type { ButtonVariant, CardVariant } from '../types';

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
  const [selectedRadius, setSelectedRadius] = useState<'none' | 'sm' | 'md' | 'full'>('md');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'buttons' | 'cards' | 'navbar' | 'tokens'>('buttons');
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'accent'];
  const cardVariants: { variant: CardVariant; label: string; desc: string }[] = [
    { variant: 'default', label: 'Default Surface', desc: 'Solid surface with subtle ambient elevation shadow for content cards.' },
    { variant: 'bordered', label: 'Bordered High-Contrast', desc: 'Clean 1px strong stroke for high contrast data tables and enterprise screens.' },
    { variant: 'glass', label: 'Glassmorphic Frost', desc: 'Frosted 16px backdrop blur with translucent border for modern floating UI.' },
    { variant: 'interactive', label: 'Interactive Hover', desc: 'Framer Motion spring lift, ambient glow, and pointer feedback.' },
    { variant: 'elevated', label: 'High Elevation Drop', desc: 'Deep multi-layer drop-shadow for popovers, modals, and spotlight cards.' },
    { variant: 'subtle', label: 'Subtle Ghost Surface', desc: 'Flat background with zero border for quiet dashboard groupings.' },
    { variant: 'accent', label: 'Indigo Brand Accent', desc: 'Brand accent border with soft radiant glow for highlighted or pro tiers.' },
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
          {(
            [
              { id: 'buttons', label: 'Button Variants', icon: <IconComponents size={16} /> },
              { id: 'cards', label: 'Card Variants', icon: <IconLayersSubtract size={16} /> },
              { id: 'navbar', label: 'Navbar Styles', icon: <IconLayoutNavbar size={16} /> },
              { id: 'tokens', label: 'Reusable Colors', icon: <IconPalette size={16} /> },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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
                  onClick={() => {
                    let propsStr = `variant="${selectedButtonVariant}" size="${selectedButtonSize}"`;
                    if (selectedRadius !== 'md') propsStr += ` radius="${selectedRadius}"`;
                    if (isLoading) propsStr += ` isLoading`;
                    if (isDisabled) propsStr += ` disabled`;
                    if (showIcon) propsStr += ` icon={<IconSparkles size={16} />}`;
                    copyCode(`<Button ${propsStr}>Action</Button>`, 'btn-code');
                  }}
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
                  marginBottom: '1.75rem',
                }}
              >
                {buttonVariants.map((variant) => (
                  <Button
                    key={variant}
                    variant={variant}
                    size={selectedButtonSize}
                    radius={selectedRadius}
                    isLoading={isLoading}
                    disabled={isDisabled}
                    icon={showIcon ? <IconSparkles size={16} /> : undefined}
                    onClick={() => setSelectedButtonVariant(variant)}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
                  </Button>
                ))}
              </div>

              {/* Control Panel: Filters for Size, Radius, States & Icon as Dropdowns */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  alignItems: 'flex-end',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  rowGap: '1rem',
                }}
              >
                {/* 1. Size Dropdown */}
                <div style={{ flex: '1 1 140px' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    SIZE SCALE:
                  </label>
                  <select
                    value={selectedButtonSize}
                    onChange={(e) => setSelectedButtonSize(e.target.value as 'sm' | 'md' | 'lg')}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-elevated)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 1rem 0.45rem 0.75rem',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    <option value="sm">Small (SM)</option>
                    <option value="md">Medium (MD)</option>
                    <option value="lg">Large (LG)</option>
                  </select>
                </div>

                {/* 2. Border Radius Dropdown */}
                <div style={{ flex: '1 1 140px' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    CORNER RADIUS:
                  </label>
                  <select
                    value={selectedRadius}
                    onChange={(e) => setSelectedRadius(e.target.value as 'none' | 'sm' | 'md' | 'full')}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-elevated)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 1rem 0.45rem 0.75rem',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    <option value="none">Square</option>
                    <option value="sm">Subtle</option>
                    <option value="md">Default</option>
                    <option value="full">Pill </option>
                  </select>
                </div>

                {/* 3. Interactive State Dropdown */}
                <div style={{ flex: '1 1 140px' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    BUTTON STATE:
                  </label>
                  <select
                    value={isLoading ? 'loading' : isDisabled ? 'disabled' : 'normal'}
                    onChange={(e) => {
                      const val = e.target.value;
                      setIsLoading(val === 'loading');
                      setIsDisabled(val === 'disabled');
                    }}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-elevated)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 1rem 0.45rem 0.75rem',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    <option value="normal">Default State</option>
                    <option value="loading">Loading Spinner</option>
                    <option value="disabled">Disabled State</option>
                  </select>
                </div>

                {/* 4. Icon Display Dropdown */}
                <div style={{ flex: '1 1 140px' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    ICON DISPLAY:
                  </label>
                  <select
                    value={showIcon ? 'yes' : 'no'}
                    onChange={(e) => setShowIcon(e.target.value === 'yes')}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-elevated)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 1rem 0.45rem 0.75rem',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    <option value="yes">With Icon</option>
                    <option value="no">No Icon</option>
                  </select>
                </div>
              </div>

              {/* Design System Illustration Note */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.9rem 1.15rem',
                  backgroundColor: 'var(--bg-app)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginTop: '1.75rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                }}
              >
                <IconInfoCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.12rem' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>
                    Quick Note on This UI Playground:
                  </strong>
                  This section is just a simple example to showcase UI component and styling skills, not a full production design tool. In a real-world app, each button (Primary, Ghost, Outline, etc.) could have its own separate controls, customized states, and dedicated copy-paste code. We kept it simple and combined them here so you can easily test the options without making the layout too complicated.
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
