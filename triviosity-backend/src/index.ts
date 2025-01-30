import Fastify from "fastify";
import { API_VERSION, PORT } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import apiRoutes from "./routes/index.js";

// Define fastify instance
const fastify = Fastify({ logger: true });

// Register api routes
fastify.register(apiRoutes, { prefix: `/api/v${API_VERSION}` });

// Add hooks
fastify.addHook('onClose', async () => {
    await prisma.$disconnect();
});

// Define start function
const start = async () => {
    try {
        await fastify.listen({ port: PORT });
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    };
};

// Start the server
start();