'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IClassName } from '@/types';
import { ParagraphLarge } from './Typography';

const Auth = ({ className }: IClassName) => {
  const { status } = useSession();

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  return (
    <div className={className}>
      <button
        className="h-10 w-32 bg-slate-600 rounded-2xl hover:bg-slate-500 shadow-lg"
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
