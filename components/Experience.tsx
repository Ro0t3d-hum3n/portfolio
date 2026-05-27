'use client';
import { useState } from 'react';
import { translations, Lang } from '@/lib/i18n';

export default function Experience({ lang }: { lang: Lang }) {
  const t = translations[lang].experience;
  const [openJob, setOpenJob] = useState<number | null>(0);

  return (
    <section id="experience" className="section" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="accent-line" />
        <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '3rem' }}>
          {t.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {t.jobs.map((job, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
              {/* Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="timeline-dot" />
                {i < t.jobs.length - 1 && (
                  <div className="timeline-line" style={{ flex: 1, minHeight: '40px' }} />
                )}
              </div>

              {/* Card */}
              <div
                className="glass-card"
                style={{
                  flex: 1,
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderColor: openJob === i ? 'rgba(110,231,183,0.3)' : 'var(--border)',
                }}
                onClick={() => setOpenJob(openJob === i ? null : i)}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
                      {job.role}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>{job.company}</span>
                      <span style={{ color: 'var(--text3)', fontSize: '0.8rem' }}>·</span>
                      <span style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>{job.location}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.8rem',
                      color: 'var(--text3)',
                      whiteSpace: 'nowrap',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '100px',
                    }}>
                      {job.period}
                    </span>
                    <svg
                      width="16" height="16" fill="none" stroke="var(--text3)" strokeWidth="2"
                      style={{ transform: openJob === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>

                {/* Expandable bullets */}
                {openJob === i && (
                  <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {job.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--accent)', marginTop: '0.4rem', flexShrink: 0 }}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
