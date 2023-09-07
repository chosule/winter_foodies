import CommonButton from "@/components/common/button/CommonButton";
import TextField from "@/components/common/input/Input";
import styled from "@emotion/styled";
import { MainUI } from "../style";
import searchImg from "@/public/img/searchImg.png";
import RearTimeSearchWords from "./RearTimeSearchWords";
import MainMenu from "./MainMenu";

const Main = () => {
  return (
    <MainUI.Wrapper>
      <MainUI.Text>테해란로</MainUI.Text>
      <MainUI.Flex gap="9px" alignItems="center">
        <TextField placeholder="가게명, 음식명 검색" />
        <StyledButton />
      </MainUI.Flex>
      <RearTimeSearchWords />
      <MainMenu></MainMenu>
    </MainUI.Wrapper>
  );
};

const StyledButton = styled(CommonButton)`
  background-image: url(/img/searchImg.png);
  background-repeat: no-repeat;
  background-position: center;
`;

export default Main;
