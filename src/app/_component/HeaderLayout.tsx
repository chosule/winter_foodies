import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import StarRating from "./StarRating";

type Props = {
  headerTitle: string;
  storeRating?: string;
};

const HeaderLayout = ({ headerTitle, storeRating }: Props) => {
  const router = useRouter();
  return (
    <section className="relative h-[70px] w-full flex">
      <div className="grid grid-cols-3 justify-between items-center w-full">
        <button
          className=""
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft />
        </button>
        <div className="flex gap-1 items-center">
          {headerTitle && (
            <p className="text-[20px] font-bold">{headerTitle}</p>
          )}
          {storeRating && <StarRating storeRating={storeRating} />}
        </div>
      </div>
    </section>
  );
};

export default HeaderLayout;
