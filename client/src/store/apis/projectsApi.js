import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import getToken from "../../utils/getToken"

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/projects',
    prepareHeaders: (headers, { getState }) => {
      const token = getToken()
      if (token) headers.set('authorization', `Bearer ${token}`)
    }
  }),

  endpoints: (builder) => {
    return {

      getProjects: builder.query({
        query: () => {
          return {
            url: '/',
            method: 'GET'
          }
        },
        providesTags: ['Project']
      }),

      createProject: builder.mutation({
        query: (project) => {
          return {
            url: '/',
            method: 'POST',
            body: project
          }
        },
        invalidatesTags: [{ type: 'Project' }]
      }),

      updateProject: builder.mutation({
        query: (project) => {
          return {
            url: `/${project.id}`,
            method: 'PUT',
            body: project
          }
        },
        invalidatesTags: (result, error, project) => {
          return [{ type: 'Project', id: project.id, show: project.show }]
        }
      }),

      deleteProject: builder.mutation({
        query: (projectId) => {
          return {
            url: `/${projectId}`,
            method: 'DELETE'
          }
        },
        invalidatesTags: [{ type: 'Project' }]
      }),

      uploadProjectImage: builder.mutation({
        query: ({ projectId, formData }) => {
          return {
            url: `/image/${projectId}`,
            method: 'POST',
            body: formData
          }
        }
      }),

      // not used...
      loadImage: builder.query({
        query: (projectId) => {
          return {
            url: `/image/${projectId}`,
            method: 'GET'
          }
        }
      }),

    }
  }
})

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useUploadProjectImageMutation
} = projectsApi