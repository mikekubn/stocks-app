import React from 'react';
import LayoutContainer from '@/components/Containers';
import Menu from './Menu';
import Auth from './Auth';
import Logo from './Logo';

const Navigation = (): React.ReactElement => (
  <LayoutContainer size="large" className="hidden md:flex h-full w-full">
    <menu className="flex flex-row flex-1 items-center">
      <Logo className="w-1/3  flex flex-1 justify-start" />
      <Menu className="w-1/3 flex flex-1 justify-center gap-6" />
      <Auth className="w-1/3 flex flex-1 justify-end" />
    </menu>
  </LayoutContainer>
);

export default Navigation;
