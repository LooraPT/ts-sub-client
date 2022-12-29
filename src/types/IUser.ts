import { IRole } from "./IRole";
import { ISubscription } from "./ISubscription";

export interface IUser {
    id: number;
    email: string;
    roles: IRole[];
    subscriptions: ISubscription[];
}

