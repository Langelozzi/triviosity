import { FastifyInstance } from "fastify";
import healthRoutes from "./v1/health.route.js";
import userRoutes from "./v1/user.route.js";

export default async function apiRoutes(fastify: FastifyInstance) {
    fastify.register(healthRoutes, { prefix: '/health' });
    fastify.register(userRoutes, { prefix: '/user' });
};