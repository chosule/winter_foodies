export const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.WZRV9KUnhV9yzB6YHvmk}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_URL}&state=YOUR_STATE_STRING`;

export const handleNaverLogin = () => {
  window.location.href = naverURL;
};

export default { naverURL, handleNaverLogin };
