import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    auth: false,
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
        userFetching(state, action: PayloadAction<IUser>) {
            state.auth = true
            state.user = action.payload
        },
        userLogout(state) {
            state.auth = false
            state.user = {} as IUser
        }
    }
})

export const userReducers = userSlice.reducer;
export const { userFetching, userLogout } = userSlice.actions;