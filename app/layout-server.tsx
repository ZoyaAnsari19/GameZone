// app/layout-server.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plato – Multiplayer Games with Chat',
  description: 'Play 50+ online multiplayer mini-games with friends. Ad-free, social, and fun!',
  openGraph: {
    title: 'Plato – Play with Friends',
    description: '50+ games, chat, no ads.',
    url: 'https://platoapp.com',
    images: ['/og-image.jpg'],
  },
};

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}