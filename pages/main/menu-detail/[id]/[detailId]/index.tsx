import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";
import useCart from "@/hooks/cart/useCart";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { heartState, nearbyDataState } from "@/recoil/atom";
import { favoriteState } from "@/recoil/selector";
import { useParams } from "next/navigation";

const MenuDetailInfoPage = () => {
  const router= useRouter();
  const { query } = useRouter();
  const { favoriteApi } = useCart();
  const { name, picture, favorite, id, rating } = query;

  // const favoriteSlector = useRecoilValue(favoriteStata);
  // console.log("test셀렉터", favoriteSlector);

  // const [test, setTest] = useRecoilState(heartState);
  const [test, setTest] = useRecoilState(favoriteState(id));

  const [nearbyDataStateTest, setNearbyDataStateTest] =
    useRecoilState(nearbyDataState);

  const nearbyData = useRecoilValue(nearbyDataState)
  // console.log('nearby',nearbyData)

  const matchDataState = useRecoilCallback(
    ({ snapshot }) =>
      async (itemId: number) => {
        const matchFavorite = await snapshot.getPromise(favoriteState(itemId));
        return matchFavorite;
      }
  );

      
  const handleClick = () => {
    favoriteApi.mutate(
      {
        // favorite: !favorite,
        storeId: Number(id),
      },
      {
        onSuccess: async(res) => {
          console.log("결과값담기", res);
          // console.log('id?',id)
          const matchData = await matchDataState(id);
          setTest(!matchData);
          console.log('matchData',test)
          // setTest(res.data.isFavorite);
        },
      }
    );
  };
  useEffect(() =>{
    console.log('tesT?',test)

  },[test])

  // useEffect(() => {
  //   const heartStateHandlerData = () => {
  //     const favoriteFind = nearbyState?.data?.find((item) => item.id == id);
  //     return favoriteFind?.favorite;
  //   };
  //   setTest(heartStateHandlerData);
  // }, [handleClick]);

  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={`${name}`} storeRating={`${rating}`} />
        <StyledIcon onClick={handleClick}  test={favoriteState[id]}/>
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
  color:${({test}) => test ? "#000" : "orange"}
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
