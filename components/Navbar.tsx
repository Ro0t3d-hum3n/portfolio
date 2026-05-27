'use client';
import { useState, useEffect } from 'react';
import { translations, Lang } from '@/lib/i18n';

export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#about', label: t.about },
    { href: '#experience', label: t.experience },
    { href: '#skills', label: t.skills },
    { href: '#certifications', label: t.certifications },
    { href: '#contact', label: t.contact },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          padding: '1rem 2rem',
          transition: 'all 0.3s',
          background: scrolled ? 'rgba(14,15,20,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            HBB<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              style={{
                padding: '0.35rem 0.85rem',
                background: 'rgba(110,231,183,0.08)',
                border: '1px solid rgba(110,231,183,0.2)',
                borderRadius: '100px',
                color: 'var(--accent)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(110,231,183,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(110,231,183,0.08)')}
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'none' }}
              className="show-mobile"
              aria-label="Open menu"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="19" y2="6" /><line x1="3" y1="12" x2="19" y2="12" /><line x1="3" y1="18" x2="19" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text2)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
