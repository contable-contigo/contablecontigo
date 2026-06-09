'use client';

import { useState, useEffect } from 'react';
import { PALETTES, type PaletteKey } from '@/lib/constants';

type TweakState = {
  palette: PaletteKey;
  displaySerif: string;
};

const DEFAULTS: TweakState = {
  palette: 'navy',
  displaySerif: 'Instrument Serif',
};

const SERIF_OPTIONS = [
  { value: 'Instrument Serif', label: 'Instrument Serif' },
  { value: 'Newsreader', label: 'Newsreader' },
  { value: 'Cormorant Garamond', label: 'Cormorant' },
  { value: 'DM Serif Display', label: 'DM Serif' },
];

function applyPalette(p: (typeof PALETTES)[PaletteKey]) {
  const r = document.documentElement;
  r.style.setProperty('--ink', p.ink);
  r.style.setProperty('--bg', p.bg);
  r.style.setProperty('--paper', p.paper);
  r.style.setProperty('--primary', p.primary);
  r.style.setProperty('--primary-hi', p.primaryHi);
  r.style.setProperty('--accent', p.accent);
  r.style.setProperty('--muted', p.muted);
  r.style.setProperty('--line', p.line);
}

export default function Panel() {
  const [t, setT] = useState<TweakState>(DEFAULTS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    applyPalette(PALETTES[t.palette] || PALETTES.navy);
    document.documentElement.style.setProperty(
      '--display-font',
      `"${t.displaySerif}", "Newsreader", Georgia, serif`
    );
  }, [t.palette, t.displaySerif]);

  const set = <K extends keyof TweakState>(k: K, v: TweakState[K]) =>
    setT((prev) => ({ ...prev, [k]: v }));

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: 22,
          left: 22,
          zIndex: 40,
          background: 'var(--paper)',
          border: '1px solid var(--line)',
          borderRadius: 999,
          padding: '8px 14px',
          fontFamily: 'var(--mono)',
          fontSize: 12,
          cursor: 'pointer',
          color: 'var(--muted)',
          boxShadow: '0 4px 12px -4px rgba(0,0,0,0.15)',
        }}
        aria-label="Tweaks"
      >
        Tweaks
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 64,
            left: 22,
            zIndex: 40,
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            borderRadius: 14,
            padding: 20,
            minWidth: 220,
            boxShadow: '0 16px 40px -12px rgba(0,0,0,0.2)',
            fontFamily: 'var(--sans)',
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
                marginBottom: 8,
              }}
            >
              Paleta
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(PALETTES) as PaletteKey[]).map((k) => (
                <button
                  key={k}
                  onClick={() => set('palette', k)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 999,
                    border: '1px solid var(--line)',
                    background: t.palette === k ? 'var(--primary)' : 'transparent',
                    color: t.palette === k ? 'var(--bg)' : 'var(--ink)',
                    fontFamily: 'var(--sans)',
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  {PALETTES[k].name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
                marginBottom: 8,
              }}
            >
              Tipografía display
            </div>
            <select
              value={t.displaySerif}
              onChange={(e) => set('displaySerif', e.target.value)}
              style={{
                width: '100%',
                fontFamily: 'var(--sans)',
                fontSize: 14,
                color: 'var(--ink)',
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: 8,
                padding: '8px 10px',
              }}
            >
              {SERIF_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
