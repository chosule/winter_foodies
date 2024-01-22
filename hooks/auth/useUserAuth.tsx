import { userState } from "@/recoil/atom";
import { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

/**
 * @description
 * 다른곳에서 accessToken 값 가져오기 ->
 *   useUser();
 * const userAccessToken = useRecoilValue(userState);
 * console.log("userAccessToken:", userAccessToken);
 */

const useUserAuth = () => {
  const userStateValue = useRecoilValue(userState);
  const resetUserInfo = useResetRecoilState(userState);
  const [user, setUser] = useRecoilState(userState);

  // const login = (token: string) => {
  //   const accessToken = localStorage.setItem("accessToken", token);
  //   setUser(token);
  // };

  const logout = () => {
    localStorage.removeItem("accessToken");
    resetUserInfo();
  };

  return { user, resetUserInfo, logout };
};

export default useUserAuth;
