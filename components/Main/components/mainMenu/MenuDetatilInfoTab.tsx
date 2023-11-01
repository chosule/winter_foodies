import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import SalesRateDetail from "./SalesRateDetail";
import NearbyDetail from "./NearByDetail";
import ReviesDetail from "./ReviesDetail";
import GradeDetail from "./GradeDetail";

const MenuDetailInfoTab = () => {
  const [current, setCurrent] = useState(0);

  const handleTab = (e: SyntheticEvent, value: number) => {
    setCurrent(value);
  };
  return (
    <StyledBox>
      <StyledTabs value={current} onChange={handleTab}>
        <StyledTab label="메뉴" />
        <StyledTab label="정보" />
        <StyledTab label="리뷰" />
      </StyledTabs>
      {current === 0 && <div>메뉴 탭</div>}
      {current === 1 && <div>정보 탭</div>}
      {current === 2 && <div>리뷰 탭</div>}
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #dd8037;
    bottom: 13px;
  }
  .MuiTabs-flexContainer {
    gap: 10px;
  }
  .Mui-selected {
    color: #dd8037 !important;
  }
`;
const StyledTab = styled(Tab)`
  min-height: 33px;
  padding: 6px 16px;
`;

export default MenuDetailInfoTab;
