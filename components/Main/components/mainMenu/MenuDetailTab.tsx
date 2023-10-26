import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import SalesRateDetail from "./SalesRateDetail";
import NearbyDetail from "./NearByDetail";
import ReviesDetail from "./ReviesDetail";
import GradeDetail from "./GradeDetail";

const MenuDetailTab = () => {
  const [current, setCurrent] = useState(0);

  const handleTab = (e: SyntheticEvent, value: number) => {
    setCurrent(value);
  };
  return (
    <StyledBox>
      <StyledTabs value={current} onChange={handleTab}>
        <StyledTab label="가까운 순" />
        <StyledTab label="판매량 순" />
        <StyledTab label="리뷰 순" />
        <StyledTab label="별점 순" />
      </StyledTabs>
      {current === 0 && <NearbyDetail />}
      {current === 1 && <SalesRateDetail />}
      {current === 2 && <ReviesDetail />}
      {current === 3 && <GradeDetail />}
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
const StyledTabs = styled(Tabs)`
  gap: 10px;
  .MuiTabs-indicator {
    display: none;
  }
`;
const StyledTab = styled(Tab)`
  background-color: #ddd;
  border-radius: 18px;
  .Mui-selected {
    background: pink;
    color: red;
  }
`;

export default MenuDetailTab;
