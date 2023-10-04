import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 96px;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 18px;
  gap: 10px;
`;

const Text = styled.p<{ isActive: boolean }>`
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
`;
export const NaviUI = {
  Nav,
  NavItem,
  Text,
} as const;
