import { DateTime } from 'luxon';

export const getCurrentDate = (f: string) => DateTime.now().toFormat(f);
export const getDateFromMilis = (t: number) =>
  DateTime.fromMillis(t).toLocaleString({ year: '2-digit', month: 'short', day: 'numeric' });
