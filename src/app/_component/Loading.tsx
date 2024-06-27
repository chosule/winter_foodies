import Image from "next/image";
import logo from "../../../public/img/logomainIcon.png";

export default function Loading({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen absolute g-[rgb(106 106 106 / 26%)]  left-0 w-[100%]">
      <div className="flex flex-col items-center modal gap-[15px]">
        <Image src={logo} alt="로고" width={105} height={140} />
        <p className="font-medium">{children}</p>
      </div>
    </div>
  );
}
