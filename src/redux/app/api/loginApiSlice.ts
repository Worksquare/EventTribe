import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiRoutePaths, { BASE_URL } from "../../../utils/apiRoutePaths";

export const loginApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userData) => ({
                url: `${apiRoutePaths.auth.login}`,
                method: 'POST',
                body: userData
            })
        })
    })
})


export const { useLoginMutation } = loginApi