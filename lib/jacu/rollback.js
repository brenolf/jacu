/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var deleter = require('../helpers/deleter');

module.exports = function rollback() {
  var that = this;

  return that.knex(that.CONFIG.table).max('batch')
  .then(function(result) {
    return that.knex(that.CONFIG.table).where('batch', result[0].max);
  })
  .then(function(files) {
    return that.knex.transaction(function(trx) {
      return deleter(trx, files, that.CONFIG.table, that.TARGET);
    });
  })
  .finally(function() {
    return that.knex.destroy();
  });
};
