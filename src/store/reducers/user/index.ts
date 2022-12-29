import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../../../types/IProfile";
import { ISubscription } from "../../../types/ISubscription";
import { IUser } from "../../../types/IUser";


export interface UserState {
    user: IUser;
    auth: boolean;
    subscriptions: ISubscription[];
    profile: IProfile;
}

const initialState: UserState = {
    auth: true,
    user: {} as IUser,
    profile: {} as IProfile,
    subscriptions: [
        {
            id: 1,
            name: "Netflix",
            img: 'Desktop/nesflix.jpg',
            description: 'fdfdffffffffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        },
        {
            id: 2,
            name: "YouTube Premium",
            img: 'Desktop/nesflix.jpg',
            description: 'fdfdffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            levels: []
        }
    ]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.auth = true
        }
    }
})

export const userReducers = userSlice.reducer;
export const { userFetching } = userSlice.actions;