'use client';
import { useEffect, useState } from 'react';
import { translations, Lang } from '@/lib/i18n';

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="section grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '30%', right: '10%',
        width: '280px', height: '280px',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        opacity: 0.4,
      }} />
      <div style={{
        position: 'absolute', top: '25%', right: '7%',
        width: '360px', height: '360px',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        opacity: 0.2,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Greeting */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: 'var(--accent)',
            fontWeight: 500,
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            ✦ {t.greeting}
          </p>

          {/* Name */}
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, #f0f0f5 0%, #6ee7b7 60%, #34d399 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {t.name}
          </h1>

          {/* Title */}
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 600,
            color: 'var(--text2)',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            {t.title}
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: 'var(--text3)',
            marginBottom: '2.5rem',
            maxWidth: '500px',
          }}>
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">{t.cta}</a>
            <a href="/CV_Habibul_Bashar_DE_April_2026.pdf" download className="btn-outline">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              {t.resume}
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '2.5rem', marginTop: '4rem', flexWrap: 'wrap',
          }}>
            {[
              { val: '5+', label: lang === 'en' ? 'Years Experience' : 'Jahre Erfahrung' },
              { val: '3', label: lang === 'en' ? 'Hall of Fame' : 'Hall of Fame' },
              { val: '7+', label: lang === 'en' ? 'Certifications' : 'Zertifizierungen' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'var(--text3)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        opacity: 0.4,
        animation: 'fadeUp 1s ease 1.5s both',
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, var(--accent))' }} />
      </div>
    </section>
  );
}
