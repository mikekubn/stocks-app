'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { H5 } from '@/components/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { IClassName } from '@/types';

const Logo = ({ className }: IClassName) => {
  const { data } = useSession();

  return (
    <Link href="/" className={className}>
      <div className="inline-flex items-center gap-4">
        {data?.user ? (
          <>
            <Image
              src={
                data?.user?.image ??
                'https://res.cloudinary.com/dctc6iyms/image/upload/v1690406232/man_318-233556.jpg_hsequo.avif'
              }
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <H5 font="medium">{data?.user?.name}</H5>
          </>
        ) : (
          <>
            <CurrencyDollarIcon className="w-10 h-10" />
            <H5 font="medium">Stocks</H5>
          </>
        )}
      </div>
    </Link>
  );
};

export default Logo;
