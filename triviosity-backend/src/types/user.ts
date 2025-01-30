export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export type UserBody = Omit<User, 'id' | 'createdAt'>; // Exclude fields not sent by clients