export type TKakaoLoginRequest = {
  code: string;
  codeState?: string;
};
export type TKakaoLoginResponse = {
  data: any;
  accessToken: string;
};
