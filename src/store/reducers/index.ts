import { subscriptionReducers } from "./subscriptions";
import { userReducers } from "./user";

export const reducers = {
    user: userReducers,
    subscription: subscriptionReducers
}