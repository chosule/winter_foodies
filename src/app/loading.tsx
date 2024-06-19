import Image from "next/image";
import logo from "../../public/img/logomainIcon.png";

export default function loading() {
  return (
    <div className="h-screen absolute g-[rgb(106 106 106 / 26%)]  left-0 w-[116%]">
      <div className="absolute left-[35%] top-[40%]">
        <Image src={logo} alt="로고" width={105} height={140} />
      </div>
    </div>
  );
}
