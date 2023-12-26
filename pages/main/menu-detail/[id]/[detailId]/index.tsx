import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";
import useCart from "@/hooks/cart/useCart";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import HeartStatus from "@/components/Main/components/Ui/HeartStatus";

const MenuDetailInfoPage = () => {
  const { query } = useRouter();
  const { name, picture, favorite, id, rating } = query;
  // state => state변경했다 => 컴포넌트 리렌더 => state가 바뀐값이
  const [favoriteState, setFavoriteState] = useState(favorite);
  const { favoriteApi } = useCart();

  useEffect(() => {
    console.log("favorite", favorite);
    console.log("처음 상태favoriteState", favoriteState);
  }, []);

  const handleClick = () => {
    favoriteApi.mutate(
      {
        // favorite: !favorite,
        storeId: Number(id),
      },
      {
        onSuccess: (res) => {
          // console.log("찜하기결과값 --> ", res);
          // console.log("res ", res.data.isFavorite);
          setFavoriteState(res.data.isFavorite);
          console.log("결과값담기", favoriteState);
        },
      }
    );
  };
  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout
          headerTitle={name}
          storeRating={rating}
          favoriteState={favoriteState}
        />
        <StyledIcon
          favoritestate={favoriteState}
          onClick={handleClick}
          favorite={favorite}
        />
        {/* <HeartStatus handleClick={handleClick} favoriteState={favoriteState} /> */}
      </StyledHeaderWrap>
      <Image src={picture} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position: relative;
`;

const StyledIcon = styled(FaRegHeart)`
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;
  color: ${({ favoritestate }) => (favoritestate ? "orange" : "#000")};
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
