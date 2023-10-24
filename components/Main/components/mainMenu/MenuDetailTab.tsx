import { Tab, Tabs, Box } from "@mui/material";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";
import NearbyPage from "@/pages/main/menu-detail/Nearby";

const MenuDetailTab = ({ nearbyData }) => {
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
      {current === 0 && <NearbyPage nearbyData={nearbyData} />}
      {current === 1 && <p>판매량순 페이지</p>}
      {current === 2 && <p>리뷰순 페이지</p>}
      {current === 3 && <p>별점순 페이지</p>}
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
const StyledTab = styled(Tab)``;
const StyledTabs = styled(Tabs)``;

export default MenuDetailTab;
