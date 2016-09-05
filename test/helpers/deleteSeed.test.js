var subject = rewire('../lib/helpers/deleteSeed');
var path = require('path');
var STUBS = path.resolve(__dirname, '../stubs');

describe('deleteSeed', function() {
  var antiInjector;

  before(function() {
    antiInjector = sinon.stub().returns('foo');

    subject.__set__('antiInjector', antiInjector);
  });

  it('returns a function to be run on seed files', function() {
    var response = subject('trx', {
      name: 'seed.stub.js'
    }, STUBS);

    expect(response).to.eql('foo');
  });
});
