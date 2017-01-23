'use strict';
const boom = require('boom'),
    joi = require("joi"),
    bcrypt = require("bcrypt"),
    auth = require("../modules/auth");
const newUser = (request, reply) => {
	const { username, password = 'USER' } =  request.payload;
    console.log("USERS STUFF");
};
module.exports = {
    newUser    
}