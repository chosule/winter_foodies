import { userState } from "@/shared/atoms";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { TLoginResponse } from "@/types/api/loginType";
import { AxiosError } from "axios";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import { useProjectApi } from "@/context/hooks/useDataContextApi";

const useUser = () => {
  const { client } = useProjectApi();

  const setUserInfo = useSetRecoilState(userState);
  const resetUserInfo = useResetRecoilState(userState);
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    resetUserInfo();
  }
  return useMutation((data) => client.login(data));
};

export default useUser;
