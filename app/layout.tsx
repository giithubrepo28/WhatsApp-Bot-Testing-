import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp Auto Response Bot',
  description: 'Free-first WhatsApp auto response bot with demo mode.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
