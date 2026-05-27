import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Habibul Bashar Bappi – IT Support & Cybersecurity Specialist',
  description: 'Portfolio of Habibul Bashar Bappi, IT Support and Cybersecurity Specialist based in Krefeld, Germany.',
  keywords: ['IT Support', 'Cybersecurity', 'Penetration Testing', 'Network Engineer', 'Krefeld', 'Germany'],
  openGraph: {
    title: 'Habibul Bashar Bappi – IT Support & Cybersecurity',
    description: 'IT Support Specialist with 5+ years of experience. Available for opportunities in Germany.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
