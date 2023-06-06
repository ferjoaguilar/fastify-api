import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import Characters from '../services/characters.service';
import { Character } from '../types/characters.types';
import charactersRepository from '../repository/characters.repository';

const characters:charactersRepository = new Characters();

const charactersRoutes =async (fastify:FastifyInstance) => {

   
    fastify.route({
        method: 'POST',
        url: '/',
        handler: async (request:FastifyRequest, reply:FastifyReply) => {
           try {
            await characters.createCharacter(request.body as Character);
            reply.status(201).send({message: 'Character created successfully'});
           } catch (error) {
            reply.status(500).send(error);
           }
        }
    });

};

export default charactersRoutes;