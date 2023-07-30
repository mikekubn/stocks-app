'use client';

import React from 'react';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IClassName } from '@/types';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { navigation } from './Menu';
import { ParagraphBase } from './Typography';

const MobileMenu = ({ className }: IClassName): React.ReactElement => {
  const pathname = usePathname();
  return (
    <section className={className}>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>Menu</Menu.Button>
        <Menu.Items className="absolute left-0 mt-2 w-32 bg-white border border-slate-800 rounded-lg p-2">
          {navigation.map(({ name, route }) => (
            <Menu.Item key={name}>
              <Link
                href={route as Route}
                className={clsx('bg-blue-500', {
                  underline: pathname === route,
                })}>
                <ParagraphBase font="light" className="mb-1.5">
                  {name}
                </ParagraphBase>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </section>
  );
};

export default MobileMenu;
