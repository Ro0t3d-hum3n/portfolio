'use client';
import { useState } from 'react';
import { translations, Lang } from '@/lib/i18n';

export default function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div className="accent-line" />
        <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '0.75rem' }}>
          {t.title}
        </h2>
        <p style={{ color: 'var(--text3)', marginBottom: '3rem', fontSize: '1rem' }}>{t.subtitle}</p>

        <div className="glass-card" style={{ padding: '2.5rem' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <p style={{ color: 'var(--accent)', fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {t.name}
                </label>
                <input
                  className="form-input"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder={t.name}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {t.email}
                </label>
                <input
                  className="form-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder={t.email}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {t.message}
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder={t.message}
                  style={{ resize: 'vertical' }}
                />
              </div>
              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: '0.875rem' }}>{t.error}</p>
              )}
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    {t.sending}
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    {t.send}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
            { label: 'GitHub', href: 'https://github.com/R0ot3d-hum3n', icon: '🐙' },
            { label: 'HackerOne', href: 'https://hackerone.com', icon: '🔐' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                color: 'var(--text2)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text2)'; }}
            >
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
