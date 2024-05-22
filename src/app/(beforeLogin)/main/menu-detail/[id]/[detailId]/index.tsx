import MenuDetailInfoTab from "@/src/components/Main/components/mainMenu/MenuDetatilInfoTab";
import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AuthPrivateLayout from "@/src/components/layouts/AuthPrivateLayout";
import useCart from "@/src/hooks/cart/useCart";
import { FaRegHeart } from "react-icons/fa6";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteState } from "@/src/recoil/selector";

const MenuDetailInfoPage = () => {
  const { query } = useRouter();
  const { favoriteApi } = useCart();
  const { name, picture, id, rating } = query;
  const [favorite, setFavorite] = useRecoilState(favoriteState(Number(id)));

  const handleClick = () => {
    favoriteApi.mutate(
      {
        storeId: Number(id),
      },
      {
        onSuccess: (res) => {
          setFavorite(res.data.isFavorite);
        },
      }
    );
  };
  console.log("picture", picture);
  const StringImg = String(picture);
  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={`${name}`} storeRating={String(rating)} />
        <StyledIcon onClick={handleClick} favorite={favorite} />
      </StyledHeaderWrap>
      {/* <Image src={StringImg} alt="이미지" width={70} height={70} /> */}
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position: relative;
`;

const StyledIcon = styled(FaRegHeart)<{ favorite: boolean }>`
  position: fixed;
  right: 60px;
  top: 38px;
  z-index: 2;
  color: ${({ favorite }) => (favorite ? "orange" : "#000")};
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
