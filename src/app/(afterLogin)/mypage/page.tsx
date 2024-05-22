import { BiLockOpen } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";
import { PiSpeakerHigh } from "react-icons/pi";
import { AiOutlineUnlock } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userState } from "@/src/recoil/atom";

type infoType = {
  id: number;
  icon: JSX.Element;
  infoTitle: string;
  path: string;
};

const mypageInfos: infoType[] = [
  { id: 1, icon: <BiLockOpen />, infoTitle: "내정보", path: "/mypage/myInfo" },
  {
    id: 2,
    icon: <AiOutlineHeart />,
    infoTitle: "찜한매장",
    path: "mypage/favorite-stores",
  },
  { id: 3, icon: <GrNotes />, infoTitle: "리뷰관리", path: "mypage/review" },
  {
    id: 4,
    icon: <BiDollarCircle />,
    infoTitle: "주문내역",
    path: "mypage/order-rist",
  },
];

const MyPage = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/logout");
  };
  const user = useRecoilValue(userState);
  return (
    <div>
      <div className="flex flex-col p-[30px] gap-[13px]">
        <div className="flex items-center gap-[10px]">
          <p className="text-[19px]">안녕하세요 !</p>
          <p className="text-[19px] font-[800]">붕어러버님</p>
        </div>
        <p className="text-[13px] text-[#747474]">test@naver.com</p>
      </div>
      {/*  */}
      <div className="flex justify-between">
        {mypageInfos.map(({ id, icon, infoTitle, path }) => {
          return (
            <div className="flex flex-col items-center" key={id}>
              <Button bg="none" onClick={() => router.push(path)}>
                <div className="text-black text-[30px]">{icon}</div>
                <p className="text-12px text-black">{infoTitle}</p>
              </Button>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className="flex flex-col gap-[40px] py-[30px] my-[30px]">
        <div className="flex cursor-pointer w-full justify-between">
          <div className="flex gap-[15px] items-center">
            <PiSpeakerHigh className="text-[25px]" />
            <p>공지사항</p>
          </div>
          <MdArrowForwardIos />
        </div>
        {user && (
          <div className="flex cursor-pointer w-full justify-between">
            <div className="flex items-center gap-[15px]">
              <AiOutlineUnlock className="text-[25px]" />
              <p onClick={handleLogout}>로그아웃하기</p>
            </div>
            <MdArrowForwardIos />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
