const app = require('./app');

describe('getPath', () => {

  it('return string', () => {
      const result = getPath('<div id="a"><div id="b"></div></div>');
      expect(result).toBe('Hello, World!');
  });


});
