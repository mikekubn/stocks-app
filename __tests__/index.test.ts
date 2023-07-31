/* globals describe, expect, it */

import { getDateFromMilis } from '@/utils/date';

const milliseconds = [
  { milis: 1588678800000, result: 'May 5, 20' },
  { milis: 2588678800000, result: 'Jan 12, 52' },
  { milis: 198678800000, result: 'Apr 18, 76' },
];

describe('Unit tests', () => {
  milliseconds.forEach(({ milis, result }) => {
    it(`date: ${result} from: ${milis} milliseconds`, () => {
      const date = getDateFromMilis(milis);

      expect(date).toEqual(result);
    });
  });
});
