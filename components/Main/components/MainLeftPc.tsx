import styled from "@emotion/styled";
import MenuSearch from "./MenuSearch";
import { CSSProperties } from "react";
import RearTimeWordsPc from "./RearTimeWordsPc";

const MainLeftPc = () => {
  return (
    <StyledWrap>
      <StyledOuter flexDirection="column" gap="30px">
        <StyledFlex gap="10px" alignItems="center">
          <StyledText fontSize="15px">우리와 가까운 간식,</StyledText>
          <StyledFlex flexDirection="column">
            <StyledTitle>Winter</StyledTitle>
            <StyledUnderLineTitle>Foodies</StyledUnderLineTitle>
          </StyledFlex>
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
  z-index: 999;
`;

const StyledFlex = styled.div<
  Pick<CSSProperties, "gap" | "flexDirection" | "alignItems" | "width">
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
  left: 30%;
  width: 100%;
  max-width: 320px;
  @media (max-width: 970px) {
    left: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const StyledText = styled.span<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;
const StyledTitle = styled(StyledText)`
  font-size: 25px;
  font-style: italic;
  font-weight: 600;
`;

const StyledUnderLineTitle = styled(StyledTitle)`
  position: relative;
  text-indent: 47px;
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
