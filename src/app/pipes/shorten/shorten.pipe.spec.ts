
import { ShortenPipe } from './shorten.pipe';

fdescribe('ShortenPipe', () => {
  let pipe: ShortenPipe;

  beforeEach( () => {
    pipe = new ShortenPipe();
  });

it('Shorten the string based on the input limit', () => {
  expect(pipe.transform('object',3)).toBe('obj...');
});

});