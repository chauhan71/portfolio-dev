import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IconMail, 
  IconCopy, 
  IconCheck, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconSend, 
  IconClock,
  IconMapPin
} from '@tabler/icons-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Initiate Dialogue"
          title="Let's Build Something"
          highlightedText="Exceptional Together"
          description="Open to senior frontend engineering positions, mobile development leadership, and architecture consulting."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Communication Card */}
          <div>
            <Card variant="bordered" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Badge variant="primary" style={{ marginBottom: '1rem' }}>
                  Frontend-Operated Communication
                </Badge>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Direct Professional Inquiries
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Have an open role, an EdTech project, or need clean, high-performance UI systems? Reach out directly via email or copy the credentials below.
                </p>

                {/* Email Box with Copy Button */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: 'var(--color-primary)' }}>
                      <IconMail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Email</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    icon={copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>

                {/* Quick Availability Meta */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconClock size={18} style={{ color: 'var(--color-primary)' }} />
                    <span>Response turnaround: <strong>Within 24 business hours</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconMapPin size={18} style={{ color: 'var(--color-accent)' }} />
                    <span>Location availability: <strong>{PERSONAL_INFO.location}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button
                  href={`mailto:${PERSONAL_INFO.email}`}
                  variant="primary"
                  icon={<IconSend size={16} />}
                >
                  Compose Email
                </Button>
                <Button
                  href="https://github.com"
                  variant="secondary"
                  icon={<IconBrandGithub size={18} />}
                >
                  GitHub
                </Button>
                <Button
                  href="https://linkedin.com"
                  variant="secondary"
                  icon={<IconBrandLinkedin size={18} />}
                >
                  LinkedIn
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Interactive Client-Side Inquiry Box */}
          <div>
            <Card variant="default" padding="lg">
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                Quick Message Simulation
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Fully operated on the client side with instant state confirmation.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-primary-light)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto',
                    }}
                  >
                    <IconCheck size={26} stroke={3} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Message Prepared!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you, {formData.name}. Since this is a pure frontend demonstration, you can also launch your local mail client with one click below:
                  </p>
                  <Button
                    href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    variant="primary"
                    icon={<IconSend size={16} />}
                  >
                    Launch Mail Client
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSimulateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / Engineering Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-main)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-main)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Project Scope or Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your web portal or mobile app requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-strong)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-main)',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<IconSend size={18} />}
                  >
                    Send Inquiry Note
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
