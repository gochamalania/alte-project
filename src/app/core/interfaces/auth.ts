import { User } from "./user";

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}


export interface LoginRespnse {
    user: User;
    accessToken: string;
}