import CommonButton from "@/components/common/Button/CommonButton";
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
  const router = useRouter();
  return (
    <StyledBoxWrap>
      {buttonImages.map((buttonImage) => (
        <StyledButton
          key={buttonImage.url}
          backgroundColor="#dd803721"
          onClick={() => {
            router.push({
              pathname: "main/menu-detail/[id]",
              query: { id: buttonImage.id, imgName: buttonImage.imgName },
            });
          }}
        >
          <Image
            src={buttonImage.url}
            alt={buttonImage.imgName}
            width="57"
            height="50"
            priority
          />
          <StyledButtonText>{buttonImage.imgName}</StyledButtonText>
        </StyledButton>
      ))}
    </StyledBoxWrap>
    // <StyledBoxWrap>
    //   {buttonImages.map((buttonImage) => (
    //     <Link
    //       href={{
    //         pathname: "main/menu-detail/[id]",
    //         query: {
    //           id: JSON.stringify(buttonImage.id),
    //           menuName: JSON.stringify(buttonImage.imgName),
    //           url: JSON.stringify(buttonImage.url),
    //         },
    //       }}
    //       as={`main/menu-detail/${buttonImage.id}`}
    //       key={buttonImage.id}
    //     >
    //       <StyledButton key={buttonImage.url} backgroundColor="#dd803721">
    //         <Image
    //           src={buttonImage.url}
    //           alt={buttonImage.imgName}
    //           width="57"
    //           height="50"
    //           priority
    //         />
    //         <StyledButtonText>{buttonImage.imgName}</StyledButtonText>
    //       </StyledButton>
    //     </Link>
    //   ))}
    // </StyledBoxWrap>
  );
};

const StyledBoxWrap = styled.section`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  justify-items: center;
  width: 100%;
  gap: 19px;
`;
const StyledButtonText = styled.p`
  font-size: 15px;
  color: #747474;
`;
const StyledButton = styled(CommonButton)`
  width: 120px;
  height: 110px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 8px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
`;

export default MainMenu;
