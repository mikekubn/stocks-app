import clsx from 'clsx';
import React, { ElementRef } from 'react';

type Size = {
  large: 'lg';
  medium: 'md';
  small: 'sm';
};

type CustomSection = Partial<ElementRef<'section'>>;

interface IContainers extends Omit<CustomSection, 'children'> {
  size?: keyof Size;
  children: React.ReactNode;
}

const LayoutContainer = ({ size, children, className }: IContainers): React.ReactElement => (
  <section
    className={clsx(className, {
      'w-full px-4 lg:px-8': size === 'large',
      'max-w-7xl mx-auto': size === 'medium',
      'max-w-6xl mx-auto': size === 'small',
    })}>
    {children}
  </section>
);

export default LayoutContainer;
