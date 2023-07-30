'use client';

import { useStocks } from '@/hooks/useStocks';
import { H3, ParagraphLarge } from './Typography';

const StocksCmp = () => {
  const { data, isLoading, error } = useStocks({
    stock: 'AAPL',
    range: 1,
    from: '2023-06-01',
    to: '2023-07-30',
  });

  console.log('data', data);
  console.log('isLoading', isLoading);

  return (
    <section className="text-slate-800">
      <H3 font="semibold" className="text-slate-800">
        Find your stock
      </H3>
      <div className="h-20" />
      <div className="inline-flex">
        <ParagraphLarge font="regular">Yout selected stock is:</ParagraphLarge>
        <ParagraphLarge font="bold" className="ml-2 underline">
          {data?.ticker}
        </ParagraphLarge>
      </div>
    </section>
  );
};

export default StocksCmp;
