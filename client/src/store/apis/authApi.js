import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/auth'
  }),

  endpoints(builder) {
    return {

      login: builder.mutation({
        query: (formData) => {
          const { email, password } = formData
          return {
            url: '/login',
            method: 'POST',
            body: { email, password }
          }
        }
      }),

    }
  }
})

export const { useLoginMutation } = authApi
export { authApi }