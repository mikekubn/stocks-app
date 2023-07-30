'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IClassName } from '@/types';
import clsx from 'clsx';
import { ParagraphLarge } from './Typography';

const Auth = ({ className }: IClassName) => {
  const { status } = useSession();

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  return (
    <div className={className}>
      <button
        className={clsx('h-8 w-24 md:h-10 md:w-32 rounded-lg text-white shadow-lg', {
          'bg-sky-600 hover:bg-sky-700': !isAuthenticated,
          'bg-rose-600 hover:bg-rose-700': isAuthenticated,
        })}
        onClick={(e) => {
          e.preventDefault();

          if (isAuthenticated) {
            signOut();
          } else {
            signIn();
          }
        }}>
        {isLoading ? (
          <ParagraphLarge font="light">Loading...</ParagraphLarge>
        ) : (
          <ParagraphLarge font="light">{isAuthenticated ? 'Sign Out' : 'Sign In'}</ParagraphLarge>
        )}
      </button>
    </div>
  );
};

export default Auth;
