import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { TLoginRequest, TLoginResponse } from "@/types/api/loginType";
import {
  TPhoneCertiRequest,
  TPhoneCertiResponse,
} from "@/types/api/phoneCertificationType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TFindPwResponse, TFindPwRequest } from "@/types/api/findPwType";
/**
 *
 * @description
 * useMutation<TData=비동기함수 실행 결과 타입 , TError , TVariables= mutate 함수에 전달할 인자를 지정하는 타입, TContext=mutation function을 실행하기 전에 수행하는 onMutate callback함수의 return값을 지정하는 타입>
 */

const useLogin = () => {
  const queryClient = useQueryClient();
  const { client } = useProjectApi();

  const loginApi = useMutation<
    TLoginResponse,
    AxiosError,
    TLoginRequest,
    TLoginResponse
  >((data) => client.login(data), {
    onSuccess: () => queryClient.invalidateQueries(["login"]),
  });

  const phoneAuthApi = useMutation<
    TPhoneCertiResponse,
    AxiosError,
    TPhoneCertiRequest,
    TPhoneCertiResponse
  >((data) => client.phoneCertification(data), {
    onSuccess: () => queryClient.invalidateQueries(["phoneAuth"]),
  });

  const certiAuthApi = useMutation((data) => client.certifiCode(data), {
    onSuccess: () => queryClient.invalidateQueries(["certiAuth"]),
  });

  const findPwApi = useMutation<
    TFindPwResponse,
    AxiosError,
    TFindPwRequest,
    TFindPwResponse
  >((data) => client.findPw(data), {
    onSuccess: () => queryClient.invalidateQueries(["findPw"]),
  });

  return { loginApi, phoneAuthApi, certiAuthApi, findPwApi };
};

export default useLogin;
