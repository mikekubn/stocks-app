import React from 'react';

export interface IClassName {
  className?: string;
}

export type LayoutProps = {
  children?: React.ReactNode;
};

export type StocksProps = {
  stock: string;
  range: number;
  from: string;
  to: string;
};

export interface IStockResult {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
}

export interface IStocksResponse {
  status: 'OK' | 'ERROR' | 'DELAYED';
  error: string;
  ticker: string;
  results: IStockResult[];
}
