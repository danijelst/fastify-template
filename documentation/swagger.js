const options = {
  exposeRoute: true,
  routePrefix: '/api-docs',
  swagger: {
    info: {
      title: 'Example API',
      description: '## About \n' +
        'This REST API is an example.',
      contact: {
        name: 'Your Name',
        email: 'your.name@domain.org'
      },
      version: '1.0.0',
    },
    tags: [
      { name: 'ExampleTag', description: 'Some description of the tag' },
    ],
    basePath: '/api',
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
  },
};

module.exports = options;