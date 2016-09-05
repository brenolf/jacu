var subject = require('../../lib/helpers/deleteSeedFile');

describe('deleteSeedFile', function() {
  var del = sinon.stub();

  var where = sinon.stub().returns({
    delete: del
  });

  var transaction = {
    from: sinon.stub().returns({
      where: where
    })
  };

  it('inserts data into the corresponding table', function() {
    subject(transaction, {
      name: 'foo'
    }, 'bar');

    expect(transaction.from).to.have.been.calledWith('bar');

    expect(where).to.have.been.calledWith({
      name: 'foo'
    });

    expect(del).to.have.been.calledOnce;
  });
});
