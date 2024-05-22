export interface CertifiCodeRequest {
  authCode: string;
  phoneNumber: string;
}

export interface CertifiCodeResponse {
  error: string;
}
