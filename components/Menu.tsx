'use client';

import React from 'react';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import Link from 'next/link';
import { IClassName } from '@/types';
import { ParagraphBase } from './Typography';

const styles = 'ring ring-sky-900 ring-1';

const navigation = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Stocks',
    route: '/stocks',
  },
];

const Menu = ({ className }: IClassName): React.ReactElement => {
  const pathname = usePathname();

  return (
    <nav id="navigation" className={className}>
      {navigation.map(({ name, route }) => (
        <Link
          key={name}
          href={route as Route}
          className={clsx(
            'px-8 py-1.5 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 hover:text-white',
            {
              [styles]: pathname === route,
            },
          )}>
          <ParagraphBase font="light">{name}</ParagraphBase>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
