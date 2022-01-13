// server.js

// load dotenv config
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// start
async function build() {
    const fastify = require('fastify')(require('./logger'))
    // Swagger
    await fastify.register(require('fastify-swagger'), require("./documentation/swagger.js"))
    // CORS handler
    await fastify.register(require('fastify-cors'), {
        // put your options here
    })
    // routes
    await fastify.register(require("./routes/ping"));
    return fastify
}

build()
    .then(app => app.listen(PORT))
    .then(console.log(`Server is up on port ${PORT}`))
    .catch(console.log)
