import { heartState } from "@/recoil/atom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { FaRegHeart } from "react-icons/fa6";
import useCart from "@/hooks/cart/useCart";
import { getHeartState } from "@/recoil/selector";

type Props = {
  favorite: boolean;
  id: number;
};
export function HeartState({ favorite, id }: Props) {
  const [heartData, setHeartData] = useRecoilState(heartState);

  const { favoriteApi } = useCart();

  useEffect(() => {
    if (favorite) {
      setHeartData(favorite);
    }
  }, [favorite]);

  //   useEffect(() => {
  //     console.log("heartData", heartData);
  //   }, [heartData]);

  const heartSubmit = (id) => {
    favoriteApi.mutate(
      {
        favorite: heartData,
        storeId: id,
      },
      {
        onSuccess: (res) => {
          console.log("찜하기결과값 --> ", res);
        },
      }
    );
  };

  const handleClick = () => {
    // 클릭할 때마다 토글
    setHeartData((prev) => !prev);
    // console.log("heartData 상태확인", heartData);
    heartSubmit(id);
  };

  return (
    <>
      <StyledIcon onClick={handleClick} />
    </>
  );
}

const StyledIcon = styled(FaRegHeart)`
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;
  color: ${({ favorite }) => (favorite ? "orange" : "#000")};
`;

export default HeartState;
