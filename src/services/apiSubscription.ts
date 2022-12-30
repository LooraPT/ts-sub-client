import { ISubscription } from "../types/ISubscription";
import { api } from "./api";


const subscriptionApi = api.injectEndpoints({
    endpoints: (build) => ({
        subscriptionGetAll: build.query<ISubscription[], void>({
            query: () => ({
                url: '/subscription'
            })
        }),
        subscriptionGetOne: build.query<ISubscription, number>({
            query: (id: number) => ({
                url: `/subscription/${id}`
            })
        })
    })
})

export const { useSubscriptionGetAllQuery, useSubscriptionGetOneQuery } = subscriptionApi;