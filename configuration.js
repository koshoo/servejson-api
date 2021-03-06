/*jslint node:true*/
'use strict';

var format  = require('util').format;
var env     = process.env;
var configs = {
    "port"                  : env.PORT                  || 3001,
    "allow_origin"          : env.ALLOW_ORIGIN          || '*',
    "connString_mongo"      : env.DB_MONGO              || 'mongodb://localhost/servejson',
    "connString_mongo_test" : env.DB_MONGO_TEST         || 'mongodb://localhost/servejson-test',
    "newrelic"              : env.NEWRELIC              || null,
    "types_allowed"         : ['get', 'post', 'put', 'delete'],
    "reserved_subdomain"    : ['localhost:3001', 'servejson.com', 'api', 'www']
};


// Set configs in test
if (env.NODE_ENV === 'TEST') {
    configs.connString_mongo = configs.connString_mongo_test;
}

// Config to test in Wercker
if (process.env.WERCKER_MONGODB_URL) {
    configs.connString_mongo = format('%s/servejson-test', env.WERCKER_MONGODB_URL);
}

module.exports = configs;
