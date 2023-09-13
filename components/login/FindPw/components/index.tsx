import HeaderLayout from "@/components/layouts/HeaderLayout";
import { AuthUI } from "../../style";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";

const FindPw = () => {
  return (
    <>
      <HeaderLayout headerTitle="비밀번호찾기" />
      <AuthUI.Wrapper>
        <CommonInfoBox infotitle="등록된 휴대폰 번호로 비밀번호 찾기" />
        <AuthUI.Flex>
          <AuthUI.Flex></AuthUI.Flex>
        </AuthUI.Flex>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindPw;
