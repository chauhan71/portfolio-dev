import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconCheck,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconAlertCircle,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import { SectionHeader } from '../layout';
import { Card, Button } from '../components/ui';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [whatsappMsg, setWhatsappMsg] = useState(
    'Hi! I checked your portfolio and would like to connect regarding a frontend opportunity.'
  );

  const quickPrompts = [
    { label: '💼 Job Opportunity', text: 'Hi! We have a frontend engineering opening and would love to connect.' },
    { label: '👋 Quick Hello', text: 'Hi! Just explored your portfolio and wanted to reach out.' },
  ];

  const handleOpenWhatsapp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const rawNumber =
      (import.meta.env.VITE_WHATSAPP_NUMBER as string) ||
      PERSONAL_INFO.whatsapp ||
      '+919999999999';
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(
      whatsappMsg.trim() || 'Hi! I visited your portfolio and would like to connect.'
    );
    window.open(`https://wa.me/${cleanNumber}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const accessKey =
        (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) ||
        '3198652d-2293-48e9-87ba-26b365b7a557';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `Portfolio Inquiry from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Unable to send message. Please try again or email me directly.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please check your connection or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <SectionHeader
          badge="Initiate Dialogue"
          title="Let's Build Something"
          highlightedText="Exceptional Together"
          description="Open to frontend engineering positions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct WhatsApp Messaging Card */}
          <div>
            <Card
              variant="bordered"
              padding="lg"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header Badge & Online Indicator */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      color: '#25D366',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#25D366',
                        display: 'inline-block',
                        boxShadow: '0 0 10px #25D366',
                      }}
                    />
                    Instant WhatsApp
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Direct Mobile Reach
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconBrandWhatsapp size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>
                      Chat on WhatsApp
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      Quick questions, contracts, or consultations
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '1rem 0 1.25rem 0' }}>
                  Prefer an instant reply over email? You can draft a message below or pick a starter—it will open directly in WhatsApp on your phone or desktop without needing to save contacts.
                </p>

                {/* Quick Topic Chips */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.45rem', letterSpacing: '0.04em' }}>
                    QUICK MESSAGE STARTERS:
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {quickPrompts.map((item) => {
                      const isSelected = whatsappMsg === item.text;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setWhatsappMsg(item.text)}
                          style={{
                            backgroundColor: isSelected ? 'rgba(37, 211, 102, 0.18)' : 'var(--bg-app)',
                            color: isSelected ? '#25D366' : 'var(--text-secondary)',
                            border: `1px solid ${isSelected ? 'rgba(37, 211, 102, 0.45)' : 'var(--border-subtle)'}`,
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.35rem 0.7rem',
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            fontWeight: 500,
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Textarea for WhatsApp */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Message to Send:
                  </label>
                  <textarea
                    rows={3}
                    value={whatsappMsg}
                    onChange={(e) => setWhatsappMsg(e.target.value)}
                    placeholder="Type what you'd like to ask or discuss..."
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-strong)',
                      backgroundColor: 'var(--bg-app)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      resize: 'vertical',
                      fontSize: '0.88rem',
                      lineHeight: 1.45,
                    }}
                  />
                </div>
              </div>

              {/* Action Button & Profiles */}
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button
                    onClick={handleOpenWhatsapp}
                    size="lg"
                    radius="lg"
                    icon={<IconBrandWhatsapp size={22} />}
                    style={{
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.65rem 1.6rem',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                      fontWeight: 600,
                      fontSize: '0.96rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      cursor: 'pointer',
                    }}
                  >
                    Send via WhatsApp
                  </Button>
                </div>

                {/* Social Profiles footer */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.85rem',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Other channels:</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button
                      href="https://github.com/chauhan71"
                      variant="ghost"
                      size="sm"
                      icon={<IconBrandGithub size={16} />}
                    >
                      GitHub
                    </Button>
                    <Button
                      href="https://www.linkedin.com/feed/"
                      variant="ghost"
                      size="sm"
                      icon={<IconBrandLinkedin size={16} />}
                    >
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Interactive Client-Side Inquiry Box */}
          <div>
            <Card variant="default" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                Send Direct Inquiry
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Fill in the fields below to dispatch a message directly to my inbox.
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
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Message Delivered!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: 'var(--text-main)' }}>{formData.name}</strong>! Your inquiry has been sent directly to my personal email inbox. I will review it and get back to you shortly.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                    >
                      Send Another Note
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
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
                      name="message"
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

                  {errorMessage && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        color: '#ef4444',
                        fontSize: '0.85rem',
                      }}
                    >
                      <IconAlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    icon={<IconSend size={18} />}
                  >
                    {isSubmitting ? 'Dispatching Message...' : 'Send Inquiry Note'}
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
