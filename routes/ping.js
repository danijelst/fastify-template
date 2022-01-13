const {
  getItems,
} = require('./controllers/ping')

const Item = {
  $id: 'PingItem',
  type: 'string',
  description: "Ping response",
}

const getItemsOpts = {
  schema: {
    tags: ['Ping'],
    summary: "Ping end point to check if server is up.",
    response: {
      200: {
        description: "Ping return object",
        type: 'object',
        properties: {ping: {$ref: 'PingItem#'}}
      },
    },
  },
  handler: getItems,
}


function itemRoutes(fastify, options, done) {
  fastify.addSchema(Item)

  // Get all items
  fastify.get('/api/ping', getItemsOpts)

  done()
}

module.exports = itemRoutes
