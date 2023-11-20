import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import StoreMenu from "../mainMenuDetailInfo/StoreMenuCart";
import StoreMenuInfo from "../mainMenuDetailInfo/StoreMenuInfo";
import StoreMenuCart from "../mainMenuDetailInfo/StoreMenuCart";

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
      {current === 0 && <StoreMenuCart />}
      {current === 1 && <StoreMenuInfo />}
      {current === 2 && <div>리뷰 탭</div>}
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #dd8037;
    bottom: 27px;
  }
  .MuiTabs-flexContainer {
    gap: 10px;
  }
  .Mui-selected {
    color: #dd8037 !important;
  }
`;
const StyledTab = styled(Tab)`
  min-height: 60px;
  padding: 6px 16px;
  margin-bottom: 20px;
`;

export default MenuDetailInfoTab;
