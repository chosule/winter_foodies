import CommonButton from "@/components/ui/Button/CommonButton";
import styled from "@emotion/styled";
import { MainUI } from "../style";
type TMockData = {
  id: number;
  name: string;
  img?: string;
  title?: string;
};

const MOCK_DATA: TMockData[] = [
  { id: 1, name: "붕어빵", img: "/img/arrowIcon.svg", title: "HOT" },
  { id: 2, name: "어묵" },
  { id: 3, name: "호떡", img: "/img/arrowIcon.svg", title: "HOT" },
  { id: 4, name: "떡볶이" },
  { id: 5, name: "다코야키" },
];
const RearTimeWordsPc = () => {
  return (
    <StyledFlexCustom gap="10px" width="80%">
      {MOCK_DATA.map((snack) => (
        <StyledBoxBtn
          key={snack.id}
          width="0"
          height="0"
        >
          {snack.name}
        </StyledBoxBtn>
      ))}
    </StyledFlexCustom>
  );
};

const StyledFlexCustom = styled(MainUI.Flex)`
  flex-wrap: wrap;
`;

const StyledBoxBtn = styled(CommonButton)`
  border-radius: 10px;
  padding: 15px;
  color: #000;
  border:1px solid #dd8037;
`;

export default RearTimeWordsPc;
