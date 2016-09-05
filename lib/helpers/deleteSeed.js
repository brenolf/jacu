/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var antiInjector = require('./antiInjector');
var path = require('path');

module.exports = function deleteSeed(transaction, file, seedFolder) {
  var target = path.resolve(seedFolder, './' + file.name);
  var seeder = require(target);

  return seeder(antiInjector(transaction));
};
