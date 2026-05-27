'use client';
import { translations, Lang } from '@/lib/i18n';

export default function Skills({ lang }: { lang: Lang }) {
  const t = translations[lang].skills;

  return (
    <section id="skills" className="section" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="accent-line" />
        <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '3rem' }}>
          {t.title}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {t.categories.map((cat, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.75rem',
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                {cat.name}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((item, j) => (
                  <span key={j} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
