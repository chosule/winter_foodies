"use client";

import { MainUI } from "../style";
import TextField from "@/components/ui/Input/CommonInput";
import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";
import { useEffect, useState } from "react";

type TMenuData = {
  id: number;
  name: string;
};
const MENU_NAME: TMenuData[] = [
  { id: 1, name: "붕어빵" },
  { id: 2, name: "어묵" },
  { id: 3, name: "군밤" },
  { id: 4, name: "호떡" },
  { id: 5, name: "계란빵" },
  { id: 6, name: "고구마" },
  { id: 7, name: "다코야끼" },
  { id: 8, name: "호두과자" },
  { id: 9, name: "국화빵" },
];
const MenuSearch = () => {
  const [searchWord, setSearchWord] = useState([]);

  const [value, setValue] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  };

  const handleSearchWord = () => {
    const searchWordFilter = MENU_NAME.filter((item) =>
      item.name.includes(value)
    );
    setSearchWord(searchWordFilter);
  };
  return (
    <MainUI.Flex gap="15px" alignItems="center" justifyContent="space-between">
      <TextField placeholder="가게명, 음식명 검색" />
      <input type="text" onChange={getValue} />
      <StyledButton variant="contained" onClick={handleSearchWord} />
    </MainUI.Flex>
  );
};
const StyledButton = styled(CommonButton)`
  background-image: url(/img/searchImg.png);
  background-repeat: no-repeat;
  background-position: center;
`;
export default MenuSearch;
