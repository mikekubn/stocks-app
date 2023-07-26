import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { LayoutProps } from '@/types';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: LayoutProps): Promise<React.ReactElement> => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <header className="bg-indigo-700 text-white h-20 fixed z-[101] top-0 w-full">
          <Navigation />
        </header>
        <main>{children}</main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
