import { IRole } from "./IRole";
import { ISubscription } from "./ISubscription";
import { IProfile } from "./IProfile";

export interface IUser {
    id: number;
    accessToken: string;
    refreshToken: string;
    email: string;
    roles: IRole[];
    subscriptions: ISubscription[];
    profile: IProfile;
}

