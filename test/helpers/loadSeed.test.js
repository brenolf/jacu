var subject = rewire('../lib/helpers/loadSeed');
var path = require('path');
var STUBS = path.resolve(__dirname, '../stubs');

describe('loadSeed', function() {
  var injector;

  before(function() {
    injector = sinon.stub().returns('foo');

    subject.__set__('injector', injector);
  });

  it('returns a function to be run on seed files', function() {
    var response = subject('trx', 'seed.stub.js', STUBS);

    expect(response).to.eql('foo');
  });
});
