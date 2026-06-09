export const PALETTES = {
  navy: {
    name: "Navy clásico",
    ink: "oklch(0.22 0.04 250)",
    bg: "oklch(0.972 0.008 85)",
    paper: "oklch(0.945 0.012 85)",
    primary: "oklch(0.32 0.09 250)",
    primaryHi: "oklch(0.40 0.11 250)",
    accent: "oklch(0.78 0.10 75)",
    muted: "oklch(0.55 0.02 250)",
    line: "oklch(0.85 0.012 250)",
  },
  ocean: {
    name: "Océano",
    ink: "oklch(0.22 0.04 235)",
    bg: "oklch(0.972 0.008 85)",
    paper: "oklch(0.945 0.018 220)",
    primary: "oklch(0.36 0.10 235)",
    primaryHi: "oklch(0.45 0.12 235)",
    accent: "oklch(0.78 0.10 60)",
    muted: "oklch(0.55 0.02 235)",
    line: "oklch(0.85 0.014 235)",
  },
  ink: {
    name: "Tinta",
    ink: "oklch(0.18 0.02 260)",
    bg: "oklch(0.965 0.006 80)",
    paper: "oklch(0.93 0.008 80)",
    primary: "oklch(0.24 0.06 260)",
    primaryHi: "oklch(0.34 0.08 260)",
    accent: "oklch(0.74 0.13 50)",
    muted: "oklch(0.50 0.015 260)",
    line: "oklch(0.84 0.008 260)",
  },
};

export type PaletteKey = keyof typeof PALETTES;

export const SERVICES = {
  personas: {
    label: "Personas naturales",
    sub: "Trabajadores independientes, honorarios y rentas.",
    items: [
      { k: "doc", t: "Operación Renta", d: "Declaración anual de impuesto a la renta, propuesta SII y devoluciones." },
      { k: "receipt", t: "Boletas de honorarios", d: "Emisión, retención y registro mensual ante el SII." },
      { k: "shield", t: "Asesoría tributaria personal", d: "Beneficios, APV, créditos hipotecarios y planificación anual." },
      { k: "trend", t: "Inversiones y rentas pasivas", d: "Tributación de arriendos, dividendos y operaciones en bolsa." },
    ],
  },
  nuevas: {
    label: "Empresas nuevas",
    sub: "Emprendimientos y sociedades recién formadas.",
    items: [
      { k: "spark", t: "Inicio de actividades", d: "Constitución, registro SII, obtención de RUT y régimen tributario." },
      { k: "bolt", t: "Facturación electrónica", d: "Configuración de boleta y factura electrónica, certificado digital y portal SII." },
      { k: "book", t: "Contabilidad inicial", d: "Plan de cuentas, apertura de libros y registro contable los primeros 12 meses." },
    ],
  },
  establecidas: {
    label: "Empresas establecidas",
    sub: "Pymes y empresas en operación continua.",
    items: [
      { k: "calendar", t: "Contabilidad mensual", d: "Registro, conciliaciones bancarias, libros y estados financieros mensuales." },
      { k: "percent", t: "IVA y F29", d: "Declaración mensual de IVA, PPM y retenciones — sin atrasos." },
      { k: "people", t: "Remuneraciones", d: "Liquidaciones, finiquitos, AFP, Isapre, mutual y libro de remuneraciones." },
      { k: "check", t: "Asesoría tributaria continua", d: "Defensa ante fiscalizaciones, planificación y cierre tributario anual." },
    ],
  },
} as const;

export type ServiceTab = keyof typeof SERVICES;

export const ICON_PATHS: Record<string, string> = {
  doc: "M7 3h7l4 4v14H7V3Z M14 3v4h4 M9.5 12h6 M9.5 15h6 M9.5 18h4",
  receipt: "M6 3v18l2-1.4 2 1.4 2-1.4 2 1.4 2-1.4 2 1.4V3H6Z M9 8h6 M9 12h6 M9 16h4",
  shield: "M12 3l7 2.5v6c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5v-6L12 3Z M9 12l2 2 4-4",
  trend: "M3 17l5-5 3 3 4-5 3 3 3-3 M16 7h4v4",
  spark: "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.5 5.5l2.5 2.5 M16 16l2.5 2.5 M5.5 18.5l2.5-2.5 M16 8l2.5-2.5",
  branch: "M6 4v6c0 2 2 4 4 4h8 M18 4v6c0 2-2 4-4 4 M6 20a2 2 0 100-4 2 2 0 000 4Z M18 8a2 2 0 100-4 2 2 0 000 4Z M6 8a2 2 0 100-4 2 2 0 000 4Z",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8Z",
  book: "M4 4.5C4 3.7 4.7 3 5.5 3H19v15H5.5C4.7 18 4 17.3 4 16.5v-12Z M4 16.5C4 17.3 4.7 18 5.5 18H19v3H5.5C4.7 21 4 20.3 4 19.5v-3Z M8 7h7 M8 10h7",
  calendar: "M4 6h16v15H4V6Z M4 10h16 M8 3v4 M16 3v4 M9 14h2 M14 14h2 M9 17h2",
  percent: "M5 19L19 5 M8 9a2 2 0 100-4 2 2 0 000 4Z M16 19a2 2 0 100-4 2 2 0 000 4Z",
  people: "M9 11a3 3 0 100-6 3 3 0 000 6Z M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6 M17 11a3 3 0 100-6 3 3 0 000 6Z M15 14c3 0 6 1.8 6 5",
  check: "M12 3v18 M9 21h6 M6 7h12 M6 7l-2 5 M6 7l2 5 M4 12h4 M18 7l-2 5 M18 7l2 5 M16 12h4",
};
