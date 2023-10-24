import { userState } from "@/shared/atoms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { TLoginResponse, TLoginRequest } from "@/types/api/loginType";
import { AxiosError } from "axios";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import useLogin from "./useAuth";

const useUser = () => {
  const { client } = useProjectApi();
  const queryClient = useQueryClient();

  const setUserInfo = useSetRecoilState(userState);
  const resetUserInfo = useResetRecoilState(userState);
  const accessToken = useRecoilValue(userState);

  if (!accessToken) {
    resetUserInfo();
  }
  const loginQuery = useMutation<
    TLoginResponse,
    AxiosError,
    TLoginRequest,
    TLoginResponse
  >((data) => client.login(data), {
    onSuccess: (response) => {
      const accessToken = response.accessToken;
      setUserInfo(accessToken);
      queryClient.invalidateQueries(["login"]);
      localStorage.setItem("accessToen", accessToken);
    },
  });
  return { loginQuery };
};

export default useUser;
