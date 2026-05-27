'use client';
import { translations, Lang } from '@/lib/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'var(--text3)' }}>
        © {new Date().getFullYear()} Habibul Bashar Bappi. {t.rights}
      </p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.35rem', opacity: 0.6 }}>
        Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  );
}
