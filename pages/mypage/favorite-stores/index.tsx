import { MyPageUI } from "@/components/Mypage/style";
import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import styled from "@emotion/styled";
import { FavoriteStoreType } from "@/types/api/favoriteStoreType";
import useConverterMeter from "@/hooks/useConverterMeter";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getHeartStore } from "@/libs/productApi";

export async function getServerSideProps() {
  const heartStorePosts = await getHeartStore();
  return { props: { heartStorePosts } };
}
const FavoriteStoresPage = (props) => {
  const { data: stores, isSuccess } = useQuery(
    ["heartStorePosts"],
    getHeartStore,
    { initialData: props.heartStorePosts }
  );

  return (
    <>
      <HeaderLayout headerTitle="찜한매장" />
      {isSuccess ? (
        <>
          {stores?.data?.map(
            ({
              pictureUrl,
              address,
              distance,
              rating,
              storeName,
              id,
            }: FavoriteStoreType) => (
              <StyledBox
                key={id}
                width="100%"
                height="74px"
                backgroundcolor="#fff"
              >
                <StyledImage
                  src={String(pictureUrl)}
                  alt="사진"
                  width={73}
                  height={73}
                />
                <MyPageUI.Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  padding="10px"
                >
                  <div>
                    {storeName}
                    <MyPageUI.Flex
                      gap="15px"
                      alignItems="center"
                      lineHeight="1.8"
                    >
                      <MyPageUI.Text fontSize="11px" color="#353535">
                        {address}
                      </MyPageUI.Text>
                      <MyPageUI.Text fontSize="11px" color="#353535">
                        {useConverterMeter(Number(distance))}m
                      </MyPageUI.Text>
                    </MyPageUI.Flex>
                  </div>
                  <MyPageUI.Flex alignItems="center">
                    <FaStar style={{ fontSize: "11px", color: "#DD8037" }} />
                    <MyPageUI.Text fontSize="11px">{rating}</MyPageUI.Text>
                  </MyPageUI.Flex>
                </MyPageUI.Flex>
              </StyledBox>
            )
          )}
        </>
      ) : (
        <>찜한매장이 아직 없습니다.</>
      )}
    </>
  );
};

const StyledImage = styled(Image)`
  border-radius: 10px;
`;
const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  gap: 15px;
`;
FavoriteStoresPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default FavoriteStoresPage;
