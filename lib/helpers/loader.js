/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var Promise = require('bluebird');
var loadSeedFile = require('./loadSeedFile');
var loadSeed = require('./loadSeed');

module.exports = function loader(transaction, struct, seedTable, seedFolder) {
  return Promise.map(struct.files, function(file) {
    return loadSeedFile(transaction, file, struct.batch, seedTable)
    .then(function() {
      return loadSeed(transaction, file, seedFolder);
    });
  });
};
