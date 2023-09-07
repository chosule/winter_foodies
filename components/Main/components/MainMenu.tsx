import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";
import icon1 from "@/public/img/icon1.png";
import icon2 from "@/public/img/icon2.png";
import icon3 from "@/public/img/icon3.png";
import icon4 from "@/public/img/icon4.png";
import icon5 from "@/public/img/icon5.png";
import icon6 from "@/public/img/icon6.png";
import icon7 from "@/public/img/icon7.png";
import icon8 from "@/public/img/icon8.png";
import icon9 from "@/public/img/icon9.png";

const buttonText: string[] = [
  "붕어빵",
  "어묵",
  "군밤",
  "호떡",
  "계란빵",
  "군고구마",
  "다코야끼",
  "호두과자",
  "국화빵",
];
const backgroundImge: string[] = [
  "icon1",
  "icon2",
  "icon3",
  "icon4",
  "icon5",
  "icon6",
  "icon7",
  "icon8",
  "icon9",
];
const MainMenu = () => {
  return (
    <StyledBoxWrap>
      {/* {backgroundImge.map((image) => (
        <StyledButton backgroundImage={image}>
          {buttonText.map((name: string) => (
            <StyledButtonText>{name}</StyledButtonText>
          ))}
        </StyledButton>
      ))} */}
      <StyledButton backgroundImage={icon1}>
        <StyledButtonText>붕어빵</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon2}>
        <StyledButtonText>어묵</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon3}>
        <StyledButtonText>군밤</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon4}>
        <StyledButtonText>호떡</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon5}>
        <StyledButtonText>계란빵</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon6}>
        <StyledButtonText>군고구마</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon7}>
        <StyledButtonText>다코야키</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon8}>
        <StyledButtonText>호두과자</StyledButtonText>
      </StyledButton>
      <StyledButton backgroundImage={icon9}>
        <StyledButtonText>국화빵</StyledButtonText>
      </StyledButton>
    </StyledBoxWrap>
  );
};

const StyledBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  width: 100%;
  gap: 19px;
`;
const StyledButtonText = styled.p`
  font-size: 12px;
  color: #747474;
`;
const StyledButton = styled(CommonButton)`
  background-color: #dd803721;
  width: 91px;
  height: 91px;
  display: flex;
  flex-direction: column;
`;

export default MainMenu;
