export type User = {
  id: string;
  name: string;
  permissions: string[];
  role: string;
};

export type UserResponse = {
  userInfo: User;
  access_token: string;
};

export type UserStoreState = {
  user: User | null;
};

export type UserStoreAction = {
  setUser: (user: User) => void;
  logOut: () => void;
};
