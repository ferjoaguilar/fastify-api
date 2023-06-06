import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const server:FastifyInstance = fastify();

server.get('/', async (request:FastifyRequest, reply:FastifyReply) => {
    reply.status(200).send({ hello: 'world' });
});


const startServer = async (port:number) => {
    try {
        await server.listen({port: port});
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

startServer(3000);