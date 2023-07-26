import React from 'react';
import LayoutContainer from '@/components/Containers';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { H5 } from '@/components/Typography';
import Link from 'next/link';
import Menu from './Menu';
import Auth from './Auth';

const Navigation = (): React.ReactElement => (
  <LayoutContainer size="large" className="hidden lg:flex h-full w-full">
    <menu className="justify-between flex-1 flex items-center">
      <Link href="/">
        <div className="inline-flex items-center gap-2">
          <CurrencyDollarIcon className="w-10 h-10" />
          <H5 font="medium">Stocks</H5>
        </div>
      </Link>
      <Menu />
      <Auth />
    </menu>
  </LayoutContainer>
);

export default Navigation;
