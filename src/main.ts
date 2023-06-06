import fastify, { FastifyInstance } from 'fastify';
import charactersRoutes from './routes/characters.routes';

const server:FastifyInstance = fastify();

server.register(charactersRoutes, {prefix: '/api/v1/characters'});


const startServer = async (port:number) => {
    try {
        await server.listen({port: port});
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

startServer(3000);