"use client";
import { useProjectApi } from "@/src/context/hooks/useDataContextApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  TNaverLoginRequest,
  TNaverLoginResponse,
} from "@/src/types/api/naverLoginType";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import useContextModal from "@/src/context/hooks/useContextModal";

const NaverCallbackPage = () => {
  const router = useRouter();
  const modal = useContextModal();
  const [codeState, setCodeState] = useState<string | null>(null);
  const { client } = useProjectApi();
  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: `로그인되어 \n 메인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    setCodeState(code);
  }, []);

  const mutation = useMutation<
    TNaverLoginResponse,
    AxiosError,
    TNaverLoginRequest
  >((code) => client.naverLogin(code), {
    onSuccess: (res: TNaverLoginResponse) => {
      //   console.log(res);
      //   console.log("accessToken", res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      openAlert();
      router.push("/");
    },
    onError: (err) => {
      console.log("err", err);
    },
  });

  useEffect(() => {
    if (codeState) {
      mutation.mutate({ code: codeState });
    }
  }, [codeState]);
  return <div></div>;
};

export default NaverCallbackPage;
