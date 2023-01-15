import { ILevelSubscription } from "./ILevelSubscription";

export interface ISubscription {
    id: string;
    img: string;
    name: string;
    description: string;
    levels: ILevelSubscription[];
}