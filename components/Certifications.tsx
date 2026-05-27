'use client';
import { translations, Lang } from '@/lib/i18n';

export default function Certifications({ lang }: { lang: Lang }) {
  const t = translations[lang].certifications;

  return (
    <section id="certifications" className="section" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="accent-line" />
        <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '3rem' }}>
          {t.title}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {t.items.map((cert, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'rgba(110,231,183,0.1)',
                border: '1px solid rgba(110,231,183,0.2)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1rem',
              }}>
                🛡️
              </div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.5, fontWeight: 500 }}>
                {cert}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
