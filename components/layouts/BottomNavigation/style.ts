import styled from "@emotion/styled";

const NavWrap = styled.div`
  height: 95px;
  width: 100%;
`;
const Nav = styled.nav`
  display: flex;
  max-width: 508px;
  width: 100%;
  height: 95px;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 5px;
  gap: 10px;
  width: 100%;
`;

const Text = styled.p<{ isActive: boolean }>`
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
`;

const CartQuantity = styled.p`
  background-color: pink;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  text-indent: -9999px;
  position: absolute;
  top: -8px;
  right: -5px;
`;
export const NaviUI = {
  Nav,
  NavItem,
  Text,
  NavWrap,
  CartQuantity,
} as const;
