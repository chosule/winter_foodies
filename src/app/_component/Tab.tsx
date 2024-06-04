// import { SyntheticEvent, useState } from "react";
// import SalesRateDetailPage from "@/src/app/(beforeLogin)/main/menu-detail/[id]/salesRateDetailPage";
// import NearbyDetailPage from "@/src/app/(beforeLogin)/main/menu-detail/[id]/nearbyDetailPage";
// import ReviesDetailPage from "@/src/app/(beforeLogin)/main/menu-detail/[id]/nearbyDetailPage";
// import GradeDetailPage from "@/src/app/(beforeLogin)/main/menu-detail/[id]/gradeDetailPage";
// import Box from "@/src/components/ui/Box";

// const MenuDetailTab = () => {
//   const [current, setCurrent] = useState(0);

//   const handleTab = (e: SyntheticEvent, value: number) => {
//     setCurrent(value);
//   };
//   return (
//     <Box>
//       <StyledTabs value={current} onChange={handleTab}>
//         <StyledTab label="가까운 순" />
//         <StyledTab label="판매량 순" />
//         <StyledTab label="리뷰 순" />
//         <StyledTab label="별점 순" />
//       </StyledTabs>
//       {current === 0 && <NearbyDetailPage />}
//       {current === 1 && <SalesRateDetailPage />}
//       {current === 2 && <ReviesDetailPage />}
//       {current === 3 && <GradeDetailPage />}
//     </Box>
//   );
// };

// const StyledBox = styled(Box)``;
// const StyledTabs = styled(Tabs)`
//   .MuiTabs-indicator {
//     display: none;
//   }
//   .MuiTabs-flexContainer {
//     gap: 10px;
//   }
//   .Mui-selected {
//     background-color: #dd8037;
//     color: #fff !important;
//   }
// `;
// const StyledTab = styled(Tab)`
//   background-color: #ddd;
//   border-radius: 18px;
//   min-height: 33px;
//   padding: 6px 16px;
// `;

// export default MenuDetailTab;
