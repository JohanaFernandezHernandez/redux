import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pruebaApi = createApi({

    reducerPath: 'prueba',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://probando'
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/id'
        }),

        getTodobyId:builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),
    })

})

export const { useGetTodosQuery, useGetTodobyIdQuery } = pruebaApi;