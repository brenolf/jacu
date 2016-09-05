#!/usr/bin/env node

/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

var pkg = require('../package');
var jacu = require('./jacu');

var yargs = require('yargs')
.version(function() {
  return pkg.version;
})
.usage('Usage: $0 [options] <command>')
.command('init', {
  describe: 'Create a fresh jacurc.'
})
.command('make <name>', {
  describe: 'Create a named seed file.'
})
.command('run', {
  describe: 'Run all seeds that have not yet been run.'
})
.command('rollback', {
  describe: 'Rollback the last set of seeds performed.'
})
.demand(1)
.strict()
.help('h')
.alias('h', 'help')
.alias('v', 'version')
.epilog('Breno Lima de Freitas <brenolimadefreitas@gmail.com> (https://breno.io/)');

var name = yargs.argv.name;
var cmd = yargs.argv._[0];

return jacu[cmd](name);
