/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var fs = require('fs-extra');
var path = require('path');

module.exports = function init() {
  var SRC = path.resolve(__dirname, '../stub/jacurc.stub.js');

  try {
    return fs.copySync(SRC, './jacurc.js');
  } catch (err) {
    console.error('Could not create init file!', err);
  }
};
