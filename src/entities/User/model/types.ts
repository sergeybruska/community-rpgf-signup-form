export type User = {
  _id: string;
  name: string;
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
  deleteUser: () => void;
};
