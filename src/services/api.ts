import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { userFetching, userLogout } from '../store/reducers/user';
import { IAuth } from '../types/IAuth';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:5000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery({
            url: '/auth/refresh',
            method: 'GET'
        }, api, extraOptions);

        if (refreshResult.data) {
            api.dispatch(userFetching(refreshResult.data as IAuth))
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(userLogout())
        }
    }
    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Subscription'],
    endpoints: () => ({})
})