import DefaultLayout from "@/components/layouts/Default";
import { MyPageUI } from "./../../components/Mypage/style";
import { BiLockOpen } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import { PiSpeakerHigh } from "react-icons/pi";
import { AiOutlineUnlock } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";
import { useRouter } from "next/router";


type infoType = {
  id: number;
  icon: JSX.Element;
  infoTitle: string;
  path:string;
};

const mypageInfos: infoType[] = [
  { id: 1, icon: <BiLockOpen />, infoTitle: "내정보" , path:'/mypage/myInfo'},
  { id: 2, icon: <AiOutlineHeart />, infoTitle: "찜한매장",path:'mypage/favorite-stores' },
  { id: 3, icon: <GrNotes />, infoTitle: "리뷰관리" ,path:'mypage/review'},
  { id: 4, icon: <BiDollarCircle />, infoTitle: "주문내역" ,path:'mypage/order-rist' },
];

const MyPage = () => {
  const router = useRouter();
  return (
    <div>
      <MyPageUI.Flex flexDirection="column" padding="30px 0" gap="13px">
        <MyPageUI.Flex alignItems="center" gap="10px">
          <MyPageUI.Text fontSize="19px">안녕하세요 !</MyPageUI.Text>
          <MyPageUI.Text fontSize="19px" fontWeight="800">
            붕어러버님
          </MyPageUI.Text>
        </MyPageUI.Flex>
        <MyPageUI.Text fontSize="13px" color="#747474">
          test@naver.com
        </MyPageUI.Text>
      </MyPageUI.Flex>
      {/*  */}
      <StyledBox justifyContent="space-between">
        {mypageInfos.map(({ id, icon, infoTitle ,path}) => {
          return (
            <MyPageUI.Flex key={id} alignItems="center" flexDirection="column">
              <StyledBtn
                backgroundcolor="none"
                onClick={() => router.push(path)}
                >
                  <div style={{ color: "#000", fontSize: "30px" }}>{icon}</div>
                <MyPageUI.Text fontSize="12px" color="#000">{infoTitle}</MyPageUI.Text>
              </StyledBtn>
            </MyPageUI.Flex>
          );
        })}
      </StyledBox>
      {/*  */}
      <StyledFlexCusotom
        flexDirection="column"
        gap="40px"
        padding="30px 0"
        margin="30px 0"
      >
        <StyledCursor width="100%" justifyContent="space-between">
          <MyPageUI.Flex gap="15px" alignItems="center">
            <PiSpeakerHigh style={{ fontSize: "25px" }} />
            <MyPageUI.Text>공지사항</MyPageUI.Text>
          </MyPageUI.Flex>
          <MdArrowForwardIos />
        </StyledCursor>
        <StyledCursor width="100%" justifyContent="space-between">
          <MyPageUI.Flex alignItems="center" gap="15px">
            <AiOutlineUnlock style={{ fontSize: "25px" }} />
            <MyPageUI.Text>로그아웃하기</MyPageUI.Text>
          </MyPageUI.Flex>
          <MdArrowForwardIos />
        </StyledCursor>
      </StyledFlexCusotom>
    </div>
  );
};

const StyledFlexCusotom = styled(MyPageUI.Flex)`
  border-top: 2px solid #ddd;
`;

const StyledCursor = styled(MyPageUI.Flex)`
  cursor: pointer;
`;

const StyledBtn = styled(CommonButton)`
  display:flex;
  flex-direction:column;
  gap:5px;
`
const StyledBox = styled(MyPageUI.Flex)`
  background-color: #fafafa;
  padding: 23px;
  border-radius: 10px;
  position:relative;
  &::after{
    position: absolute;
    top:0;
    content:"",
    width:100%;
    height:1px;
    background-color:#747474;
  }
`;

MyPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default MyPage;
