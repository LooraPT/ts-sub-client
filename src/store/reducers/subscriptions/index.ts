import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISubscription } from "../../../types/ISubscription";


export interface SubscriptionState {
    subscriptions: ISubscription[];
    selectedSubscription: ISubscription;
}

const initialState: SubscriptionState = {
    subscriptions: [
        {
            id: 1,
            name: "Netflix",
            img: '',
            description: 'fdfdffffffffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        },
        {
            id: 2,
            name: "YouTube Premium",
            img: '',
            description: 'fdfdffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        },
        {
            id: 3,
            name: "Spotify",
            img: '',
            description: 'fdfdfffffffffffffffffffffffffffffffffdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        },
        {
            id: 4,
            name: "Spotify",
            img: '',
            description: 'fdfdffffffffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        },
    ],
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
