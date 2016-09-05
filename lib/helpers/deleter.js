/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var Promise = require('bluebird');
var deleteSeedFile = require('./deleteSeedFile');
var deleteSeed = require('./deleteSeed');

module.exports = function deleter(transaction, files, seedTable, seedFolder) {
  return Promise.map(files, function(file) {
    return deleteSeedFile(transaction, file, seedTable)
    .then(function() {
      return deleteSeed(transaction, file, seedFolder);
    });
  });
};
