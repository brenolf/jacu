var subject = require('../../lib/helpers/injector');
var Promise = require('bluebird');

describe('injector', function() {
  var into = sinon.stub();

  var transaction = {
    insert: sinon.stub().returns({
      into: into
    })
  };

  it('returns a function to be run on seed files', function() {
    var fn = subject(transaction);
    var result = fn('foo', [1]);

    return result.then(function() {
      expect(fn).to.be.a.function;
      expect(result).to.be.instanceOf(Promise);
      expect(transaction.insert).to.have.been.calledWith(1);
      expect(into).to.have.been.calledWith('foo');
    });
  });
});
