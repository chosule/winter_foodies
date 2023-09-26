export type TLoginRequest = {
  usernameOrEmail: string;
  password: string;
};

export type TLoginResponse = {
  accessToken?: string;
  tokenType?: string;
  role?: string;
};
