import MenuSearch from "./MenuSearch";

const MainLeftPc = () => {
  return (
    <div className="h-screen relative hidden md:block">
      <div className="flex flex-col justify-center h-full gap-3">
        <div className="flex gap-[10px] flex-col">
          <p className="text-[15px]">우리와 가까운 간식,</p>
          <div className="flex flex-col">
            <h3 className="text-[25px] italic font-[600]">Winter Foodies</h3>
          </div>
        </div>
        <MenuSearch />
        {/* <RearTimeWordsPc /> */}
      </div>
    </div>
  );
};

export default MainLeftPc;
