const logger = {
  logger: {
    //redact: ['req.headers.authorization'],
    serializers: {
      res (reply) {
        return {
          statusCode: reply.statusCode
        }
      },
      req (request) {
        return {
          method: request.method,
          url: request.url,
          path: request.path,
          // parameters: request.parameters,
          // Including the headers in the log could be in violation
          // of privacy laws, e.g. GDPR. You should use the "redact" option to
          // remove sensitive fields. It could also leak authentication data in
          // the logs.
          // headers: request.headers
        };
      }
    }
  }
}

module.exports = logger