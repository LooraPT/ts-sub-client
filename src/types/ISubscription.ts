import { ILevelSubscription } from "./ILevelSubscription";

export interface ISubscription {
    id: number;
    img: string;
    name: string;
    description: string;
    levels: ILevelSubscription[];
}