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
import getNearbyData from "@/context/libs/ssr/getMenuDetail";
import { useQuery } from "@tanstack/react-query";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { nearbyDataState } from "@/recoil/atom";
import { favoriteStata } from "@/recoil/selector";

const MenuDetailInfoPage = () => {
  const { query } = useRouter();
  const { favoriteApi } = useCart();
  const { name, picture, favorite, id, rating } = query;
  const [test, setTest] = useState();
  // state => state변경했다 => 컴포넌트 리렌더 => state가 바뀐값이

  const favoriteSlector = useRecoilValue(favoriteStata);
  // console.log("test셀렉터", favoriteSlector);

  const nearbyState = useRecoilValue(nearbyDataState);
  // console.log("nearbyState", nearbyState);

  const [nearbyDataStateTest, setNearbyDataStateTest] =
    useRecoilState(nearbyDataState);

  // const getFavorite = useRecoilCallback(({ snapshot }) => async (id) => {
  //   return await snapshot.getPromise(favoriteStata(id));
  // });

  const handleClick = () => {
    favoriteApi.mutate(
      {
        // favorite: !favorite,
        storeId: Number(id),
      },
      {
        onSuccess: (res) => {
          console.log("결과값담기", res);
        },
      }
    );
  };

  useEffect(() => {
    console.log("nearbyState", nearbyState);
  }, []);
  useEffect(() => {
    setNearbyDataStateTest((prev) => {
      console.log("id?", id);
      return prev?.data?.find((item) => item.id == id);
    });
  }, [nearbyState]);
  console.log("nearbyTest", nearbyDataStateTest);
  //여기서 가져온걸로 뿌려주기 !!!

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
        <StyledIcon onClick={handleClick} test={test} />
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
  color: ${({ test }) => (test ? "orange" : "#000")};
`;

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default MenuDetailInfoPage;
