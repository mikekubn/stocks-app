import React from 'react';
import LayoutContainer from '@/components/Containers';
import Menu from './Menu';
import Auth from './Auth';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navigation = (): React.ReactElement => (
  <LayoutContainer size="large" className="flex h-full w-full">
    <LayoutContainer size="medium" className="flex flex-1">
      <menu className="flex flex-row flex-1 items-center">
        <Logo className="w-1/3 flex flex-1 justify-start" />
        <Menu className="hidden md:flex w-1/3 flex-1 justify-center gap-6" />
        <MobileMenu className="flex relative md:hidden w-1/3 flex-1 justify-center" />
        <Auth className="w-1/3 flex flex-1 justify-end" />
      </menu>
    </LayoutContainer>
  </LayoutContainer>
);

export default Navigation;
