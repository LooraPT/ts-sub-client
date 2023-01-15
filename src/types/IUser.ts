import { IRole } from "./IRole";

export interface IUser {
    id: string;
    email: string;
    roles: IRole[];
}

