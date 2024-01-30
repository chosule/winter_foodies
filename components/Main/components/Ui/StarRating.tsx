import { BiSolidStar } from "react-icons/bi";
import styled from "@emotion/styled";

export default function StarRating({
  storeRating,
}: {
  storeRating: string | undefined;
}) {
  return (
    <StyledWrap>
      <BiSolidStar style={{ color: "#dd8037" }} />
      <StyledText>{storeRating}</StyledText>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: 10px;
`;

const StyledText = styled.p`
  font-size: 11px;
  margin-right: -10px;
  line-height: 3;
`;
