"use client";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <div className="w-full h-screen flex justify-center absolute bg-color-modalBg top-0 left-0 right-0 bottom-0 modal-bg items-center">
      <div className="bg-color-white rounded-md p-4">
        <TiDelete
          className="text-[30px] ml-auto cursor-pointer"
          onClick={onClickClose}
        />
        {children}
      </div>
    </div>
  );
}
