import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <Logo />
        <div className="foot-meta">
          <span>© 2026 Contable Contigo SpA</span>
          <span className="dim">·</span>
          <a href="#">Política de privacidad</a>
          <span className="dim">·</span>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
}
