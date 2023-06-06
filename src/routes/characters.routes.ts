import { FastifyInstance } from 'fastify';

const charactersRoutes =async (fastify:FastifyInstance) => {

   
    fastify.route({
        method: 'GET',
        url: '/',
        handler: async (request, reply) => {
            return 'characters';
        }
    });

};

export default charactersRoutes;