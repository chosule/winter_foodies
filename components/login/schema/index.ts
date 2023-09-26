import { z } from "zod";
import { passwordPattern, phoneNumberPattern } from "@/core/common/regex";

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TFindIdSchema = z.infer<typeof findIdSchema>;
export type TFindPasswordSchema = z.infer<typeof findPasswordSchema>;
export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;

export const loginSchema = z.object({
  usernameOrEmail: z
    .string()
    .email({ message: "아이디는 이메일 형식으로 입력하세요." }),
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
    username: z.string().nonempty("닉네임을 입력해주세요."),
    email: z
      .string()
      .email({ message: "아이디는 이메일 형식으로 입력하세요." }),
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
    signUpPasswordChecking: z.string().regex(passwordPattern, {
      message: "비밀번호를 다시 재입력해주세요.",
    }),
    phoneNumber: z
      .string()
      .min(8, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .max(15, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .regex(phoneNumberPattern, {
        message: "휴대폰 번호를 정확히 입력해 주세요.",
      }),
  })
  .refine((data) => data.password === data.signUpPasswordChecking, {
    path: ["signUpPasswordChecking"],
    message: "새 비밀번호와 같지 않습니다.",
  });

export const findIdSchema = z.object({
  findIdPhoneNumber: z.string().regex(phoneNumberPattern, {
    message: "휴대폰 번호를 정확히 입력해주세요.",
  }),
  findIdCertiNumber: z.string().nonempty("인증번호를 정확히 입력해주세요."),
});

export const findPasswordSchema = z.object({
  findPwEmail: z
    .string()
    .email({ message: "아이디는 이메일 형식으로 입력하세요." }),
  findPwName: z.string().nonempty("이름을입력해주세요."),
  findPwPhoneNumber: z.string().regex(phoneNumberPattern, {
    message: "휴대폰 번호를 정확히 입력해주세요.",
  }),
  findPwCertiNumber: z.string().nonempty("인증번호를 정확히 입력해주세요."),
});

export const changePasswordSchema = z //
  .object({
    changePassword: z
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
    changePasswordConfirm: z
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
  })
  .refine((data) => data.changePassword === data.changePasswordConfirm, {
    path: ["changePasswordConfirm"],
    message: "새 비밀번호와 같지 않습니다.",
  });
