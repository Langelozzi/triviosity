import { FastifyInstance } from "fastify";
import healthRoutes from "./services/health/health.routes.js";
import userRoutes from "./services/user/user.routes.js";

export default async function apiRoutes(fastify: FastifyInstance) {
    fastify.register(healthRoutes, { prefix: '/health' });
    fastify.register(userRoutes, { prefix: '/user' });
};