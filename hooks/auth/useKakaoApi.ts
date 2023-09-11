export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_URL}&response_type=code`;

export const handleKakaoLogin = () => {
  window.location.href = kakaoURL;
  console.log("kakao");
};

if (typeof window !== "undefined") {
  const code = new URL(window.location.href).searchParams.get("code");
}

export default { kakaoURL, handleKakaoLogin };
