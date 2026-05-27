'use client';
import { useState, useEffect } from 'react';
import { Lang } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Ambient blobs */}
      <div className="blob1" />
      <div className="blob2" />

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
