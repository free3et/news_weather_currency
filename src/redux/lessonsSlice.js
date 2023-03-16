import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonsSlice = createApi({
  reducerPath: "lessonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.wisey.app/api/v1/" }),
  endpoints: (builder) => ({
    /*     getAuth: builder.query({
      query: (arg) => `/auth/anonymous?platform=subscriptions`,
      method: "GET",
    }), */
    getAllCourses: builder.query({
      query: (arg) =>
        `/core/preview-courses?token=${import.meta.env.VITE_API_KEY_LESSONS}`,
      method: "GET",
      credentials: "same-origin",
      prepareHeaders: (headers) => {
        //headers.set("authorization", `Bearer ${accessToken}`);
        headers.set("Content-Type", "application/json");
        headers.set(
          "Authorization",
          `Bearer ${import.meta.env.VITE_API_KEY_LESSONS}')`
        );
        console.log(headers);
        return headers;
      },
      mode: "cors",
    }),
    getCourse: builder.query({
      query: (id) =>
        `/core/preview-courses/${id}?token=${
          import.meta.env.VITE_API_KEY_LESSONS
        }`,
      method: "GET",
    }),
  }),
});

export const { useGetAuthQuery, useGetAllCoursesQuery, useGetCourseQuery } =
  lessonsSlice;
