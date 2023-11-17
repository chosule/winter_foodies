import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonButton from "@/components/ui/Button/CommonButton";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { cartState } from "@/recoil/atom";

const CounterQuantity = ({ handlePlus, handleMinus, items }) => {
  const cartData = useRecoilValue(cartState);
  const cartItemFInd = cartData?.items.find(
    (cartItem) => cartItem.itemId === items?.itemId
  );
  const cartQuantity = cartItemFInd?.quantity || 0;

  return (
    <>
      <StyledQuantityBox gap="40px">
        <StyledButton backgroundcolor="transparent" width="0px">
          <HiPlus
            onClick={() => handlePlus(items)}
            style={{
              width: "30px",
              height: "30px",
              padding: "5px",
              background: "#fff",
              borderRadius: "100%",
            }}
          />
        </StyledButton>
        {cartQuantity + 1}
        <StyledButton backgroundcolor="transparent" width="0px">
          <FaMinus
            onClick={() => handleMinus(items)}
            style={{
              width: "30px",
              height: "30px",
              padding: "5px",
              background: "#fff",
              borderRadius: "100%",
            }}
          />
        </StyledButton>
      </StyledQuantityBox>
    </>
  );
};

const StyledQuantityBox = styled(CartUI.Flex)`
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(CommonButton)`
  color: #000;
  padding: 0;
  width: 100%;
  min-width: inherit;
  height: 100%;
`;
export default CounterQuantity;
