import TextField from "@/components/common/input/Input";
import { AuthUI } from "../../style";
import CommonButton from "@/components/common/button/CommonButton";
import HeaderLayout from "@/components/layouts/HeaderLayout";

const FindId = () => {
  return (
    <>
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper>
        <AuthUI.FormWrap>
          <AuthUI.Flex>
            <AuthUI.Label>휴대폰번호</AuthUI.Label>
            <AuthUI.Flex gap="20px" flexDirection="initial">
              <TextField placeholder="핸드폰번호를 입력해주세요." />
              <CommonButton>인증</CommonButton>
            </AuthUI.Flex>
          </AuthUI.Flex>
          <AuthUI.Flex>
            <AuthUI.Label>인증번호</AuthUI.Label>
            <AuthUI.Flex gap="20px" flexDirection="initial">
              <TextField placeholder="인증번호를 입력해주세요." />
              <CommonButton>확인</CommonButton>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.FormWrap>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindId;
