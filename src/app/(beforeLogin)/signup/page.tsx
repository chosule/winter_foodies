"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import onSubmit from "./_lib/signup";
import { useFormState, useFormStatus } from "react-dom";

function showMessage(message: string | null) {
  if (message === "no_id") {
    return "아이디가 입력되지 않았습니다.";
  }
  if (message === "no_name") {
    return "닉네임이 입력되지 않았습니다.";
  }
  if (message === "no_password") {
    return "비밀번호가 입력되지 않았습니다.";
  }
  if (message === "user_exists") {
    return "이미 가입되어있는 아이디 입니다.";
  }
  if (message === "no_phoneNumber") {
    return "휴대폰 번호를 다시 입력해 주세요.";
  }
  return "";
}
const SignUpPage = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();
  return (
    <div className="px-8">
      <div className="h-[75vh]">
        <HeaderLayout headerTitle="회원가입" />
        <form action={formAction} className="grid grid-rows-1 h-full">
          <div className="gap-[10px] flex flex-col">
            <div className="flex flex-col gap-2">
              <label htmlFor="id" className="text-sm font-medium">
                아이디
              </label>
              <input
                name="id"
                type="email"
                placeholder="아이디를 입력해주세요."
                className="border rounded-md border-color-orange h-[50px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                닉네임
              </label>
              <input
                name="name"
                placeholder="이름을 입력해주세요."
                className="border rounded-md border-color-orange h-[50px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                비밀번호
              </label>
              <input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="border rounded-md border-color-orange h-[50px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                휴대폰 번호
              </label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="휴대폰번호를 입력해주세요."
                className="border rounded-md border-color-orange h-[50px] p-2"
              />
            </div>
            <div className="text-[red] font-medium">
              {showMessage(state?.message as string)}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full h-[50px] rounded-md text-color-white font-medium  bg-color-orange`}
            disabled={pending}
          >
            회원가입 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
