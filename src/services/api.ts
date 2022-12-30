import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { userFetching, userLogout } from '../store/reducers/user';
import { IUser } from '../types/IUser';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:5000',
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
            method: 'POST'
        }, api, extraOptions);

        if (refreshResult.data) {
            api.dispatch(userFetching(refreshResult.data as IUser))
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
    endpoints: () => ({})
})