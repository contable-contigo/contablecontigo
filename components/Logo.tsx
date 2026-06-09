export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="31" rx="7" fill="var(--primary)" />
      <path
        d="M11.5 11.5a4.5 4.5 0 1 0 0 9"
        fill="none"
        stroke="var(--bg)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20.5 11.5a4.5 4.5 0 1 0 0 9"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Contable Contigo — inicio">
      <Mark size={30} />
      <span className="logo-text">
        <span className="logo-name">Contable Contigo</span>
        <span className="logo-tag">Contadores · Chile</span>
      </span>
    </a>
  );
}
