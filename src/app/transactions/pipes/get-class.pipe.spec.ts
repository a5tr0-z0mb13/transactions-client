import { GetClassPipe } from './get-class.pipe';

describe('GetClassPipe', () => {
  describe('constructor', () => {
    it('should create an instance of the Pipe', () => {
      const pipe: GetClassPipe = new GetClassPipe();
      expect(pipe).toBeTruthy();
    });
  })

  describe('transform', () => {
    it('should return the class', () => {
      const pipe: GetClassPipe = new GetClassPipe();

      expect(pipe.transform(0)).toEqual('');
      expect(pipe.transform(1)).toEqual('positive');
      expect(pipe.transform(-1)).toEqual('negative');
    });
  });
});
