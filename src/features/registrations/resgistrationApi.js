export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getRegistrations: builder.query({ query: () => "/" })
  })
});
