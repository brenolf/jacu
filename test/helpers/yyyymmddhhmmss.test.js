var subject = require('../../lib/helpers/yyyymmddhhmmss');

describe('yyyymmddhhmmss', function() {
  it('returns a string with formated date', function() {
    var date = new Date('2010-01-01 00:00:00');

    expect(subject(date)).to.eql('20100101000000');
  });
});
