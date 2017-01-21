'use strict';

const Swagger = require('./swagger'),
        Inert = require('inert'),	
        Vision = require('vision'),
        BasicAuth = require('hapi-auth-basic'),
        Cors = require('./cors');

module.exports = [Swagger, BasicAuth, Cors, Inert, Vision];
