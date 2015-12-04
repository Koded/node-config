'use strict';

var yaml = require('js-yaml');
var extend = require('extend');
var fs = require('fs');

module.exports = function(env) {

  let baseConfig = {};
  let envConfig = {};

  try {
    baseConfig = yaml.safeLoad(fs.readFileSync(__dirname + '/../config.yaml', 'utf8'));
    envConfig = yaml.safeLoad(fs.readFileSync(__dirname + '/../config.' + env + '.yaml', 'utf8'));
  }
  catch (err) {}

  return extend({}, true, baseConfig, envConfig);
};
