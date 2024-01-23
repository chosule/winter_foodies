import CommonButton from "@/components/ui/Button/CommonButton";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type ButtonImage = {
  id: number;
  imgName: string;
  url: string;
};

const buttonImages: ButtonImage[] = [
  { id: 1, imgName: "붕어빵", url: "/img/icon1.png" },
  { id: 2, imgName: "어묵", url: "/img/icon2.png" },
  { id: 3, imgName: "군밤", url: "/img/icon9.png" },
  { id: 4, imgName: "호떡", url: "/img/icon7.png" },
  { id: 5, imgName: "계란빵", url: "/img/icon6.png" },
  { id: 6, imgName: "고구마", url: "/img/icon5.png" },
  { id: 7, imgName: "다코야끼", url: "/img/icon3.png" },
  { id: 8, imgName: "호두과자", url: "/img/icon4.png" },
  { id: 9, imgName: "국화빵", url: "/img/icon8.png" },
];
const MainMenu = () => {
  return (
    <StyledBoxWrap>
      {buttonImages.map(({ url, id, imgName }) => (
          <StyledLink href={`main/menu-detail/${id}`} key={id}>
            <Image src={url} alt={imgName} width="55" height="55" priority />
            <StyledButtonText>{imgName}</StyledButtonText>
          </StyledLink>
      ))}
    </StyledBoxWrap>
  );
};

const StyledBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  justify-items: center;
  width: 100%;
  margin:44px 0;
  gap: 28px;
`;
const StyledButtonText = styled.p`
  font-size: 15px;
  color: #747474;
`;
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items:center;
  gap: 13px;
`;

export default MainMenu;
