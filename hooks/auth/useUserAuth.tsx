import { userState } from "@/recoil/atom";
import { useResetRecoilState, useSetRecoilState } from "recoil";

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
  //   const userAccessToken = useRecoilValue(userState);
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    setUserAccessToken(accessToken);
  } else {
    resetUserInfo();
  }
};

export default useUserAuth;
