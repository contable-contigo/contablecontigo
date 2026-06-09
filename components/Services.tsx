'use client';

import { useState } from 'react';
import { SERVICES, ICON_PATHS, type ServiceTab } from '@/lib/constants';

function Icon({ name }: { name: string }) {
  const d = ICON_PATHS[name];
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d ? <path d={d} /> : null}
    </svg>
  );
}

export function Services() {
  const [tab, setTab] = useState<ServiceTab>('personas');
  const data = SERVICES[tab];

  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="services-head">
          <div>
            <div className="section-eyebrow">
              <span>02</span> Qué ofrecemos
            </div>
            <h2 className="section-title">
              Servicios pensados para <em>cada etapa</em>.
            </h2>
          </div>
          <div className="services-tabs" role="tablist" aria-label="Tipo de cliente">
            {(Object.entries(SERVICES) as [ServiceTab, typeof SERVICES[ServiceTab]][]).map(([k, v]) => (
              <button
                key={k}
                role="tab"
                aria-selected={tab === k}
                className={'tab' + (tab === k ? ' is-active' : '')}
                onClick={() => setTab(k)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <p className="services-sub">{data.sub}</p>
        <div className="services-grid">
          {data.items.map((it, i) => (
            <article className="service-card" key={tab + i}>
              <div className="sc-k">
                <Icon name={it.k} />
              </div>
              <h3 className="sc-t">{it.t}</h3>
              <p className="sc-d">{it.d}</p>
              <div className="sc-foot">
                <span className="sc-cta">Consultar</span>
                <span className="arr" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
