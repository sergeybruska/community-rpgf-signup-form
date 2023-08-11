export type User = {
  _id: string;
  name: string;
  role: string;
  is_active: boolean;
};

export type UserResponse = {
  userInfo: User;
  auth_token: string;
};

export type UserStoreState = {
  user: User | null;
};

export type UserStoreAction = {
  setUser: (user: User) => void;
  deleteUser: () => void;
};
