import getCart from "@/app/(afterLogin)/cart/_lib/getCart";
import getStoreMenu from "@/app/(beforeLogin)/store/[menuId]/[menu]/[storeName]/_lib/getStoreMenu";
import { FaCartPlus } from "react-icons/fa6";
import useSWRMutation from "swr/mutation";
import { useSession } from "next-auth/react";

type Props = {
  params: {
    menuId: string;
    storeName: string;
  };
};

const fetcher = async (
  url: string,
  {
    arg,
  }: { arg: { id: string; price: number; userId: string; storeName: string } }
) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    });
    if (!res.ok) {
      const errorDetails = await res.json();
      console.error("Fetch error details: ", errorDetails);
      throw new Error("Failed to add to cart");
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export default function MenuPriceList({ params }: Props) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { menuId, storeName } = params;
  const { storeMenu } = getStoreMenu(menuId, storeName);

  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    fetcher
  );

  const addToCart = async (menu: { id: string; price: number }) => {
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      await trigger({ id: menu.id, price: menu.price, userId, storeName });
      alert("장바구니에 추가되었습니다.");
    } catch (error) {
      alert("장바구니에 추가하는 데 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {storeMenu?.data.map((menu) => (
        <div
          key={menu.id}
          className="w-full h-[72px] bg-color-white flex items-center justify-around rounded-md"
        >
          <p className="font-medium">{menu.id}</p>
          <p className="font-medium">{menu.price} 원</p>
          <button
            onClick={() => addToCart({ id: menu.id, price: menu.price })}
            className="rounded-[10px] bg-color-gray-10 h-[55px] flex flex-col items-center justify-center p-2 gap-1 hover:bg-color-orange hover:text-color-white"
          >
            <FaCartPlus />
            <p className="text-[10px] font-medium ">추가하기</p>
          </button>
        </div>
      ))}
    </div>
  );
}
