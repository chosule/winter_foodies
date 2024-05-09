import MenuSearch from "./MenuSearch";
import RearTimeWordsPc from "./RearTimeWordsPc";

const MainLeftPc = () => {
  return (
    <div className="h-full relative z-[999]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-[10px] items-center">
          <p className="text-[15px]">우리와 가까운 간식,</p>
          <div className="flex flex-col">
            <span className="text-[25px] italic font-[600]">Winter</span>
            <span className="underline-title">Foodies</span>
          </div>
        </div>
        <MenuSearch />
        <RearTimeWordsPc />
      </div>
    </div>
  );
};

export default MainLeftPc;
