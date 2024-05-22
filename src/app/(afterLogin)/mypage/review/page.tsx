import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import { Button } from "@/src/components/ui/Button";
import Rating from "@/src/components/ui/Rating";
import Box from "@/src/components/ui/Box";

const ReviewPage = () => {
  return (
    <>
      <HeaderLayout headerTitle="리뷰관리" />
      <div className="flex gap-[15px] flex-col">
        <div>
          <p className="font-[6px]">붕어빵가게 이름</p>
          <p className="text-[#a9a9a9] text-[12px]">2023.10.01 10:25:55 주문</p>
        </div>
        <Box width="100%" height="100%" bg="#dedede">
          <div className="flex justify-between">
            <div className="items-center flex gap-[10px]">
              <Rating rating={5} />
              <p>몇일 전</p>
            </div>
            <Button bg="transparent">
              <p className="leading-[1.8] text-black">삭제</p>
            </Button>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>계란빵 주문</p>
              <p>리뷰 작성 입력란.....</p>
            </div>
            <div>이미지</div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ReviewPage;
