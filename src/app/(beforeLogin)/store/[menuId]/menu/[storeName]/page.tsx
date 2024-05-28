"use client";
import CommonBox from "@/src/components/ui/Box";
import { BsCartPlus } from "react-icons/bs";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import CommonButton, { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/router";
import useCart from "@/src/hooks/cart/useCart";
import useContextModal from "@/src/context/hooks/useContextModal";
import Skeleton from "@/src/components/Skeleton/Skeleton";
import Box from "@/src/components/ui/Box";

const StoreMenuCart = () => {
  const router = useRouter();

  const { menuApi, addNewProductApi } = useCart();
  const { id, picture } = router.query;
  const { data: menuData, isLoading } = menuApi(Number(id));
  const modal = useContextModal();

  const openModal = () => {
    modal.openAlert({
      message: "상품이 추가되었습니다 !",
      btnText: "확인",
    });
  };

  const handleClick = (item: any): void => {
    const { foodId, ...rest } = item;
    addNewProductApi.mutate(
      {
        ...rest,
        itemId: foodId,
        quantity: 1,
      },
      {
        onSuccess: (res) => {
          console.log("추가된거확인-->", res);
          openModal();
        },
      }
    );
  };

  if (isLoading) return <Skeleton height="120vh" top="-285px" />;

  return (
    <div className="flex gap-[30px] flex-col">
      {menuData?.data?.menu.map((item) => (
        <div className="flex gap-[20px] flex-col" key={item.foodId}>
          <Box width="100%" height="72px" bg="#fff">
            <p className="font-[600]">{item.menuName}</p>
            <p className="font-[600]">{item.price} 원</p>
            <Button className="rounded-[10px]" bg="#fff" height="55px">
              <div className="flex flex-col justify-center gap-[5px] w-full h-full">
                <BsCartPlus
                  style={{ color: "#000", fontSize: "18px", width: "100%" }}
                />
                <p
                  className="text-[10px] font-[600]"
                  onClick={() => handleClick(item)}
                >
                  추가하기
                </p>
              </div>
            </Button>
          </Box>
        </div>
      ))}
    </div>
  );
};

const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledText = styled(MainUI.Text)`
  flex: 0.3;
`;
const CartBtn = styled(CommonButton)`
  border-radius: 10px;
  padding: 0;
`;
const CartBtnOuter = styled.div`
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  display: flex;
  width: 100%;
  height: 100%;
`;
export default StoreMenuCart;
