import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
};
const Rating = ({ rating }: Props) => {
  return (
    <div className="flex">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar className="text-[12px] text-color-orange" key={i} />
      ))}
    </div>
  );
};

export default Rating;
