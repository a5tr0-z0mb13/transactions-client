import { FormatDatePipe } from './format-date.pipe';

import { dates } from '../spec-data';

describe('FormatDatePipe', () => {
  describe('constructor', () => {
    it('should create an instance of the Pipe', () => {
      const pipe: FormatDatePipe = new FormatDatePipe();
      expect(pipe).toBeTruthy();
    });
  })

  describe('transform', () => {
    it('should format a date value', () => {
      const pipe: FormatDatePipe = new FormatDatePipe();
      dates.forEach((date: any) => expect(pipe.transform(date.value)).toEqual(date.expected));
    });
  });
});
