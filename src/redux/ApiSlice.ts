import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the shape of the request body
interface CreateExpenseItemRequest {
  description: string;
  amount: number;
  date: string;
}

// Define the shape of the response data
interface CreateExpenseItemResponse {
  name: string | undefined;
  id: string;
  description: string;
  amount: number;
  date: string;
}

interface GetExpenseItemResponse extends CreateExpenseItemResponse {
  id: string;
}

export const postItemApi = createApi({
  reducerPath: "postItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-4a179-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    createExpenseItem: builder.mutation<
      CreateExpenseItemResponse,
      CreateExpenseItemRequest
    >({
      query: (data) => ({
        url: "expenses.json", // Replace with your endpoint
        method: "POST",
        body: data, // Payload for the request
      }),
    }),
    getExpenseItems: builder.query<GetExpenseItemResponse[], void>({
      query: () => "expenses.json", // Firebase requires `.json` for fetching data
      transformResponse: (
        response: Record<string, CreateExpenseItemResponse>
      ) => {
        // Format the Firebase object into an array with both the ID and data
        return response
          ? Object.keys(response)
              .map((id) => ({
                ...response[id], // Item data
                id,
              }))
              .sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return dateB - dateA;
              })
          : [];
      },
    }),
    updateExpenseItem: builder.mutation<
      CreateExpenseItemResponse,
      { id: string; data: Partial<CreateExpenseItemRequest> }
    >({
      query: ({ id, data }) => ({
        url: `expenses/${id}.json`, // Replace with your endpoint
        method: "PUT",
        body: data, // Payload for the request
      }),
    }),
    deleteExpenseItem: builder.mutation<
      CreateExpenseItemResponse,
      { id: string; data: Partial<CreateExpenseItemRequest> }
    >({
      query: ({ id, data }) => ({
        url: `expenses/${id}.json`, // Replace with your endpoint
        method: "DELETE",
        body: data, // Payload for the request
      }),
    }),
  }),
});

// Export the auto-generated hook
export const {
  useCreateExpenseItemMutation,
  useGetExpenseItemsQuery,
  useUpdateExpenseItemMutation,
  useDeleteExpenseItemMutation,
} = postItemApi;
