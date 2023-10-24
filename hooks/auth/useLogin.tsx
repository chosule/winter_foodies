import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { TLoginRequest, TLoginResponse } from "@/types/api/loginType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

/**
 *
 * @description
 * useMutation<TData=비동기함수 실행 결과 타입 , TError , TVariables= mutate 함수에 전달할 인자를 지정하는 타입, TContext=mutation function을 실행하기 전에 수행하는 onMutate callback함수의 return값을 지정하는 타입>
 */
const useLogin = () => {
  const queryClient = useQueryClient();
  const { client } = useProjectApi();

  const loginQuery = useMutation<
    TLoginResponse,
    AxiosError,
    TLoginRequest,
    TLoginResponse
  >((data) => client.login(data), {
    onSuccess: () => queryClient.invalidateQueries(["login"]),
  });
  return { loginQuery };
};

export default useLogin;
