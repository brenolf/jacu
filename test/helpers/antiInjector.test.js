var subject = require('../../lib/helpers/antiInjector');

describe('antiInjector', function() {
  it('returns a function to be run on seed files', function() {
    expect(subject()).to.be.a.function;
  });
});
