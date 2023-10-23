import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../components/Main/style";
import MenuDetailTab from "../../components/Main/components/mainMenu/MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import { useEffect, useState } from "react";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import styled from "@emotion/styled";

type dataProps = {
  id: string;
};

const MainMenuDetail = ({ id }: dataProps) => {
  const { client } = useProjectApi();
  // const [menuDetails, setMenuDetails] = useState([]);
  // const { isLoading, error, data } = useQuery(["mainPageNearby"], () =>
  //   client.mainPageNearby(id)
  // );

  // useEffect(() => {
  //   if (data) {
  //     setMenuDetails(data);
  //   }
  // }, [data]);
  // console.log("menudetail결과", menuDetails);
  return (
    <>
      <HeaderLayout />
      <div>디테일 페이지</div>
      {/* {menuDetails.map((menuDetail) => (
          <>
            <MainUI.Wrapper>
              <StyledBox width="100%" backgroundcolor="#ddd">
                <div>이미지영역</div>
                <div>
                  <p>{menuDetail.name}</p>
                  <MainUI.Flex>
                    <p>{menuDetail.address}</p>
                    <p>{menuDetail.distance}</p>
                  </MainUI.Flex>
                </div>
                <div>평점</div>
              </StyledBox>
            </MainUI.Wrapper>
          </>
        ))} */}
    </>
  );
};

const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default MainMenuDetail;
