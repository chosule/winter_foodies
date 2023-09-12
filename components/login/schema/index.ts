import { z } from "zod";
import {
  passwordPattern,
  phoneNumberPattern,
} from "../../../core/common/regex";

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  id: z.string().email({ message: "아이디는 이메일 형식으로 입력하세요." }),
  password: z
    .string()
    .min(8, {
      message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
    })
    .max(15, {
      message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
    })
    .regex(passwordPattern, {
      message: "특수문자 중 ; & % = - + < > ＼ 는 사용할 수 없습니다.",
    }),
});

export const signUpSchema = z
  .object({
    signUpNickName: z.string().nonempty("닉네임을 입력해주세요."),
    signUpId: z
      .string()
      .email({ message: "아이디는 이메일 형식으로 입력하세요." }),
    signUpPassword: z
      .string()
      .min(8, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .max(15, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .regex(passwordPattern, {
        message: "특수문자 중 ; & % = - + < > ＼ 는 사용할 수 없습니다.",
      }),
    signUpPasswordChecking: z.string().regex(passwordPattern, {
      message: "비밀번호를 다시 재입력해주세요.",
    }),
    signUpPhoneNumber: z.string().regex(phoneNumberPattern, {
      message: "휴대폰 번호를 정확히 입력해 주세요.",
    }),
  })
  .refine((data) => data.signUpPassword === data.signUpPasswordChecking, {
    path: ["signUpPasswordChecking"],
    message: "새 비밀번호와 같지 않습니다.",
  });
