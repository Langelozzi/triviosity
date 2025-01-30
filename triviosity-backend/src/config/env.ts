import dotenv from 'dotenv';

dotenv.config()

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const API_VERSION = process.env.API_VERSION ? parseInt(process.env.API_VERSION) : 1;