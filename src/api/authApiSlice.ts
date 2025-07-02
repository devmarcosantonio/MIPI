
import { apiSlice } from '../services/apiSlice';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface UserData {
    token: string;
    userId: string;
    userName: string;
    userFunction: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserData, LoginCredentials>({
      query: ({username, password}) => ({
        url: `/auth/login`,
        method: 'POST',
        body: {
            username: username,
            password: password
        },
      }),
      transformResponse: (response: UserData) => {
        console.log('Login response:', response);
        return response;
      },
      transformErrorResponse: (response: unknown) => {
        return response;
      },
    }),
  }),
});
export const { useLoginMutation } = authApiSlice;