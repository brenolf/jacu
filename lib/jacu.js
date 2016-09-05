/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var path = require('path');
var that = {};

try {
  that.CONFIG = require(path.resolve('./', 'jacurc'));
  that.TARGET = path.resolve('./', that.CONFIG.folder);

  that.knex = require('knex')({
    client: that.CONFIG.client,
    connection: that.CONFIG.connections[process.env.NODE_ENV]
  });
} catch(err) {
  that = {};
}

module.exports = {
  init: require('./jacu/init'),
  make: require('./jacu/make').bind(that),
  run: require('./jacu/run').bind(that),
  rollback: require('./jacu/rollback').bind(that)
};
