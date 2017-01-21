'use strict';

const joi = require('joi'),
	userHandler = require('../handlers/user-handler'),
	auth = require('../modules/auth');
	

const routes = (server) => [{
	method: 'GET',
	path: '/api/v1/user/create',
    handler: userHandler.newUser,
	config: {
		description: 'Create new user to access the system',
		tags: ['api', 'v1'],
		
	}
}];

module.exports = routes;
