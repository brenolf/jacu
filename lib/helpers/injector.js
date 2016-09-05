/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var Promise = require('bluebird');

module.exports = function injector(transaction) {
  return function seed(name, seeds) {
    return Promise.map(seeds, function(seed) {
      return transaction.insert(seed).into(name);
    });
  };
};
