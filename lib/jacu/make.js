/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var fs = require('fs-extra');
var path = require('path');
var yyyymmddhhmmss = require('../helpers/yyyymmddhhmmss');

module.exports = function make(name) {
  fs.mkdirpSync(this.TARGET);

  fs.copySync(
    path.resolve(__dirname, '../stub/seed.stub.js'),
    path.resolve(this.TARGET, './' + yyyymmddhhmmss() + '_' + name + '.js')
  );

  return this.knex.destroy();
};
