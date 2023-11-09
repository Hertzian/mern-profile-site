import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import getToken from "../../utils/getToken"

export const placesApi = createApi({
  reducerPath: 'placesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api/places',
    prepareHeaders: (headers, { getState }) => {
      const token = getToken()
      if (token) headers.set('authorization', `Bearer ${token}`)
    }
  }),

  endpoints: (builder) => {
    return {

      getPlaces: builder.query({
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
        invalidatesTags: (result, error, place) => {
          return [{ type: 'Place', id: place.id, show: place.show }]
        }
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
  useGetPlacesQuery,
  useCreatePlaceMutation,
  useUpdatePlaceMutation,
  useDeletePlaceMutation
} = placesApi

