import { FastifyInstance } from "fastify";
import { getHealthCheck } from "../controllers/health.controller.js";

export default async function healthRoutes(fastify: FastifyInstance) {
    fastify.get('/check', getHealthCheck);
}