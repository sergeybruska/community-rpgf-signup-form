import axios, { type AxiosError } from 'axios';

import { logOutUser } from '@/entities/User';
import {
  notification,
  notificationMessages,
  notificationTitles,
} from '@/shared/helpers/notificationMessages';

export type ErrorWithStatusCode = {
  statusCode: number;
  message: string;
};

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30 * 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const authToken =
    typeof window !== 'undefined' && localStorage?.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export const errorHandler = (error: unknown) => {
  if (error instanceof Error && 'isAxiosError' in error) {
    const axiosError = error as AxiosError<ErrorWithStatusCode>;
    if (axiosError?.response?.status === 401) {
      logOutUser();
    }
    if (axiosError?.response?.data?.message) {
      notification.error(
        notificationTitles.error,
        axiosError.response.data.message,
      );
    } else {
      notification.error(notificationTitles.error, axiosError.toString());
    }
  } else {
    notification.error(
      notificationTitles.error,
      notificationMessages.somethingWentWrong,
    );
  }
};
