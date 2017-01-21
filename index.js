const server = require('./server/server'),
    host = process.env.host || 'localhost',
    port = process.env.PORT || 8888;

module.exports = server.start(host, port);