import { getAllUsersDao, createUserDao } from "../daos/user.dao.js";
import { User, UserBody } from "../types/user.js";

export const getAllUsers = async (): Promise<User[]> => {
    return await getAllUsersDao();
}

export const createUser = async (user: UserBody): Promise<User> => {
    return await createUserDao(user);
}