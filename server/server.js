'use strict';

const Hapi = require('hapi');

const start = (host, port) => {
    return new Promise((resolve, reject) => {
        console.log("MADE IT THROUGH")
        const server = new Hapi.server();
        server.connection({host, port});
    })
}

module.exports = {start}