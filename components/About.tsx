'use client';
import { translations, Lang } from '@/lib/i18n';

export default function About({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section id="about" className="section" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="accent-line" />
            <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>
              {t.about.title}
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              {t.about.bio}
            </p>

            {/* Education */}
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {t.education.title}
              </h3>
              {t.education.items.map((e, i) => (
                <div key={i} className="glass-card" style={{ padding: '1rem 1.25rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{e.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: '0.25rem' }}>{e.school}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text3)', marginTop: '0.15rem' }}>{e.location} · {e.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Contact info */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Contact Info
              </h3>
              {[
                { icon: '📍', val: t.about.location },
                { icon: '📞', val: t.about.phone },
                { icon: '✉️', val: t.about.email },
                { icon: '🔗', val: 'linkedin.com/in/habibulbashar' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: '1rem', opacity: 0.8 }}>{c.icon}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>{c.val}</span>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {t.awards.title}
              </h3>
              {t.awards.items.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem 0', borderBottom: i < t.awards.items.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '1px' }}>🏆</span>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)' }}>{a.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text3)', marginTop: '0.15rem' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
