import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";
import useCart from "@/hooks/cart/useCart";
import { FaRegHeart } from "react-icons/fa6";

const MenuDetailInfoPage = () => {
  const { query } = useRouter();
  const { name, picture, favorite, id } = query;
    // state => state변경했다 => 컴포넌트 리렌더 => state가 바뀐값이

  const { favoriteApi } = useCart();
  
  const handleClick= () => {
    favoriteApi.mutate(
      {
        favorite: !favorite, 
        storeId: (Number(id)),
      },
      {
        onSuccess: (res) => {
          console.log("찜하기결과값 --> ", res);
        },
      }
    );
  };
  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={name} />
        <StyledIcon onClick={handleClick} />
      </StyledHeaderWrap>
      <Image src={picture} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position: relative;
`;

const StyledIcon = styled(FaRegHeart) `
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;

`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
