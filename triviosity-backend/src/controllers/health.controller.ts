import { FastifyReply, FastifyRequest } from "fastify";

export const getHealthCheck = async (req: FastifyRequest, reply: FastifyReply) => {
    return reply.code(200).send({
        status: "All good folks!"
    });
}