'use strict';

const joi = require('joi'),
	// handlers = require('../handlers'),
	auth = require('../modules/auth');

const routes = (server) => [{
	method: 'GET',
	path: '/api/v1/',
    handler: function(){console.log("foobar")},
	config: {
		description: 'the route route',
		tags: ['api', 'v1'],
		
	}
}];

module.exports = routes;
