import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { type UserResponse, useUserStore } from '@/entities/User';
import { type LoginFormRequest } from '@/features/Authentication/Login';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';

export const loginUser = async (body: LoginFormRequest) => {
  const response = await apiClient.post<
    LoginFormRequest,
    AxiosResponse<UserResponse>
  >(apiRoutes.login, body);
  return response;
};

export const useLoginUserApi = (): UseMutationResult<
  AxiosResponse<UserResponse>,
  AxiosError<unknown>,
  LoginFormRequest
> => {
  const { setUser } = useUserStore();
  return useMutation({
    mutationFn: (body) => loginUser(body),
    onSuccess: async (res) => {
      if (res.data) {
        setUser(res.data.userInfo);
        typeof window !== 'undefined' &&
          localStorage.setItem('authToken', res.data?.auth_token);
        return res.data.userInfo;
      }
      return false;
    },
  });
};
