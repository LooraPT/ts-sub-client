import { IOrder } from "../types/IOrder";
import { ISubscription } from "../types/ISubscription";
import { api } from "./api";


const subscriptionApi = api.injectEndpoints({
    endpoints: (build) => ({
        subscriptionGetAll: build.query<ISubscription[], void>({
            query: () => ({
                url: '/subscription'
            })
        }),
        subscriptionGetOne: build.query<ISubscription, string>({
            query: (id: string) => ({
                url: `/subscription/${id}`
            })
        }),
        getUserSubscription: build.query<ISubscription[] | null, string>({
            query: (id: string) => ({
                url: `/users/${id}`
            }),
            providesTags: result => ['Subscription']
        }),
        purchaseSubscription: build.mutation<void, IOrder>({
            query: (data) => ({
                url: '/order',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Subscription']
        }),
        removeSubscriptions: build.mutation<ISubscription[], { userId: string, subscriptionId: string }>({
            query: ({ userId, subscriptionId }) => ({
                url: `/users/remove`,
                method: 'POST',
                params: {
                    userId,
                    subscriptionId
                }
            }),
            invalidatesTags: ['Subscription']
        })
    })
})

export const {
    useSubscriptionGetAllQuery,
    useSubscriptionGetOneQuery,
    useGetUserSubscriptionQuery,
    usePurchaseSubscriptionMutation,
    useRemoveSubscriptionsMutation
} = subscriptionApi;