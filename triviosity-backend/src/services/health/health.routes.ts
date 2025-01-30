import { FastifyInstance } from "fastify";
import { getHealthCheck } from "./health.controller.js";

export default async function healthRoutes(fastify: FastifyInstance) {
    fastify.get('/check', getHealthCheck);
}