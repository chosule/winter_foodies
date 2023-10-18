import DefaultLayout from "@/components/layouts/Default";
import { MyPageUI } from "./../../components/Mypage/style";
import { BiLockOpen } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import styled from "@emotion/styled";
import CommonButton from "@/components/common/Button/CommonButton";

const mypageInfos = [
  { id: 1, iconName: `<BiLockOpen>`, infoTitle: "내정보" },
  { id: 2, iconName: "AiOutlineHeart", infoTitle: "찜한매장" },
  { id: 3, iconName: "GrNotes", infoTitle: "리뷰관리" },
  { id: 4, iconName: "BiDollarCircle", infoTitle: "주문내역" },
];

const MyPage = () => {
  return (
    <div>
      <MyPageUI.Flex flexDirection="column">
        <MyPageUI.Text fontSize="19px" fontWeight="bold">
          안녕하세요 ! 붕어러버님
        </MyPageUI.Text>
        <MyPageUI.Text>test@naver.com</MyPageUI.Text>
      </MyPageUI.Flex>
      {/*  */}
      <StyledBox justifyContent="space-between">
        {mypageInfos.map((info) => {
          return (
            <MyPageUI.Flex alignItems="center" flexDirection="column">
              <CommonButton backgroundcolor="none">
                {info.iconName}
              </CommonButton>
              <MyPageUI.Text fontSize="12px">{info.infoTitle}</MyPageUI.Text>
            </MyPageUI.Flex>
          );
        })}
        {/* <MyPageUI.Flex alignItems="center" flexDirection="column">
          <CommonButton backgroundcolor="none">
            <BiLockOpen style={{ fontSize: "30px", color: "#000" }} />
          </CommonButton>
          <MyPageUI.Text fontSize="12px">내정보</MyPageUI.Text>
        </MyPageUI.Flex>
        <MyPageUI.Flex alignItems="center" flexDirection="column">
          <CommonButton backgroundcolor="none">
            <AiOutlineHeart style={{ fontSize: "30px", color: "#000" }} />
          </CommonButton>
          <MyPageUI.Text fontSize="12px">찜한매장</MyPageUI.Text>
        </MyPageUI.Flex>
        <MyPageUI.Flex alignItems="center" flexDirection="column">
          <CommonButton backgroundcolor="none">
            <GrNotes style={{ fontSize: "30px", color: "#000" }} />
          </CommonButton>
          <MyPageUI.Text fontSize="12px">리뷰관리</MyPageUI.Text>
        </MyPageUI.Flex>
        <MyPageUI.Flex alignItems="center" flexDirection="column">
          <CommonButton backgroundcolor="none">
            <BiDollarCircle style={{ fontSize: "30px", color: "#000" }} />
          </CommonButton>
          <MyPageUI.Text fontSize="12px">주문내역</MyPageUI.Text>
        </MyPageUI.Flex> */}
      </StyledBox>
    </div>
  );
};

const StyledBox = styled(MyPageUI.Flex)`
  background-color: #fafafa;
  padding: 23px;
  border-radius: 10px;
`;

MyPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default MyPage;
