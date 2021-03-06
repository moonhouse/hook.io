/*
 * hookio.js: the web hook platform.
 *
 * (C) 2010 Marak Squires
 * MIT LICENSE
 *
 */

require.paths.unshift(__dirname);

var services = exports;

services.scheduler = require('services/scheduler');
services.proxy     = require('services/proxy');
services.shell     = require('services/shell');
