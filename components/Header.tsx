'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="container header-row">
        <Logo />
        <nav className="nav" aria-label="Principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a href="#contacto" className="btn btn-primary btn-sm">
          Contáctanos
          <span className="arr" aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
