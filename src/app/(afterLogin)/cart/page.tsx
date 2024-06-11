"use client";
import getCart from "./_lib/getCart";
import { HiPlus } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import getOrderList from "./_lib/getOrderList";

export default function CartPage() {
  const { data: cart, isLoading } = getCart();
  const storeName = decodeURIComponent(cart?.storeName as string);
  const router = useRouter();
  const { trigger } = getOrderList();
  const {
    cartItems,
    setInitialCartItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    totalPrice,
  } = useCartStore();

  useEffect(() => {
    if (cart?.data) {
      setInitialCartItems(
        cart.data.map((item) => ({ ...item, quantity: item.quantity || 1 }))
      );
    }
  }, [cart, setInitialCartItems]);

  const orderPrice = totalPrice();

  const handleOrder = async () => {
    const orderData = {
      store: storeName,
      data: cartItems,
    };

    try {
      await trigger(orderData);
      router.push("/order");
      alert("주문이 완료되었습니다.");
    } catch (error) {
      alert("주문이 실패하였습니다.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cart?.data.length === 0) {
    return <div>장바구니에 상품이 담기지 않았습니다.</div>;
  }

  return (
    <>
      {cart?.data && (
        <div className="flex gap-[30px] flex-col">
          <div className="w-full justify-between items-center h-full p-[10px] border-[#dd8037] border rounded-md bg-color-orange">
            {/* {cartState.imageUrl && (
             <Image
               className="rounded-[10px]"
               src={cartState.imageUrl}
               alt="이미지"
               width={50}
               height={50}
             />
           )} */}
            <p className="text-[18px] font-[600] ">{storeName}</p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5">
            {cartItems?.map((items) => (
              <div key={`item${items.id}`}>
                <div className="w-full h-[116px] bg-white flex-col p-[20px] flex border rounded-md justify-between">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[8px]">
                      <p className="font-medium">{items.id}</p>
                      <p className="text-[#a9a9a9] text-[13px] font-medium">
                        개당 {items.price}원
                      </p>
                    </div>
                    <button onClick={() => removeItem(items.id)}>
                      <IoCloseSharp className="w-[20px] h-[20px] text-black" />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <p>{items.price * items.quantity} 원</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => decrementQuantity(items.id)}
                        className="p-[5px] rounded-full bg-color-gray-100"
                      >
                        <FaMinus />
                      </button>
                      <p className="font-medium">{items.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(items.id)}
                        className="p-[5px] rounded-full bg-color-gray-100"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleOrder}
            className="bg-color-orange py-3 rounded-md"
          >
            <p className="text-color-white font-medium">
              {orderPrice}원 주문하기
            </p>
          </button>
        </div>
      )}
    </>
  );
}
