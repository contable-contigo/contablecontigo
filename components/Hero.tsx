'use client';

import { useState, useEffect, useRef } from 'react';

function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf: number;
    let start: number | undefined;
    const dur = 1400;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  const fmt = val.toLocaleString('es-CL', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}{fmt}{suffix}
    </span>
  );
}

function BalanceChart() {
  const pts = [22, 30, 28, 36, 33, 44, 41, 52, 48, 58, 55, 64];
  const max = Math.max(...pts);
  const path = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * 100;
      const y = 100 - (p / max) * 100;
      return (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
    })
    .join(' ');
  const area = path + ' L100 100 L0 100 Z';

  return (
    <svg
      className="bc-spark"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bcg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#bcg)" />
      <path
        d={path}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function BalanceCard() {
  const lines = [
    { label: 'Ingresos del mes', val: '12.480.500', tone: 'pos' },
    { label: 'Gastos deducibles', val: '3.215.200', tone: 'neg' },
    { label: 'IVA débito', val: '2.371.295', tone: 'neg' },
    { label: 'Crédito fiscal', val: '611.890', tone: 'pos' },
  ];

  return (
    <div
      className="balance-card"
      role="img"
      aria-label="Resumen contable mensual ilustrativo"
    >
      <div className="bc-head">
        <div className="bc-eyebrow">
          <span className="dot" />
          Libro mayor · Mayo 2026
        </div>
        <div className="bc-status">Cuadrado</div>
      </div>
      <div className="bc-rows">
        {lines.map((l) => (
          <div className="bc-row" key={l.label}>
            <span className="bc-label">{l.label}</span>
            <span className="bc-dots" aria-hidden="true" />
            <span className={'bc-val tone-' + l.tone}>
              <span className="cl">$</span>
              {l.val}
            </span>
          </div>
        ))}
      </div>
      <div className="bc-foot">
        <div>
          <div className="bc-foot-k">Resultado neto</div>
          <div className="bc-foot-v">
            <span className="cl">$</span>
            <Counter to={7505895} />
          </div>
        </div>
        <div className="bc-pill">
          <span className="bc-pill-dot" />
          F29 listo para enviar
        </div>
      </div>
      <BalanceChart />
    </div>
  );
}

function RuledBackground() {
  return (
    <div className="ruled" aria-hidden="true">
      <div className="ruled-lines" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display" style={{ fontSize: '85px', width: '575px' }}>
            Contabilidad,<br />
            <em>sin complicaciones.</em>
          </h1>
          <p className="lede">
            Acompañamos a personas naturales, emprendimientos y empresas
            establecidas con asesoría tributaria, contabilidad mensual y
            cumplimiento ante el SII — claro, a tiempo y con trato cercano.
          </p>
          <div className="cta-row">
            <a href="#contacto" className="btn btn-primary">
              Contáctanos
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
          </div>
        </div>
        <div className="hero-visual">
          <BalanceCard />
          <div className="hero-note">
            <span className="mono">$ 0,00</span> margen para errores en SII.
          </div>
        </div>
      </div>
      <RuledBackground />
    </section>
  );
}
