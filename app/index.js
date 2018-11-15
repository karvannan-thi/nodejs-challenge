var express = require('express')

var app = express()

// See the README about ordering of middleware
app.use('/api', require('app/users/router'))

// FINALLY, use any error handlers
app.use(require('app/errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app