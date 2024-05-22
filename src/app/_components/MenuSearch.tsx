"use client";

import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

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
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const getValue = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchWordFilter = () => {
    const filterName = MENU_NAME.find((item) => item.name.includes(value));

    if (filterName) {
      router.push(`/${filterName.path}`);
    } else {
      alert("입력한 메뉴는 준비되지않았습니다");
    }
  };

  return (
    <div className="flex gap-[10px]">
      <TextField
        placeholder="9가지의 길거리 메뉴를 검색해보세요 !"
        onChange={getValue}
        className="w-full h-[40px] border-cyan-950"
      />
      <Button
        className="w-[50px] h-[40px] flex items-center justify-center"
        onClick={searchWordFilter}
      >
        <IoSearch className="text-xl text-color-white" />
      </Button>
    </div>
  );
};

export default MenuSearch;
