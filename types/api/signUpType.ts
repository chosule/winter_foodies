export interface TSignUpRequest {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
}

export interface TSignUpResponse {
  data: string;
  status: string;
}
