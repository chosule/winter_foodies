import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import MainMenuDetail from "@/pages/main/MainMenuDetail";
import Head from "next/head";
import { StyledLayout } from "./Default";

const MenuDetailTab = () => {
  const [current, setCurrent] = useState(0);

  const handleTab = (e: SyntheticEvent, value: number) => {
    setCurrent(value);
  };
  return (
    <div>
      <StyledBox>
        <StyledTabs value={current} onChange={handleTab}>
          <StyledTab label="가까운 순" />
          <StyledTab label="판매량 순" />
          <StyledTab label="리뷰 순" />
          <StyledTab label="별점 순" />
        </StyledTabs>
        {current === 0 && <MainMenuDetail />}
        {current === 1 && <p>판매량순 페이지</p>}
        {current === 2 && <p>리뷰순 페이지</p>}
        {current === 3 && <p>별점순 페이지</p>}
      </StyledBox>
    </div>
  );
};

const StyledBox = styled(Box)``;
const StyledTab = styled(Tab)``;
const StyledTabs = styled(Tabs)``;

export default MenuDetailTab;

// import { useState } from "react";

// const TabLayout = () => {
//   const [currnetTab, setCurrentTab] = useState("nearby");
//   return (
//     <>
//     <div>
//       <button onClick={() => setCurrentTab("nearby")}>가까운 순</button>
//       <button onClick={() => setCurrentTab("sales")}>판매량 순</button>
//       <button onClick={() => setCurrentTab("reviews")}>리뷰 순</button>
//       <button onClick={() => setCurrentTab("ratings")}>별점 순</button>
//     </div>
//     {currnetTab === "nearby" && <></>}
//     </>
//   );
// };

// export default TabLayout;
