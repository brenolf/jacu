var subject = rewire('../lib/helpers/deleter');
var Promise = require('bluebird');

describe('deleter', function() {
  var deleteSeedFile, deleteSeed;

  before(function() {
    deleteSeedFile = sinon.stub().resolves({});
    deleteSeed = sinon.stub();

    subject.__set__('deleteSeedFile', deleteSeedFile);
    subject.__set__('deleteSeed', deleteSeed);
  });

  it('returns a function to be run on seed files', function() {
    var response = subject('trx', [1, 2, 3], 'seedTable', 'seedFolder');

    return response.then(function() {
      expect(response).to.be.an.instanceOf(Promise);

      expect(deleteSeedFile).inOrder
      .to.have.been.calledWith('trx', 1, 'seedTable')
      .subsequently.calledWith('trx', 2, 'seedTable')
      .subsequently.calledWith('trx', 3, 'seedTable');

      expect(deleteSeed).inOrder
      .to.have.been.calledWith('trx', 1, 'seedFolder')
      .subsequently.calledWith('trx', 2, 'seedFolder')
      .subsequently.calledWith('trx', 3, 'seedFolder');
    });
  });
});
