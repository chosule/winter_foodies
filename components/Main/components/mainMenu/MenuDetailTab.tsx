import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import SalesRateDetailPage from "@/pages/main/menu-detail/[id]/salesRateDetailPage"
import NearbyDetailPage from "@/pages/main/menu-detail/[id]/nearbyDetailPage";
import ReviesDetailPage from "@/pages/main/menu-detail/[id]/nearbyDetailPage";
import GradeDetailPage from "@/pages/main/menu-detail/[id]/gradeDetailPage";


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
      {current === 0 && <NearbyDetailPage />}
      {current === 1 && <SalesRateDetailPage />}
      {current === 2 && <ReviesDetailPage />}
      {current === 3 && <GradeDetailPage />}
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    display: none;
  }
  .MuiTabs-flexContainer {
    gap: 10px;
  }
  .Mui-selected {
    background-color: #dd8037;
    color: #fff !important;
  }
`;
const StyledTab = styled(Tab)`
  background-color: #ddd;
  border-radius: 18px;
  min-height: 33px;
  padding: 6px 16px;
`;

export default MenuDetailTab;
