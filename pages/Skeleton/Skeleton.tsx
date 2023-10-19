import { SkeletonUI } from "./style";
import DefaultLayout, { StyledContent } from "@/components/layouts/Default";

const Skeleton = () => {
  return <SkeletonUI.Wrap>스켈레톤 페이지만들기</SkeletonUI.Wrap>;
};

Skeleton.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>
    <StyledContent width="100%">{page}</StyledContent>
  </DefaultLayout>
);
export default Skeleton;
