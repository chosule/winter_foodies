import styled from "@emotion/styled";

const NavWrap = styled.div`
  height: 95px;
  width: 100%;
`;
const Nav = styled.nav`
  display: flex;
  max-width: 508px;
  width: 100%;
  height:110px;
  background-color: #fff;
  border-top-left-radius:23px;
  border-top-right-radius:23px;
  box-shadow:rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
  rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
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
