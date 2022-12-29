import { IProfile } from "./IProfile";
import { IUser } from "./IUser";

export interface IAuth {
    accessToken: string;
    refreshToken: string;
    user: IUser;
    profile: IProfile;
}