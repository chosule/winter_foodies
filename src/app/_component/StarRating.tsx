import { BiSolidStar } from "react-icons/bi";

export default function StarRating({
  storeRating,
}: {
  storeRating: string | undefined;
}) {
  return (
    <div className="flex items-center gap-[3px] ml-[10px]">
      <BiSolidStar className="text-[#dd8037]" />
      <p className="text-[11px] mr-[-10] leading-[3]">{storeRating}</p>
    </div>
  );
}
