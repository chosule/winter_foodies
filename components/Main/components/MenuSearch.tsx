import { MainUI } from "../style";
import TextField from "@/components/ui/Input/CommonInput";
import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";

const MenuSearch = () => {
  return (
    <MainUI.Flex gap="15px" alignItems="center" justifyContent="space-between">
      <TextField placeholder="가게명, 음식명 검색" />
      <StyledButton variant="contained" />
    </MainUI.Flex>
  );
};
const StyledButton = styled(CommonButton)`
  background-image: url(/img/searchImg.png);
  background-repeat: no-repeat;
  background-position: center;
`;
export default MenuSearch;
