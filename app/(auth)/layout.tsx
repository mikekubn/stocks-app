import React from 'react';
import { LayoutProps } from '@/types';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/utils/authOptions';

const AuthLayout = async ({ children }: LayoutProps): Promise<React.ReactElement> => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return <section className="h-screen pt-32">{children}</section>;
};

export default AuthLayout;
