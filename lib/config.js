'use strict';

var yaml = require('js-yaml');
var extend = require('extend');
var fs = require('fs');

module.exports = function(env) {

  let baseConfig = {};
  let envConfig = {};

  try {
    baseConfig = yaml.safeLoad(fs.readFileSync(process.cwd() + '/config.yaml', 'utf8'));
    envConfig = yaml.safeLoad(fs.readFileSync(process.cwd() + '/config.' + env + '.yaml', 'utf8'));
  }
  catch (err) {}

  return extend({}, true, baseConfig, envConfig);
};
