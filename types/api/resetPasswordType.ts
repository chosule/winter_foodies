export type ResetPwType = Partial<ResetPasswordRequestType>;

export interface ResetPasswordRequestType {
  userId?: number;
  newPassword?: string;
}

export interface ResetPasswordResponeseType {
  status: string;
  data: string;
}
