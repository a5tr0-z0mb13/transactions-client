import { GetSumPipe } from './get-sum.pipe';

import { transactions } from '../spec-data';

describe('GetSumPipe', () => {
  describe('constructor', () => {
    it('should create an instance of the Pipe', () => {
      const pipe: GetSumPipe = new GetSumPipe();
      expect(pipe).toBeTruthy();
    });
  })

  describe('transform', () => {
    it('should return the class', () => {
      const pipe: GetSumPipe = new GetSumPipe();

      expect(pipe.transform(transactions)).toEqual(219.13);
    });
  });
});
