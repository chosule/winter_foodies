import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import useCart from "@/hooks/cart/useCart";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { heartState } from "@/recoil/atom";
import { FaRegHeart } from "react-icons/fa6";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";
import { useEffect } from "react";
import HeartState from "@/components/Main/components/mainMenuDetailInfo/HeartState";

const MenuDetailInfoPage = () => {
  const { query } = useRouter();
  const { name, picture, favorite, id } = query;
  console.log("query?", query);
  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={name} />
        <HeartState favorite={favorite} id={id} />
      </StyledHeaderWrap>
      <Image src={picture} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position: relative;
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
