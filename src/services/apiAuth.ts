import { IAuth } from "../types/IAuth";
import { api } from "./api";


const apiAuth = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<IAuth, { email: string, password: string }>({
            query: (data) => ({
                url: `/auth/login`,
                method: 'POST',
                body: data,
            })
        }),
        registration: build.mutation<IAuth, { email: string, password: string }>({
            query: (data) => ({
                url: '/auth/registration',
                method: 'POST',
                body: data,
            })
        }),
        logout: build.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        })
    })
})

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation } = apiAuth;