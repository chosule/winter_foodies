import HeaderLayout from "@/components/layouts/HeaderLayout";
import { SignUpUI } from "../style";
import TextField from "@/components/common/input/Input";
const SignUp = () => {
  return (
    <>
      <HeaderLayout headerTitle="회원가입" />
      <SignUpUI.Wrapper>
        <SignUpUI.Flex>
          <SignUpUI.Label>닉네임</SignUpUI.Label>
          <TextField placeholder="닉네임을 입력해주세요." />
        </SignUpUI.Flex>
      </SignUpUI.Wrapper>
    </>
  );
};

export default SignUp;
