/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var fs = require('fs');

module.exports = function getFileList(lastTuple, folder) {
  var files = fs.readdirSync(folder).sort();
  var last = lastTuple ? files.indexOf(lastTuple.name) : -1;

  return {
    files: files.slice(last + 1),
    batch: lastTuple ? lastTuple.batch + 1 : 1
  };
};
