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
import CommonButton from "@/components/ui/Button/CommonButton";
import {useRouter} from "next/router"
import useContextModal from "@/context/hooks/useContextModal";


const OrderListPage = () => {
  const router = useRouter();
  const modal = useContextModal();

  const {
    orderDetailsApi: { isLoading ,data: orderDatas },
  } = useCart();

  if(isLoading) return <Skeleton/>
  

  const openReview = (storeName) =>{
    console.log('store',storeName)
    modal.openReviewRegist({
      storeNames:`${storeName}`
    })
  }
  

  return (
    <>
      <HeaderLayout headerTitle="주문내역" />
      <MyPageUI.Flex flexDirection="column" gap="30px">
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
                backgroundcolor="#fff"
                height="100%"
                >
                  <MyPageUI.Flex gap="10px">
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
                  </MyPageUI.Flex>
                  <StyledBtn width="100%" backgroundcolor="none">
                    <MyPageUI.Text onClick ={() => openReview(storeName)}color="#dd8037">리뷰 작성하기</MyPageUI.Text>
                  </StyledBtn>
                </StyledBox>
                
                )
            )}
          </>
        )}
      </MyPageUI.Flex>
    </>
  );
};

const StyledBtn = styled(CommonButton)`
  border:1px solid #dd8037;
  border-radius:10px;
`
const StyledImage = styled(Image)`
  border-radius: 13px;
`;

const StyledBox = styled(CommonBox)`
  padding: 18px;
  display: flex;
  flex-direction:column;
  gap:24px;
`;

OrderListPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default OrderListPage;
