import Fastify from "fastify";
import { PORT } from "./config/env.js";
import healthRoutes from "./routes/health.route.js";
import { prisma } from "./config/prisma.js";

// Define fastify instance
const fastify = Fastify({ logger: true });

// Register routes
fastify.register(healthRoutes, { prefix: '/health' });

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