import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonButton from "@/components/ui/Button/CommonButton";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";

const CounterQuantity = ({ handleIncrementQuantity, items ,handleDecrementQuantity }) => {
  return (
    <StyledWrap>
      <CartUI.Text>{items.quantity * items.price} 원</CartUI.Text>
      <StyledQuantityBox gap="40px">
        <StyledButton backgroundcolor="transparent" width="0px">
          <HiPlus
            onClick={() => {
              handleIncrementQuantity(items.itemId);
            }}
            style={{
              width: "30px",
              height: "30px",
              padding: "5px",
              background: "#fff",
              borderRadius: "100%",
            }}
          />
        </StyledButton>
        {items.quantity}
        <StyledButton backgroundcolor="transparent" width="0px">
          <FaMinus
            onClick={() => {handleDecrementQuantity(items.itemId)}}
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
    </StyledWrap>
  );
};

const StyledWrap = styled(CartUI.Flex)`
  width:100%;
  justify-content:space-between;
`
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
