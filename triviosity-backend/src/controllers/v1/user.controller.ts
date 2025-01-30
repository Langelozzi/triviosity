import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, getAllUsers } from "../../services/user.service.js";
import { UserBody } from "../../types/user.js";


export const getAllUsersHandler = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> => {
    const users = await getAllUsers();
    return reply.code(200).send(users);
}

export const createUserHandler = async (req: FastifyRequest<{ Body: UserBody }>, reply: FastifyReply): Promise<FastifyReply> => {
    const newUser = await createUser(req.body);
    return reply.code(201).send(newUser);
}