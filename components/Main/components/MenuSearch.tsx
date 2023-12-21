"use client";

import { MainUI } from "../style";
import TextField from "@/components/ui/Input/CommonInput";
import styled from "@emotion/styled";
import CommonButton from "@/components/ui/Button/CommonButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useContextModal from "@/context/hooks/useContextModal";

type TMenuData = {
  id: number;
  name: string;
  path: string;
};

const MENU_NAME: TMenuData[] = [
  { id: 1, name: "붕어빵", path: "main/menu-detail/1?imgName=붕어빵" },
  { id: 2, name: "어묵", path: "main/menu-detail/2?imgName=어묵" },
  { id: 3, name: "군밤", path: "main/menu-detail/3?imgName=군밤" },
  { id: 4, name: "호떡", path: "main/menu-detail/4?imgName=호떡" },
  { id: 5, name: "계란빵", path: "main/menu-detail/5?imgName=계란빵" },
  { id: 6, name: "고구마", path: "main/menu-detail/6?imgName=고구마" },
  { id: 7, name: "다코야끼", path: "main/menu-detail/7?imgName=다코야끼" },
  { id: 8, name: "호두과자", path: "main/menu-detail/8?imgName=호두과자" },
  { id: 9, name: "국화빵", path: "main/menu-detail/9?imgName=국화빵" },
];
const MenuSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const modal = useContextModal();

  const getValue = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchWordFilter = () => {
    const filterName = MENU_NAME.find((item) => item.name.includes(value));

    if (filterName) {
      router.push(`/${filterName.path}`);
    } else {
      modal.openAlert({
        title: "알림",
        message: `입력한 메뉴는 아직 준비되지않았습니다. \n 다른 메뉴를 검색해주세요.`,
        btnText: "확인",
      });
    }
  };

  return (
    <MainUI.Flex gap="15px" alignItems="center" justifyContent="space-between">
      <TextField
        placeholder="9가지의 길거리 메뉴를 검색해보세요 !"
        onChange={getValue}
      />
      <StyledButton variant="contained" onClick={searchWordFilter} height="56px"/>
    </MainUI.Flex>
  );
};
const StyledButton = styled(CommonButton)`
  background-image: url(/img/searchImg.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom:20px;
  border-radius:11px;
  min-width:50px;

`;
export default MenuSearch;
