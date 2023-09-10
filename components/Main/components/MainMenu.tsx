import CommonButton from "@/components/common/button/CommonButton";
import styled from "@emotion/styled";
import Image from "next/image";
import { PageLayout } from "@/components/layouts/BottomNavigation";
import BttomNavigation from "@/components/layouts/BottomNavigation/BottomNavigation";

type ButtonImage = {
  imgName: string;
  url: string;
};

const buttonImages: ButtonImage[] = [
  { imgName: "붕어빵", url: "/img/icon1.png" },
  { imgName: "어묵", url: "/img/icon2.png" },
  { imgName: "군밤", url: "/img/icon9.png" },
  { imgName: "호떡", url: "/img/icon7.png" },
  { imgName: "계란빵", url: "/img/icon6.png" },
  { imgName: "고구마", url: "/img/icon5.png" },
  { imgName: "다코야끼", url: "/img/icon3.png" },
  { imgName: "호두과자", url: "/img/icon4.png" },
  { imgName: "국화빵", url: "/img/icon8.png" },
];
const MainMenu = () => {
  return (
    <StyledBoxWrap>
      {buttonImages.map((buttonImage) => (
        <StyledButton key={buttonImage.url}>
          <Image
            src={buttonImage.url}
            alt={buttonImage.imgName}
            width="57"
            height="50"
          />
          <StyledButtonText>{buttonImage.imgName}</StyledButtonText>
        </StyledButton>
      ))}
    </StyledBoxWrap>
  );
};

const StyledBoxWrap = styled.section`
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
  width: 91px;
  height: 91px;
  display: flex;
  flex-direction: column;
  background-color: #dd803721;
  border-radius: 15px;
`;

export default MainMenu;
