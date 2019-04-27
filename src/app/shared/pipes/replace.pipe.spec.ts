import { ReplacePipe } from './replace.pipe';

describe('ReplacePipe', () => {
  it('create an instance', () => {
    const pipe = new ReplacePipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace the specified character by a given replacement.', () => {
    const pipe = new ReplacePipe();
    expect(pipe.transform('chili-cheese-nuggets', '-', ' ')).toBe('chili cheese nuggets');
  });
});
