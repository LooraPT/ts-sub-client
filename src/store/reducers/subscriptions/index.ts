import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISubscription } from "../../../types/ISubscription";
import { subscriptionMock } from "./mockDataSubscription";


export interface SubscriptionState {
    subscriptions: ISubscription[];
    selectedSubscription: ISubscription;
}

const initialState: SubscriptionState = {
    subscriptions: [...subscriptionMock],
    selectedSubscription: {} as ISubscription
}

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        subscriptionFetching(state, action: PayloadAction<ISubscription[]>) {
            state.subscriptions = action.payload;
        }
    }
})

export const { subscriptionFetching } = subscriptionSlice.actions;
export const subscriptionReducers = subscriptionSlice.reducer;
