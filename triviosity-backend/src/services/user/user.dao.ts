import { prisma } from "../../config/prisma.js";
import { User, UserBody } from "./user.types.js";

export const getAllUsersDao = async (): Promise<User[]> => {
    return await prisma.user.findMany();
};

export const createUserDao = async (user: UserBody): Promise<User> => {
    return await prisma.user.create({
        data: user
    });
};