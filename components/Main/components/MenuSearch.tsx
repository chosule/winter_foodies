import { MainUI } from "../style";
import TextField from "@/components/common/Input/CommonInput";
import styled from "@emotion/styled";
import CommonButton from "@/components/common/Button/CommonButton";

const MenuSearch = () => {
  return (
    <MainUI.Wrapper>
      <MainUI.Flex gap="9px" alignItems="center">
        <TextField placeholder="가게명, 음식명 검색" />
        <StyledButton />
      </MainUI.Flex>
    </MainUI.Wrapper>
  );
};
const StyledButton = styled(CommonButton)`
  background-image: url(/img/searchImg.png);
  background-repeat: no-repeat;
  background-position: center;
`;
export default MenuSearch;
