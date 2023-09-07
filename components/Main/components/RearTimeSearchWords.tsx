import CommonBox from "@/components/common/box/CommonBox";
import styled from "@emotion/styled";

const RearTimeSearchWords = () => {
  return (
    <StyledWrapper>
      <StyledText>지금 인기있는 간식이에요!</StyledText>
      <StyledSearchWordsBox
        backgroundColor="#f8f8f8"
        width="100%"
        height="32px"
      ></StyledSearchWordsBox>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  margin: 12px 0 17px;
`;
const StyledText = styled.p`
  font-size: 12px;
  color: #9d9d9d;
  margin-bottom: 6px;
`;
const StyledSearchWordsBox = styled(CommonBox)`
  border: 1px solid #dfdfdf;
`;
export default RearTimeSearchWords;
