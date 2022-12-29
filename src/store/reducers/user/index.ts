import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";


export interface UserState {
    user: IUser;
    auth: boolean;
}

const initialState: UserState = {
    auth: true,
    user: {} as IUser,
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