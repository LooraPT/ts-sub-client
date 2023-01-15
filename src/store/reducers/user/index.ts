import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../../types/IAuth";
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
    subscriptions: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state, action: PayloadAction<IAuth>) {
            state.auth = true
            state.user = action.payload.user
            state.profile = action.payload.profile
            localStorage.setItem('accessToken', action.payload.accessToken)
        },
        userLogout(state) {
            localStorage.removeItem('accessToken')
            state.user = {} as IUser
            state.profile = {} as IProfile
            state.subscriptions = []
            state.auth = false
        },
        updateProfile(state, action: PayloadAction<IProfile>) {
            state.profile = action.payload
        },
        userSubscriptionFetching(state, action: PayloadAction<ISubscription[] | null>) {
            if (action.payload) {
                state.subscriptions = action.payload
            }
        }
    }
})

export const userReducers = userSlice.reducer;
export const { userFetching, userLogout, updateProfile, userSubscriptionFetching } = userSlice.actions;