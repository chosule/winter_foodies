export interface CertifiCodeRequest {
  authCode: string;
  phoneNumber: string;
}

export interface CertifiCodeResponse {
  message: string;
}
