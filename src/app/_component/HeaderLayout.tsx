import { useRouter } from "next/navigation";
import StarRating from "./StarRating";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  headerTitle: string;
  storeRating?: string;
};

const HeaderLayout = ({ headerTitle, storeRating }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full grid grid-cols-3 items-center h-[77px]">
      <button
        onClick={() => {
          router.back();
        }}
      >
        <FaArrowLeft />
      </button>
      <div className="flex items-center">
        {headerTitle && <p className="text-[20px] font-bold">{headerTitle}</p>}
        {storeRating && <StarRating storeRating={storeRating} />}
      </div>
    </div>
  );
};

export default HeaderLayout;
