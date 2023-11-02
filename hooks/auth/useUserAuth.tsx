import { userState } from "@/recoil/atom";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

/**
 * @description
 * 다른곳에서 accessToken 값 가져오기 ->
 *   useUser();
 * const userAccessToken = useRecoilValue(userState);
 * console.log("userAccessToken:", userAccessToken);
 */

const useUserAuth = () => {
  const setUserAccessToken = useSetRecoilState(userState);
  const resetUserInfo = useResetRecoilState(userState);
  const userAccessToken = useRecoilValue(userState);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (userAccessToken === accessToken) {
      setUserAccessToken(accessToken);
    } else {
      resetUserInfo();
    }
  }, [accessToken]);
  return { setUserAccessToken, accessToken };
};

export default useUserAuth;
