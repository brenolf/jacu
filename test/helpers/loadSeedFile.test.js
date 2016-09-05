var subject = require('../../lib/helpers/loadSeedFile');

describe('loadSeedFile', function() {
  var into = sinon.stub();

  var transaction = {
    insert: sinon.stub().returns({
      into: into
    })
  };

  it('inserts data into the corresponding table', function() {
    subject(transaction, 'foo', 42, 'bar');

    expect(transaction.insert).to.have.been.calledOnce;

    expect(into).to.have.been.calledWith('bar');
  });
});
