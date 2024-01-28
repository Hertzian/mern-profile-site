import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import getToken from "../../utils/getToken"
const apiUrl = process.env.REACT_APP_API_URL

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/skills`,
    prepareHeaders: (headers, { getState }) => {
      const token = getToken()
      if (token) headers.set('authorization', `Bearer ${token}`)
    }
  }),

  endpoints: (builder) => {
    return {

      getSkills: builder.query({
        query: () => {
          return {
            url: '/',
            method: 'GET'
          }
        },
        providesTags: ['Skill']
      }),

      createSkill: builder.mutation({
        query: (skill) => {
          return {
            url: '/',
            method: 'POST',
            body: skill
          }
        },
        invalidatesTags: [{ type: 'Skill' }]
      }),

      updateSkill: builder.mutation({
        query: (skill) => {
          return {
            url: `/${skill.id}`,
            method: 'PUT',
            body: skill
          }
        },
        invalidatesTags: (result, error, skill) => {
          return [{ type: 'Skill', id: skill.id, show: skill.show }]
        }
      }),

      deleteSkill: builder.mutation({
        query: (skillId) => {
          return {
            url: `/${skillId}`,
            method: 'DELETE'
          }
        },
        invalidatesTags: [{ type: 'Skill' }]
      })

    }
  }
})

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation
} = skillsApi