import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
  Instrument_Serif,
  Newsreader,
  DM_Sans,
  JetBrains_Mono,
  Cormorant_Garamond,
  DM_Serif_Display,
} from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';

const Panel = dynamic(() => import('@/components/Panel'), { ssr: false });

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const newsreader = Newsreader({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Contable Contigo — Contabilidad, sin complicaciones',
  description:
    'Contadores en Chile. Asesoría tributaria y contabilidad para personas naturales, empresas nuevas y establecidas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [
    instrumentSerif.variable,
    newsreader.variable,
    dmSans.variable,
    jetbrainsMono.variable,
    cormorantGaramond.variable,
    dmSerifDisplay.variable,
  ].join(' ');

  return (
    <html lang="es-CL" className={fontClasses}>
      <head>
        <style>{`
          :root {
            --display-font: var(--font-instrument-serif), "Newsreader", Georgia, serif;
            --sans: var(--font-dm-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            --mono: var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
          }
        `}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Panel />
      </body>
    </html>
  );
}
