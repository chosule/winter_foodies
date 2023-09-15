import CommonBox from "@/components/common/CommonBox/CommonBox";
import styled from "@emotion/styled";
import { MainUI } from "../style";
import { useState, useEffect } from "react";

const MOCK_DATA = [
  { id: 1, name: "붕어빵" },
  { id: 2, name: "어묵" },
  { id: 3, name: "호떡" },
  { id: 4, name: "떡볶이" },
  { id: 5, name: "다코야키" },
];

const RearTimeSearchWords = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % MOCK_DATA.length);
    }, 3000);

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

  return (
    <MainUI.Wrapper>
      <MainUI.Text textAlign="left">지금 인기있는 간식이에요!</MainUI.Text>
      <StyledItemWrap>
        <StyledItemUl>
          {MOCK_DATA.map((item, index) => (
            <StyledItemLi
              key={item.id}
              style={{
                display: index === currentItem ? "flex" : "none",
              }}
            >
              <StyledText>{item.id}</StyledText>
              <StyledText>{item.name}</StyledText>
            </StyledItemLi>
          ))}
        </StyledItemUl>
      </StyledItemWrap>
    </MainUI.Wrapper>
  );
};
const StyledItemWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

const StyledItemUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 13px 18px;
`;

const StyledText = styled.p`
  font-weight: 600;
`;
const StyledItemLi = styled.li`
  display: flex;
  font-size: 16px;
  background-color: pink;
  gap: 10px;
`;

export default RearTimeSearchWords;
