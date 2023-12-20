import CommonBox from "@/components/ui/CommonBox/CommonBox";
import { BsCartPlus } from "react-icons/bs";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";
import { useRouter } from "next/router";
import useCart from "@/hooks/cart/useCart";
import { MenuDetailData } from "@/types/api/menuType";
import useContextModal from "@/context/hooks/useContextModal";

const StoreMenuCart = () => {
  const router = useRouter();

  const { menuApi, addNewProductApi } = useCart();
  const { id, picture } = router.query;

  const { data: menuData } = menuApi(id);
  
  const modal = useContextModal();

  const openModal = () =>{
    modal.openAlert({
      message:"상품이 추가되었습니다 !",
      btnText:"확인"
    })
  }
  const handleClick = (foodId, menuName, price): void => {
    addNewProductApi.mutate(
      {
        itemId: foodId,
        itemName: menuName,
        quantity: 1,
        price: price,
      },
      {
        onSuccess: (res) => {
          console.log("추가된거확인-->", res);
          openModal();
        },
      }
    );
  };

  if (!menuData || !menuData.menu) {
    return <div>Loading...</div>;
  }

  return (
    <MainUI.Flex gap="30px" flexDirection="column">
      {menuData.menu.map(({ foodId, menuName, price }: MenuDetailData) => (
        <MainUI.Flex gap="20px" flexDirection="column" key={foodId}>
          <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
            <StyledText fontWeight="600">{menuName}</StyledText>
            <StyledText fontWeight="600">{price} 원</StyledText>
            <CartBtn backgroundcolor="#fff" height="55px">
              <CartBtnOuter>
                <BsCartPlus
                  style={{ color: "#000", fontSize: "18px", width: "100%" }}
                />
                <StyledText
                  fontSize="10px"
                  fontWeight="600"
                  onClick={() => handleClick(foodId, menuName, price)}
                >
                  추가하기
                </StyledText>
              </CartBtnOuter>
            </CartBtn>
          </StyledBox>
        </MainUI.Flex>
      ))}
    </MainUI.Flex>
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
