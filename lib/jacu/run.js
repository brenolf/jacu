/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var ensuresMigrationTable = require('../helpers/ensuresMigrationTable');
var getFileList = require('../helpers/getFileList');
var loader = require('../helpers/loader');

module.exports = function run() {
  var that = this;

  return ensuresMigrationTable(that)
  .then(function() {
    return that.knex
    .select('name', 'batch')
    .from(that.CONFIG.table)
    .orderBy('name', 'DESC')
    .limit(1);
  })
  .then(function(tuple) {
    return getFileList(tuple[0], that.TARGET);
  })
  .then(function(struct) {
    return that.knex.transaction(function(trx) {
      return loader(trx, struct, that.CONFIG.table, that.TARGET);
    });
  })
  .finally(function() {
    return that.knex.destroy();
  });
};
