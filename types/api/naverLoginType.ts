export type TNaverLoginRequest = {
  code: string;
};

export type TNaverLoginResponse = {
  data: any;
  accessToken?: string;
};
