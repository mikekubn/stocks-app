'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import Link from 'next/link';
import { IClassName } from '@/types';
import { ParagraphBase } from './Typography';

const styles = 'underline hover:no-underline underline-offset-4';

const Menu = ({ className }: IClassName): React.ReactElement => {
  const pathname = usePathname();

  return (
    <div className={className}>
      <Link
        href="/stocks"
        className={clsx(styles, {
          'text-indigo-200 no-underline': pathname === '/stocks',
        })}>
        <ParagraphBase font="light">Stocks</ParagraphBase>
      </Link>
      <Link
        href="/news"
        className={clsx(styles, {
          'text-indigo-200 no-underline': pathname === '/news',
        })}>
        <ParagraphBase font="light">News</ParagraphBase>
      </Link>
    </div>
  );
};

export default Menu;
