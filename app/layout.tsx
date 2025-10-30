// app/layout.tsx
'use client';

import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ServerLayout from './layout-server';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: '700', subsets: ['latin'], variable: '--font-poppins' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head />
      <body className="font-sans bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <Provider store={store}>
          <ServerLayout>{children}</ServerLayout>
        </Provider>
      </body>
    </html>
  );
}