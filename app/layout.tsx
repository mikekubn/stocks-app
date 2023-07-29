import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { LayoutProps } from '@/types';
import Image from 'next/image';
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
        <header className="bg-slate-100/80 text-sky-900 h-20 fixed z-[101] top-0 w-full backdrop-blur-2xl">
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className="h-20 flex flex-row justify-center items-center">
          <a
            className="hover:underline inline-flex gap-3"
            href="https://github.com/mikekubn/stocks-app"
            target="_blank">
            <Image
              alt="github"
              height={24}
              width={24}
              src="https://res.cloudinary.com/dctc6iyms/image/upload/v1662364848/career_page/assets/github-144_ltj43s.png"
            />
            GitHub - stocks-app
          </a>
        </footer>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
