import { ShortenPipe } from './shorten-pipe';

describe('ShortenPipe', () => {
  // Створюємо екземпляр класу (ізольований тест)
  const pipe = new ShortenPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should shorten long text', () => {
    const text = 'This is a very long text for testing purposes';
    const result = pipe.transform(text, 10);
    // Очікуємо 10 символів + три крапки
    expect(result).toBe('This is a ...');
  });

  it('should NOT shorten short text', () => {
    const text = 'Short';
    const result = pipe.transform(text, 10);
    expect(result).toBe('Short');
  });
});