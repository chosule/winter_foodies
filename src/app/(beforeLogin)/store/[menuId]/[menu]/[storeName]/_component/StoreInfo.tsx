import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { PiForkKnifeBold } from "react-icons/pi";
import { AiOutlineSmile } from "react-icons/ai";
import { MainUI } from "../../style";
import useProduct from "@/src/hooks/propduct/useProduct";
import { useRouter } from "next/router";

const StoreMenuInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const { storeInfoApi } = useProduct();
  const { isSuccess, data: storeInfo } = storeInfoApi(Number(id));

  return (
    <>
      {isSuccess ? (
        <>
          <div className="w-full h-full bg-[#f3f3f3] flex-col py-[30px] px-[10px] gap-[25px]">
            <div className="flex gap-[10px] pb-[25px]">
              <IoLocationOutline />
              <p>{storeInfo.address}</p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <HiOutlineExclamationCircle />
              <p>{storeInfo.ownerComment}</p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <HiOutlineExclamationCircle />
              <div className="flex leading-[1.5] gap-[10px]">
                <p className="font-[600]">영업중</p>
                <p>매일 11:00 - 20:00</p>
              </div>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <PiForkKnifeBold />
              <p>
                <p>10분 - 20분 예상(조리시간)</p>
              </p>
            </div>
            <div className="flex gap-[10px] pb-[25px]">
              <AiOutlineSmile />
              <p>
                <p>{storeInfo.ownerComment}</p>
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default StoreMenuInfo;
