import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import {
  type User,
  type UserStoreAction,
  type UserStoreState,
} from '@/entities/User';

const initialState: UserStoreState = {
  user: null,
};

export const useUserStore = create<UserStoreState & UserStoreAction>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setUser: (data: User) => set({ user: data }, false, 'user/setUser'),
        deleteUser: () => {
          set(initialState);
          typeof window !== 'undefined' && localStorage.removeItem('authToken');
        },
      }),
      { name: 'user' },
    ),
  ),
);

export const logOutUser = () => useUserStore.getState().deleteUser();
