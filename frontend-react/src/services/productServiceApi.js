// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8001/products/' }),
    endpoints: (builder) => ({
        listProductCategories: builder.query({
            query: () => ({
                url: 'category/',
                method: 'GET'
            }),
        }),
        singleProductCategory: builder.mutation({
            query: (categoryId,user) => ({
                url: `category/${categoryId}/`,
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        
        createProductCategory: builder.mutation({
            query: (user) => ({
                url: 'category/',
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        updateProductCategory: builder.mutation({
            query: (categoryId,user) => ({
                url: `category/${categoryId}/`,
                method: 'PUT',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        deleteProductCategory: builder.mutation({
            query: (categoryId,user) => ({
                url: `category/${categoryId}/`,
                method: 'DELETE',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),

    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useListProductCategoriesQuery,useSingleProductCategoryMutation,useCreateProductCategoryMutation,useUpdateProductCategoryMutation,useDeleteProductCategoryMutation } = productApi