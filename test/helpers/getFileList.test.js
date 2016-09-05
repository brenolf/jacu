var subject = require('../../lib/helpers/injector');
var Promise = require('bluebird');

describe('injector', function() {
  it('returns a function returning a promise', function() {
    var fn = subject({});

    expect(fn('name', [])).to.be.instanceOf(Promise);
  });
});
