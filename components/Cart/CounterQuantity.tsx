import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonButton from "@/components/ui/Button/CommonButton";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { GetCartDataDetailType } from "@/types/api/getCartType";


type Props ={
  handleIncrementQuantity: () => void;
  handleDecrementQuantity: () => void;
  items: GetCartDataDetailType
}
const CounterQuantity = ({ handleIncrementQuantity, items ,handleDecrementQuantity }:Props) => {
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
              width: "26px",
              height: "26px",
              padding: "5px",
              borderRadius: "100%",
              border:"1px solid #dd8037"
            }}
          />
        </StyledButton>
        {items.quantity}
        <StyledButton backgroundcolor="transparent" width="0px">
          <FaMinus
            onClick={() => {handleDecrementQuantity(items.itemId)}}
            style={{
              width: "26px",
              height: "26px",
              padding: "5px",
              borderRadius: "100%",
              border:"1px solid #dd8037"

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
  align-items:center;
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
