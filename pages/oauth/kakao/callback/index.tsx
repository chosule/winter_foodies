import { useProjectApi } from "@/context/hooks/useDataContextApi";
import useKakaoApi from "@/hooks/auth/useKakaoApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type TCode = string;
const KakaoCallbackPage = () => {
  const { client } = useProjectApi();
  const [codeState, setCodeState] = useState<string | null>(null);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    setCodeState(code);
  }, []);
  const mutation = useMutation((code) => client.kakaoLogin({ code }), {
    onSuccess: (res) => {
      console.log(res, "성공");
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  });
  useEffect(() => {
    console.log(codeState, "코드나오나");
    if (codeState) {
      mutation.mutate(codeState);
    }
  }, [codeState]);

  return <div>카카오 로그인 콜백 페이지</div>;
};

export default KakaoCallbackPage;
