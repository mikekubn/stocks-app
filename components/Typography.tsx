import React from 'react';
import clsx from 'clsx';

export type Fonts = 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

interface ITypographyHeading
  extends React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>> {
  font: Fonts;
}

export const H1 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h1
    className={clsx(className, {
      'text-4xl md:text-6xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </h1>
);

export const H2 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h2
    className={clsx(className, {
      'text-3xl md:text-5xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </h2>
);

export const H3 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h3
    className={clsx(className, {
      'text-2xl md:text-4xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </h3>
);

export const H4 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h4
    className={clsx(className, {
      'text-xl md:text-3xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </h4>
);

export const H5 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h5
    className={clsx(className, {
      'text-base md:text-2xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </h5>
);

interface ITypographyParagraph
  extends React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>> {
  font: Fonts;
}

export const ParagraphExtraSmall = ({
  children,
  className,
  font,
}: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      'text-xs': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-medium': font === 'medium',
      'font-semibold': font === 'semibold',
      'font-bold': font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphSmall = ({
  children,
  className,
  font,
}: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      'text-xs md:text-sm': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-medium': font === 'medium',
      'font-semibold': font === 'semibold',
      'font-bold': font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphBase = ({
  children,
  className,
  font,
}: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      'text-sm md:text-base': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-medium': font === 'medium',
      'font-semibold': font === 'semibold',
      'font-bold': font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphLarge = ({
  children,
  className,
  font,
}: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      'text-base md:text-lg': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-medium': font === 'medium',
      'font-semibold': font === 'semibold',
      'font-bold': font === 'bold',
    })}>
    {children}
  </p>
);

export const Subheading = ({
  children,
  className,
  font,
}: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      'text-xl md:text-3xl': true,
      'font-thin': font === 'thin',
      'font-light': font === 'light',
      'font-normal': font === 'regular',
      'font-semibold': font === 'medium',
      'font-bold': font === 'semibold',
      'font-extrabold': font === 'bold',
    })}>
    {children}
  </p>
);
