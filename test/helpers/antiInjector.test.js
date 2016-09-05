var subject = require('../../lib/helpers/antiInjector');
var Promise = require('bluebird');

describe('antiInjector', function() {
  var del = sinon.stub();

  var where = sinon.stub().returns({
    delete: del
  });

  var transaction = {
    from: sinon.stub().returns({
      where: where
    })
  };

  it('returns a function to be run on seed files', function() {
    var fn = subject(transaction);
    var result = fn('foo', [1]);

    return result.then(function() {
      expect(fn).to.be.a.function;
      expect(result).to.be.instanceOf(Promise);
      expect(transaction.from).to.have.been.calledWith('foo');
      expect(where).to.have.been.calledWith(1);
      expect(del).to.have.been.calledOnce;
    });
  });
});
