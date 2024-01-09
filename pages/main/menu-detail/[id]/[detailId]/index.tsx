import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";
import useCart from "@/hooks/cart/useCart";
import { FaRegHeart } from "react-icons/fa6";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteState } from "@/recoil/selector";

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
        onSuccess:  (res) => {
          setFavorite(res.data.isFavorite);
        },
      }
    );
  };

  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={`${name}`} storeRating={`${rating}`} />
        <StyledIcon onClick={handleClick}  favorite={favorite}/>
      </StyledHeaderWrap>
      <Image src={String(picture)} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position: relative;
`;

const StyledIcon = styled(FaRegHeart)<{favorite:boolean}>`
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;
  color:${({favorite}) => favorite ? "orange" : "#000"};
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
