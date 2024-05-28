"use client";
import Button from "@/app/_component/Button";
import Image from "next/image";
import logo from "../../../../public/img/new-fish.png";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import onSubmit from "./_lib/login";

function showMessage(message: string | null) {
  if (message === "no_id") {
    return "아이디가 일치하지 않습니다.";
  }
  if (message === "no_password") {
    return "비밀번호가 일치하지 않습니다.";
  }
  if (message === "user_exists") {
    return "이미 가입되어있는 아이디 입니다.";
  }
  return "";
}

export default function LoginPage() {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();
  return (
    <div className="grid grid-rows-2">
      <div className="self-end justify-self-center">
        {/* <Image src={logo} alt="아이콘" width={200} height={200} /> */}
      </div>
      <div className="flex flex-col gap-[9px]">
        <form action={formAction} className="w-full">
          <div className="flex gap-[70px] w-fill flex-col">
            <div className="flex-col flex gap-[10px]">
              <div className="flex gap-[10px] flex-col">
                <label htmlFor="id" className="text-sm font-medium">
                  아이디
                </label>
                <input
                  type="text"
                  name="id"
                  placeholder="아이디를 입력해 주세요."
                  className="border rounded-md border-color-orange h-[50px] p-2"
                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해 주세요."
                  className="border rounded-md border-color-orange h-[50px] p-2"
                />
              </div>
            </div>
            <div className="text-[red] font-medium">
              {showMessage(state?.message as string)}
            </div>
            <Button
              disabled={pending}
              type="submit"
              className="h-[40px] text-color-white font-medium"
            >
              로그인
            </Button>
          </div>
        </form>
        {/*  */}
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <p className="text-sm font-medium">아이디 찾기</p>
            <p className="text-sm font-medium">비밀번호 찾기</p>
          </div>
          <Link href="/signup" className="text-sm font-medium">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
