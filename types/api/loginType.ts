export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken?: string;
  tokenType?: string;
  role?: string;
};
