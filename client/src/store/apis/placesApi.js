import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const placesApi = createApi({
  reducerPath: 'placesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/places',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token')
      if (token) headers.set('authorization', `Bearer ${token}`)
    }
  }),

  endpoints: (builder) => {
    return {

      getAllPlaces: builder.query({
        query: () => {
          return {
            url: '/',
            method: 'GET'
          }
        },
        providesTags: ['Place']
      }),

      createPlace: builder.mutation({
        query: (place) => {
          return {
            url: '/',
            method: 'POST',
            body: place
          }
        },
        invalidatesTags: [{ type: 'Place' }]
      }),

      updatePlace: builder.mutation({
        query: (place) => {
          return {
            url: `/${place.id}`,
            method: 'PUT',
            body: place
          }
        },
        invalidatesTags: [{ type: 'Place' }]
      }),

      deletePlace: builder.mutation({
        query: (placeId) => {
          return {
            url: `/${placeId}`,
            method: 'DELETE'
          }
        },
        invalidatesTags: [{ type: 'Place' }]
      })

    }
  }
})

export const {
  useGetAllPlacesQuery,
  useGetSinglePlaceQuery,
  useCreatePlaceMutation,
  useUpdatePlaceMutation,
  useDeletePlaceMutation
} = placesApi

