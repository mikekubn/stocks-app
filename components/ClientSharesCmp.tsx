'use client';

import React from 'react';
import { useStocks } from '@/hooks/useStocks';
import { DateTime } from 'luxon';

import {
  H3,
  ParagraphBase,
  ParagraphExtraSmall,
  ParagraphLarge,
  ParagraphSmall,
} from './Typography';

const minDate = '2023-01-01';

const ClientSharesCmp = () => {
  const currentDate = DateTime.now().toFormat('yyyy-MM-dd');
  const [share, setShare] = React.useState('AAPL');
  const [dateTo, setDateTo] = React.useState(currentDate);
  const [stockData, setStockData] = React.useState({ share, dateTo });

  const { data, isLoading } = useStocks({
    range: 1,
    stock: stockData.share,
    from: minDate,
    to: stockData.dateTo,
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setStockData({ share, dateTo });
  };

  return (
    <section className="text-slate-800 flex flex-1 flex-col items-center justify-center">
      <H3 font="semibold" className="text-slate-800">
        Find your share
      </H3>
      <div className="mt-10 text-center">
        <ParagraphBase font="regular">
          Status of request: {isLoading ? 'LOADING...' : data?.status}
        </ParagraphBase>
        <ParagraphExtraSmall font="bold" className="text-red-500">
          Requests to backend are limited to 5 per minute.
        </ParagraphExtraSmall>
        {data?.status === 'ERROR' && (
          <ParagraphExtraSmall className="my-4 text-red-700" font="bold">
            {data?.error}
          </ParagraphExtraSmall>
        )}
      </div>
      <div className="my-10 flex flex-1 flex-col items-end md:flex-row gap-4">
        <div className="flex flex-col">
          <label htmlFor="share">
            <ParagraphSmall font="light">Share:</ParagraphSmall>
          </label>
          <input
            id="share"
            value={share}
            onChange={(e) => setShare(e.currentTarget.value)}
            className="h-10 w-48 p-2 border border-slate-800 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">
            <ParagraphSmall font="light">Date to:</ParagraphSmall>
          </label>
          <input
            id="date"
            type="date"
            min={minDate}
            max={currentDate}
            data-date-format="yyyy-mm-dd"
            value={dateTo}
            onChange={(e) => setDateTo(e.currentTarget.value)}
            className="h-10 w-48 p-2 border border-slate-800 rounded-lg"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="h-10 w-48 p-2 border border-slate-800 rounded-lg hover:bg-green-200">
          Submit
        </button>
      </div>
      <div className="inline-flex">
        <ParagraphLarge font="regular">Your selected share is:</ParagraphLarge>
        <ParagraphLarge font="bold" className="ml-2 underline">
          {data?.ticker}
        </ParagraphLarge>
      </div>
    </section>
  );
};

export default ClientSharesCmp;
