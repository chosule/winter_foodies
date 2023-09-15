import CommonBox from "@/components/common/CommonBox/CommonBox";
import styled from "@emotion/styled";
import { MainUI } from "../style";
const RearTimeSearchWords = () => {
  return (
    <MainUI.Wrapper>
      <MainUI.Text textAlign="left">지금 인기있는 간식이에요!</MainUI.Text>
      <StyledSearchWordsBox
        backgroundColor="#f8f8f8"
        width="100%"
        height="32px"
      ></StyledSearchWordsBox>
    </MainUI.Wrapper>
  );
};

const StyledSearchWordsBox = styled(CommonBox)`
  border: 1px solid #dfdfdf;
`;
export default RearTimeSearchWords;
