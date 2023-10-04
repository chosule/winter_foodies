import styled from "@emotion/styled";
import { MainUI } from "../style";
import { useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import arrowIcon from "@/public/img/arrowIcon.svg";
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

const RearTimeSearchWords = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % MOCK_DATA.length);
    }, 3500);

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

  return (
    <MainUI.Wrapper gap="17px">
      <MainUI.Text fontSize="16px" textAlign="left">
        지금 인기있는 간식이에요 !
      </MainUI.Text>
      <StyledItemWrap>
        <StyledItemUl>
          {MOCK_DATA.map((item, index) => (
            <StyledItemLi
              key={item.id}
              style={{
                display: index === currentItem ? "flex" : "none",
              }}
            >
              <StyledText color="#353535">{item.id}</StyledText>
              <StyledText color="#353535">{item.name}</StyledText>
              <StyledImgWrap>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.img}
                    width="33px"
                    height="34px"
                  />
                )}
              </StyledImgWrap>
              {item.title && (
                <StyledText color="#DD8037" fontSize="8px">
                  {item.title}
                </StyledText>
              )}
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

const StyledImgWrap = styled.div`
  position: absolute;
  top: -12px;
  left: 90px;
`;
const StyledItemUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 13px 18px;
`;

const StyledText = styled.p<Pick<CSSProperties, "fontSize" | "color">>`
  font-weight: 300;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
  color: ${({ color }) => color};
`;
const StyledItemLi = styled.li`
  display: flex;
  font-size: 16px;
  gap: 10px;
  position: relative;
`;

export default RearTimeSearchWords;
