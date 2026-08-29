import './globals.css';
import './polish.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elaria — Worlds Beyond the Page',
  description: 'A premium anime-fantasy reading experience for dreamers and story lovers.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
