import MapContainer from "@/components/Around";
import Map from "@/components/Around/Map";
import DefaultLayout, { StyledContent } from "@/components/layouts/Default";
import styled from "@emotion/styled";

const AroundMePage = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};

AroundMePage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout width="100%">{page}</DefaultLayout>;
};

export default AroundMePage;
