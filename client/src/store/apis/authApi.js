import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const apiUrl = process.env.REACT_APP_API_URL

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/auth`
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