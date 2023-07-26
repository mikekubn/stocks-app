'use client';

import React from 'react';

import { SessionProvider } from 'next-auth/react';
import { LayoutProps } from '@/types';

const Providers = ({ children }: LayoutProps) => <SessionProvider>{children}</SessionProvider>;

export default Providers;
