import BottomNavigation from "./BottomNavigation";
import styled from "@emotion/styled";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div>{children}</div>
    <BottomNavigation />
  </div>
);
