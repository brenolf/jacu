/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var padDate = function padDate(segment) {
  segment = segment.toString();
  return segment[1] ? segment : ('0' + segment);
};

module.exports = function yyyymmddhhmmss(date) {
  var d = date || new Date();

  return d.getFullYear().toString() +
    padDate(d.getMonth() + 1) +
    padDate(d.getDate()) +
    padDate(d.getHours()) +
    padDate(d.getMinutes()) +
    padDate(d.getSeconds());
};
