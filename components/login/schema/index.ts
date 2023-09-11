import { z } from "zod";
import { passwordPattern } from "../../../core/common/regex";

export type TLoginSchema = z.infer<typeof loginSchema>;
// export type TSignUpSchema = z.infer<typeof signUpSchema>

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

// export const signUpSchema = z.object({
//     name:z.string().name({message:'이름을 입력해 주세요.'}),

// })
