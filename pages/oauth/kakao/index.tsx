import { useProjectApi } from "@/context/hooks/useDataContextApi";
import useKakaoApi from "@/hooks/auth/useKakaoApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  TKakaoLoginResponse,
  TKakaoLoginRequest,
} from "@/types/api/kakaoLoginType";
import { AxiosError } from "axios";
import useContextModal from "@/context/hooks/useContextModal";

const KakaoCallbackPage = () => {
  const modal = useContextModal();
  const { client } = useProjectApi();
  const [codeState, setCodeState] = useState<string | null>(null);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    setCodeState(code);
  }, []);

  const mutation = useMutation<
    TKakaoLoginResponse,
    AxiosError,
    TKakaoLoginRequest
  >((code) => client.kakaoLogin(code), {
    onSuccess: (res: TKakaoLoginResponse) => {
      //   console.log(res.data.accessToken, "엑세스토큰추출");
      localStorage.setItem("accessToken", res.data.accessToken);
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  });

  useEffect(() => {
    if (codeState) {
      mutation.mutate({ code: codeState });
    }
  }, [codeState]);

  return <div>카카오 로그인 콜백 페이지</div>;
};

export default KakaoCallbackPage;
