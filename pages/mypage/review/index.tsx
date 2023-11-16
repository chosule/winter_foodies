import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonButton from "@/components/ui/Button/CommonButton";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Rating from "@/components/ui/Rating";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

const reviewPage = () => {
  return (
    <>
      <HeaderLayout headerTitle="리뷰관리" />
      <StyledFlex gap="15px" flexDirection="column">
        <div>
          <StyledText fontWeight="600">붕어빵가게 이름</StyledText>
          <StyledText color="#A9A9A9" fontSize="12px">
            2023.10.01 10:25:55 주문
          </StyledText>
        </div>
        <StyledBoxWrap width="100%" height="100%" backgroundcolor="#dedede">
          <StyledFlex justifyContent="space-between">
            <StyledFlex alignItems="center" gap="10px">
              <Rating rating={5} />
              <p>몇일 전</p>
            </StyledFlex>
            <CommonButton backgroundcolor="transparent">
              <StyledText lineHeight="1.8" color="#000">
                삭제
              </StyledText>
            </CommonButton>
          </StyledFlex>
          {/*  */}
          <StyledFlex alignItems="center" justifyContent="space-between">
            <StyledFlex flexDirection="column">
              <p>계란빵 주문</p>
              <p>리뷰 작성 입력란.....</p>
            </StyledFlex>
            <div>이미지</div>
          </StyledFlex>
        </StyledBoxWrap>
      </StyledFlex>
    </>
  );
};

const StyledFlex = styled.div<
  Pick<CSSProperties, "gap" | "alignItems" | "justifyContent" | "flexDirection">
>`
  display: flex;
  gap: ${({ gap }) => gap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const StyledBoxWrap = styled(CommonBox)`
  padding: 15px;
`;

const StyledText = styled.p<
  Pick<CSSProperties, "lineHeight" | "fontSize" | "color" | "fontWeight">
>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

reviewPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default reviewPage;
