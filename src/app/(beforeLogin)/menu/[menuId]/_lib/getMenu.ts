"use client";
import useSWR from "swr";
import { GetMenus } from "../_model/menu";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getMenu(menuId: string) {
  const { data: menuData } = useSWR<GetMenus>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/menu-detail/${menuId}`,
    fetcher
  );
  return { menuData };
}
