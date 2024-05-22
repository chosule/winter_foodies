import Image from "next/image";
import mainIcon from "@/public/img/mainIcon.png";

type CommonInfoBoxProps = {
  infotitle?: string;
};
const CommonInfoBox = ({ ...props }: CommonInfoBoxProps) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Image src={mainIcon} alt="아이콘" width={66} height={48} />
      <p className="text-[#853c0d] font-[600]">{props.infotitle}</p>
    </div>
  );
};

export default CommonInfoBox;
