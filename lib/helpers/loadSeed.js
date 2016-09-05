/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var injector = require('./injector');
var path = require('path');

module.exports = function loadSeeds(transaction, file, seedFolder) {
  var target = path.resolve(seedFolder, './' + file);
  var seeder = require(target);

  return seeder(injector(transaction));
};
