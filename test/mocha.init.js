'use strict';

var chai = require('chai');
var sinon = require('sinon');
var rewire = require('rewire');

require('sinon-as-promised');

chai.use(require('sinon-chai'));
chai.use(require('sinon-chai-in-order').default);

global.sinon = sinon;
global.expect = chai.expect;
global.rewire = rewire;
