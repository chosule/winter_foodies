import styled from "@emotion/styled";
import Image from "next/image";
import alertIcon from "@/public/img/alertIcon.png";

type TAlertBoxProps = {
  alertText: string;
};
const AlertBox = ({ ...props }: TAlertBoxProps) => {
  return (
    <>
      <StyledWrap>
        <StyledImgWrap src={alertIcon} alt="알렛아이콘" />
        <StyledText>{props.alertText}</StyledText>
      </StyledWrap>
    </>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: #853c0d;
  border-radius: 8px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StyledImgWrap = styled(Image)``;

const StyledText = styled.p`
  color: #fff;
  white-space: pre-line;
`;
export default AlertBox;
