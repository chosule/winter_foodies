import CommonBox from "@/components/common/box/CommonBox";
import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";

const MainMenu = () => {
  return (
    <StyledBoxWrap>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
    </StyledBoxWrap>
  );
};

const StyledBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  width: 100%;
  gap: 19px;
`;

const StyledButton = styled(CommonButton)`
  background-color: #dd803721;
  width: 91px;
  height: 91px;
`;

export default MainMenu;
