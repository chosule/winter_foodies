import DefaultLayout from "@/components/layouts/Default";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthUI } from "@/components/login/style";
import CommonInfoBox from "@/components/ui/CommonBox/CommonInfoBox";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonButton from "@/components/ui/Button/CommonButton";
import TextField from "@/components/ui/Input/CommonInput";
import useValid from "@/hooks/auth/useValid";
import useAuthModal from "@/hooks/modal/useAuthModal";
import useAuthApi from "@/hooks/auth/useLogin";

export type Form ={
  phoneNumber:string;
  authCode:string;
}

const FindIdPage = () => {
  const modal = useContextModal();
  const [dataEmail, ] = useState();
  const { openPhoneModal } = useAuthModal();
  const { phoneCertiFindApi, certiAuthApi } = useAuthApi();

  const [form, setForm] = useState<Form>({
    phoneNumber: "",
    authCode: "",
  });

  const [completeSubmit, setCompleteSubmit] = useState({
    phoneComplete: false,
    authCodeComplete: false,
  });

  const [phoneNumberAuthenticated, setPhoneNumberAuthenticated] =
    useState(false);

  useEffect(() => {
    if (dataEmail !== undefined) {
      openAlert(dataEmail);
    }
  }, [dataEmail]);

  const {
    isValidState: phoneNumberIsValidState,
    validText: phoneNumberValidText,
  } = useValid({ phoneNumber: form.phoneNumber });

  const {
    isValidState: certiNumberValidState,
    validText: certiNumberValidText,
  } = useValid({ authCode: form.authCode });

  const phoneSubmit = () => {
    if (phoneNumberIsValidState.isPhoneNumberAuthCode === true) {
      phoneNumberCodeMutate(form.phoneNumber);
      setCompleteSubmit({ ...completeSubmit, phoneComplete: true });
      setPhoneNumberAuthenticated(true);
    } else {
      console.log("phoneSubmit else");
    }
  };

  const phoneNumberCodeMutate = (phoneNumber:string) => {
    phoneCertiFindApi.mutate(
      phoneNumber,
      {
        onSuccess: (res) => {
          console.log("핸드폰인증코드res", res);
          openPhoneModal(res.authCode || "");
        },
        onError: (err) => {
          console.log("핸드폰인증코드err", err);
        },
      }
    );
  };

  const authCertiSubmit = () => {
    if (certiNumberValidState.isCertiCode === true) {
      certiCodeMutate(form);
      setCompleteSubmit({ ...completeSubmit, authCodeComplete: true });
    } else {
      console.log("authcode else임");
    }
  };

  const certiCodeMutate = (form:Form) => {
    certiAuthApi.mutate(form, {
      onSuccess: (res) => {
        console.log("인증코드res", res);
        setForm({ ...form, authCode: "", phoneNumber: "" });
      },
      onError: (err) => {
        console.log("인증코드err", err);
      },
    });
  };

  const openAlert = (dataEmail:string) => {
    modal.openAlert({
      title: "알림",
      message: `회원님의아이디는 \n ${dataEmail}입니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  const openNotice = () => {
    modal.openNotice({
      title: "알림",
      message: `핸드폰 번호가 \n 전송되었습니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper>
        <AuthUI.Flex gap="26px">
          <CommonInfoBox infotitle="등록된 휴대폰 번호로 찾기" />
          <AuthUI.Flex>
            <AuthUI.Flex flex="0.8">
              <AuthUI.FormWrap>
                <AuthUI.Flex gap="10px">
                  <AuthUI.Flex gap="10px">
                    <AuthUI.Label>핸드폰번호</AuthUI.Label>
                    <AuthUI.Flex gap="20px" flexDirection="initial">
                      <AuthUI.Flex>
                        <TextField
                          onChange={(e) =>
                            setForm({ ...form, phoneNumber: e.target.value })
                          }
                          placeholder="핸드폰번호를 입력해주세요."
                          value={form.phoneNumber}
                          validText={phoneNumberValidText}
                          isValidState={
                            phoneNumberIsValidState.isPhoneNumberAuthCode
                          }
                        />
                      </AuthUI.Flex>
                      <CommonButton variant="contained" onClick={phoneSubmit}>
                        인증
                      </CommonButton>
                    </AuthUI.Flex>
                  </AuthUI.Flex>
                  <AuthUI.Flex gap="10px">
                    <AuthUI.Label>인증번호</AuthUI.Label>
                    <AuthUI.Flex gap="20px" flexDirection="initial">
                      <AuthUI.Flex>
                        <TextField
                          onChange={(e) =>
                            setForm({ ...form, authCode: e.target.value })
                          }
                          placeholder="인증번호를 입력해주세요."
                          value={form.authCode}
                          validText={certiNumberValidText}
                          isValidState={certiNumberValidState.isCertiCode}
                        />
                      </AuthUI.Flex>
                      <CommonButton
                        variant="contained"
                        onClick={authCertiSubmit}
                        disabled={!phoneNumberAuthenticated}
                      >
                        확인
                      </CommonButton>
                    </AuthUI.Flex>
                  </AuthUI.Flex>
                </AuthUI.Flex>
              </AuthUI.FormWrap>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.Flex>
      </AuthUI.Wrapper>
    </>
  );
};

FindIdPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default FindIdPage;
