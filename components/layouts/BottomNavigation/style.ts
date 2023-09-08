import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 96px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const NaviUI = {
  Nav,
  NavItem,
} as const;
