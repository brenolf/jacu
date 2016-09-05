var subject = require('../../lib/helpers/ensuresMigrationTable');

describe('ensuresMigrationTable', function() {
  var ctx = {knex: {schema: {}}, CONFIG: {table: 'foo'}};

  before(function() {
    ctx.knex.schema.hasTable = sinon.stub();
    ctx.knex.schema.createTable = sinon.stub();
  });

  context('when seed table exists', function() {
    beforeEach(function() {
      ctx.knex.schema.hasTable.resolves(true);
    });

    it('does nothing', function() {
      subject(ctx);

      expect(ctx.knex.schema.createTable).not.to.have.been.called;
    });
  });

  context('when seed table does not exist', function() {
    beforeEach(function() {
      ctx.knex.schema.hasTable.resolves(false);
    });

    it('creates the table', function() {
      return subject(ctx)
      .then(function() {
        expect(ctx.knex.schema.createTable).to.have.been.calledOnce;
      });
    });
  });
});
