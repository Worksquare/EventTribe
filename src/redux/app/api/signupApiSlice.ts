import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiRoutePaths, { BASE_URL } from "../../../utils/apiRoutePaths";

export const signupApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userData) => ({
                url: `${apiRoutePaths.auth.register}`,
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useSignupMutation } = signupApi