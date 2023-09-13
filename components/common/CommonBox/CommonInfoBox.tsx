import Image from "next/image";
import mainIcon from "@/public/img/mainIcon.png";
import styled from "@emotion/styled";

type CommonInfoBoxProps = {
  infotitle?: string;
};
const CommonInfoBox = ({ ...props }: CommonInfoBoxProps) => {
  return (
    <StyleWrap>
      <StyleImage src={mainIcon} alt="아이콘" width={66} height={48} />
      <StyleText>{props.infotitle}</StyleText>
    </StyleWrap>
  );
};

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyleImage = styled(Image)`
  transform: rotate(30deg);
`;

const StyleText = styled.p`
  color: #853c0d;
  font-weight: 600;
`;
export default CommonInfoBox;
