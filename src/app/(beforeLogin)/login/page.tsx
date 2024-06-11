"use client";
import Button from "@/app/_component/Button";
import Image from "next/image";
import logo from "../../../../public/img/new-fish.png";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [login, setLogin] = useState<{ id: string; password: number }>({
    id: "",
    password: 0,
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        username: login.id,
        password: login.password,
        redirect: false,
      });
      if (result?.error) {
        setMessage("아이디와 비밀번호가 일치하지않습니다.");
      } else {
        setMessage("");
        router.push("/");
      }
    } catch (err) {
      console.log("err", err);
      setMessage("다시 로그인 해 주세요.");
    }
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="grid grid-rows-2 px-8">
      <div className="self-end justify-self-center">
        <Image src={logo} alt="아이콘" width={200} height={200} />
      </div>
      <div className="flex flex-col gap-[9px]">
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex gap-[40px] w-fill flex-col">
            <div className="flex-col flex gap-[10px]">
              <div className="flex gap-[10px] flex-col">
                <label htmlFor="id" className="text-sm font-medium">
                  아이디
                </label>
                <input
                  onChange={onChange}
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
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해 주세요."
                  className="border rounded-md border-color-orange h-[50px] p-2"
                />
              </div>
            </div>
            <div className="text-[red] font-medium">{message}</div>
            <Button
              type="submit"
              disabled={!login.id || !login.password}
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
