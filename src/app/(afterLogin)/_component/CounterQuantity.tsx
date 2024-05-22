import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonButton, { Button } from "@/src/components/ui/Button";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { GetCartDataDetailType } from "@/src/types/api/getCartType";

type Props = {
  handleIncrement: (itemId: number) => void;
  handleDecrement: (itemId: number) => void;
  items: GetCartDataDetailType;
};

const CounterQuantity = ({
  handleDecrement,
  items,
  handleIncrement,
}: Props) => {
  return (
    <div className="w-[full] justify-between items-center">
      <p>{items.quantity * items.price} 원</p>
      <div className="gap-[40px] justify-between items-center">
        <Button>
          <HiPlus
            className="w-[26px] h-[26px] p-5 rounded-[100%] border border-[#dd8037]"
            onClick={() => {
              handleIncrement(items.itemId);
            }}
          />
        </Button>
        {items.quantity}
        <Button>
          <FaMinus
            className="w-[26px] h-[26px] p-5 rounded-[100%] border border-[#dd8037]"
            onClick={() => {
              handleDecrement(items.itemId);
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default CounterQuantity;
