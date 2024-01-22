import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { TLoginRequest, TLoginResponse } from "@/types/api/loginType";
import {
  TPhoneCertiResponse,
} from "@/types/api/phoneCertificationType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TFindPwResponse, TFindPwRequest } from "@/types/api/findPwType";
import { TFindIdRequest, TFindIdResponse } from "@/types/api/findIdType";
import { TSignUpRequest, TSignUpResponse } from "@/types/api/signUpType";
import {
  CertifiCodeRequest,
  CertifiCodeResponse,
} from "@/types/api/certifiCodeType";
import {TChangePwResponse,TChangePwRequest} from "@/types/api/passwordChangeType"


/**
 *
 * @description
 * useMutation<TData=비동기함수 실행 결과 타입 , TError , TVariables= mutate 함수에 전달할 인자를 지정하는 타입, TContext=mutation function을 실행하기 전에 수행하는 onMutate callback함수의 return값을 지정하는 타입>
 */

const useAuthApi = () => {
  const queryClient = useQueryClient();
  const { client } = useProjectApi();
  // 로그인
  const loginApi = useMutation<
    TLoginResponse,
    AxiosError,
    TLoginRequest,
    TLoginResponse
  >((data) => client.login(data), {
    onSuccess: () => queryClient.invalidateQueries(["login"]),
  });

  //회원가입
  const signUpApi = useMutation<
    TSignUpResponse,
    AxiosError,
    TSignUpRequest,
    TSignUpRequest
  >((data) => client.signUp(data), {
    onSuccess: () => queryClient.invalidateQueries(["signup"]),
  });

  //1-phoneCerti
  const phoneCertiSignApi = useMutation<
    TPhoneCertiResponse,
    AxiosError,
    string,
    TPhoneCertiResponse
  >((data) => client.phoneCertiSign(data), {
    onSuccess: () => queryClient.invalidateQueries(["phoneAuth"]),
  });

  //2-phoneCerti
  const phoneCertiFindApi = useMutation<
    TPhoneCertiResponse,
    AxiosError,
    string,
    TPhoneCertiResponse
  >((data) => client.phoneCertiFind(data), {
    onSuccess: () => queryClient.invalidateQueries(["phoneAuth"]),
  });

  //인증코드
  const certiAuthApi = useMutation<
    CertifiCodeResponse,
    AxiosError,
    CertifiCodeRequest,
    CertifiCodeResponse
  >((data) => client.certifiCode(data), {
    onSuccess: () => queryClient.invalidateQueries(["certiAuth"]),
  });

  //비밀번호찾기
  const findPwApi = useMutation<
    TFindPwResponse,
    AxiosError,
    TFindPwRequest,
    TFindPwResponse
  >((data) => client.findPw(data), {
    onSuccess: () => queryClient.invalidateQueries(["findPw"]),
  });

  //비밀번호 바꾸기
  const changePwApi = useMutation<TChangePwResponse,AxiosError,TChangePwRequest,TChangePwResponse>((data) => client.changePw(data), {
    onSuccess: () => queryClient.invalidateQueries(["changePw"]),
  });

  //아이디 찾기
  const findIdApi = useMutation<
    TFindIdResponse,
    AxiosError,
    TFindIdRequest,
    TFindIdResponse
  >((data) => client.findId(data), {
    onSuccess: () => queryClient.invalidateQueries(["findId"]),
  });

  return {
    loginApi,
    phoneCertiSignApi,
    phoneCertiFindApi,
    certiAuthApi,
    findPwApi,
    changePwApi,
    findIdApi,
    signUpApi,
  };
};

export default useAuthApi;
