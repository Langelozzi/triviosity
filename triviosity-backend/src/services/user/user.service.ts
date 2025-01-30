import { getAllUsersDao, createUserDao } from "./user.dao.js";
import { User, UserBody } from "./user.types.js";

export const getAllUsers = async (): Promise<User[]> => {
    return await getAllUsersDao();
}

export const createUser = async (user: UserBody): Promise<User> => {
    return await createUserDao(user);
}