import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import useCart from "@/hooks/cart/useCart";
import styled from "@emotion/styled";
import Image from "next/image";
import { MyPageUI } from "@/components/Mypage/style";
import useDateFormat from "@/hooks/useDateFormat";
import StarRating from "@/components/Main/components/Ui/StarRating";
import Skeleton from "@/pages/Skeleton/Skeleton";

const OrderListPage = () => {
  const {
    orderDetailsApi: { isLoading ,data: orderDatas },
  } = useCart();

  if(isLoading) return <Skeleton/>
  
  return (
    <>
      <HeaderLayout headerTitle="주문내역" />

      {orderDatas && (
        <>
          {orderDatas?.data?.map(
            ({
              storeImage,
              id,
              storeName,
              storeRating,
              orderTime,
              items,
              totalPrice,
            }) => (
              <StyledBox
                key={id}
                width="100%"
                backgroundcolor="#ededed"
                height="100%"
              >
                <StyledImage
                  src={storeImage}
                  alt="이미지"
                  width={60}
                  height={60}
                />
                <MyPageUI.Flex gap="6px" flexDirection="column">
                  <MyPageUI.Flex gap="10px" alignItems="center">
                    <MyPageUI.Text fontWeight="600" fontSize="13px">{storeName}</MyPageUI.Text>
                    <StarRating storeRating={storeRating}/>
                    
                  </MyPageUI.Flex>
                  <MyPageUI.Text fontSize="12px" color="gray">{useDateFormat(orderTime)}</MyPageUI.Text>
                  <MyPageUI.Flex gap="10px">
                    {items.map((item, index) => (
                      <MyPageUI.Flex gap="5px" key={index}>
                        <MyPageUI.Text fontSize="12px">
                          {item.itemName}
                        </MyPageUI.Text>
                        <MyPageUI.Text fontSize="12px">
                          {item.quantity}개
                        </MyPageUI.Text>
                      </MyPageUI.Flex>
                    ))}
                  </MyPageUI.Flex>
                  <MyPageUI.Text fontSize="12px" fontWeight="600">
                    {totalPrice} 원
                  </MyPageUI.Text>
                </MyPageUI.Flex>
              </StyledBox>
            )
          )}
        </>
      )}
    </>
  );
};

const StyledImage = styled(Image)`
  border-radius: 13px;
`;

const StyledBox = styled(CommonBox)`
  padding: 15px;
  display: flex;
  gap: 25px;
`;

OrderListPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default OrderListPage;
