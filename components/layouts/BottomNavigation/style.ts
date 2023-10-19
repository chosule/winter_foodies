import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  width: 508px;
  background-color: #fff;
  height: 96px;

  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
  }
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
