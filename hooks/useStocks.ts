'use client';

import { stocks } from '@/utils/service';
import useSWR from 'swr';
import { IStocksResponse, StocksProps } from '@/types';

export const useStocks = ({
  stock,
  range,
  from,
  to,
}: StocksProps): {
  data?: IStocksResponse;
  error: Error;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR(
    `${stock}-${range}-${from}-${to}`,
    () => stocks({ stock, range, from, to }),
    {
      refreshInterval: 240000,
    },
  );

  return { data, error, isLoading };
};
