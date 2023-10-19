export const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_URL}&state=${process.env.NEXT_STATE}`;

export const handleNaverLogin = () => {
  window.location.href = naverURL;
};

export default { naverURL, handleNaverLogin };
