import { IStocksResponse, StocksProps } from '@/types';

export const stocks = async ({ stock, range, from, to }: StocksProps): Promise<IStocksResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_POLYGON_API_KEY as string;
  const url = `https://api.polygon.io/v2/aggs/ticker/${stock}/range/${range}/day/${from}/${to}`;
  const queryParams = new URLSearchParams({
    apiKey,
  });

  const promise = await fetch(`${url}?${queryParams}`, {
    method: 'GET',
  });

  const response = await promise.json().then((data) => data);

  return response;
};
