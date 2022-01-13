
const getItems = async (req, reply) => {
    return reply.status(200).send({ping: "ok"});
}

module.exports = {
    getItems,
}

