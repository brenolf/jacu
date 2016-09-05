var subject = rewire('../lib/helpers/loader');
var Promise = require('bluebird');

describe('loader', function() {
  var loadSeedFile, loadSeed;

  before(function() {
    loadSeedFile = sinon.stub().resolves({});
    loadSeed = sinon.stub();

    subject.__set__('loadSeedFile', loadSeedFile);
    subject.__set__('loadSeed', loadSeed);
  });

  it('returns a function to be run on seed files', function() {
    var response = subject('trx', {
      files: [1, 2, 3],
      batch: 42
    }, 'seedTable', 'seedFolder');

    return response.then(function() {
      expect(response).to.be.an.instanceOf(Promise);

      expect(loadSeedFile).inOrder
      .to.have.been.calledWith('trx', 1, 42, 'seedTable')
      .subsequently.calledWith('trx', 2, 42, 'seedTable')
      .subsequently.calledWith('trx', 3, 42, 'seedTable');

      expect(loadSeed).inOrder
      .to.have.been.calledWith('trx', 1, 'seedFolder')
      .subsequently.calledWith('trx', 2, 'seedFolder')
      .subsequently.calledWith('trx', 3, 'seedFolder');
    });
  });
});
