import useContextModal from "@/context/hooks/useContextModal";

const useAuthModal = () => {
  const modal = useContextModal();
  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: "비밀번호가 확인되어 변경 페이지로 넘어갑니다.",
      btnText: "확인",
    });
  };

  const openPhoneModal = (authCode:string) => {
    modal.openNotice({
      title: "알림",
      message: `임시 인증코드는 ${authCode}입니다.`,
      btnText: "확인",
    });
  };
  const openPhoneErrorModal = () => {
    modal.openNotice({
      title: "알림",
      message: "회원정보가 존재하지 않습니다.",
      btnText: "확인",
    });
  };
  const openAuthCodeModal = () => {
    modal.openNotice({
      title: "알림",
      message: "인증번호가 확인되었습니다.",
      btnText: "확인",
    });
  };
  const openAuthCodeErrorModal = () => {
    modal.openNotice({
      title: "알림",
      message: "인증코드를 다시 확인해 주십시오.",
      btnText: "확인",
    });
  };
  const openAuthCodeCompleteModal = () => {
    modal.openNotice({
      title: "알림",
      message: "핸드폰 인증 먼저 해주세요.",
      btnText: "확인",
    });
  };

  const phoneAuthError404 = () => {
    modal.openNotice({
      title: "알림",
      message: "등록된 휴대폰 번호가 없습니다.",
      btnText: "확인",
    });
  };
  const phoneAuthError409 = () => {
    modal.openNotice({
      title: "알림",
      message: "이미 회원가입이 되어있습니다. 로그인해주시기 바랍니다.",
      btnText: "확인",
    });
  };
  const signUpModal = () => {
    modal.openNotice({
      message: "회원가입이 완료되어 메인페이지로 이동합니다.",
      btnText: "확인",
    });
  };
  return {
    openAlert,
    signUpModal,
    openPhoneModal,
    openPhoneErrorModal,
    openAuthCodeModal,
    openAuthCodeErrorModal,
    openAuthCodeCompleteModal,
    phoneAuthError404,
    phoneAuthError409,
  };
};

export default useAuthModal;
