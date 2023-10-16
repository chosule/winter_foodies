import styled from "@emotion/styled";
import MenuSearch from "./MenuSearch";
import RearTimeSearchWords from "./RearTimeSearchWords";
import { CSSProperties } from "react";
import RearTimeWordsPc from "./RearTimeWordsPc";

const MainLeftPc = () => {
  return (
    <StyledWrap>
      <StyledOuter flexDirection="column" gap="30px">
        <StyledFlex gap="10px" alignItems="center">
          <StyledText>우리와 가까운 간식,</StyledText>
          <StyledTitle>Winter Foodies</StyledTitle>
        </StyledFlex>
        <MenuSearch />
        <RearTimeWordsPc />
      </StyledOuter>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  height: 100%;
  position: relative;
  z-index: 1000;
`;

const StyledFlex = styled.div<
  Pick<CSSProperties, "gap" | "flexDirection" | "alignItems">
>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: center;
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
`;

const StyledOuter = styled(StyledFlex)`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  left: 25%;
`;
const StyledText = styled.span`
  font-size: 15px;
`;
const StyledTitle = styled(StyledText)`
  font-size: 25px;
  font-style: italic;
  font-weight: 600;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    bottom: 0;
    left: 0;
  }
`;

export default MainLeftPc;
