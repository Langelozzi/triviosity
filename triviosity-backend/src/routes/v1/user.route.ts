import { FastifyInstance } from "fastify";
import { createUserHandler, getAllUsersHandler } from "../../controllers/v1/user.controller.js";

const userSchema = {
    body: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' }
        }
    }
};

export default async function userRoutes(fastify: FastifyInstance) {
    fastify.get('', getAllUsersHandler);
    fastify.post('', { schema: userSchema }, createUserHandler);
}