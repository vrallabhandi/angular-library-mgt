import { ShortenPipe } from './shorten.pipe';

fdescribe('ShortenPipe', () => {
  let pipe: ShortenPipe;
  beforeEach(() => {
    pipe = new ShortenPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should shorten the input string to the limit set', () => {
    const res = pipe.transform('This is a text', 6);
    expect(res).toMatch('This i ...');
  });

  it('should return the same input string if limit is more than its length', () => {
    const res = pipe.transform('This', 6);
    expect(res).toMatch('This');
  });
});
