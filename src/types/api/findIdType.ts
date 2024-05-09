export type TFindIdRequest = {
  phoneNumber: string;
  authCode: string;
};
export type TFindIdResponse = {
  email?: string;
  date?: string;
  status?: string;
  data?: any;
};
