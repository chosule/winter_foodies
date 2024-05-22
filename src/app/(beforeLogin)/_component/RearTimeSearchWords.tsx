import { useState, useEffect } from "react";
import Box from "@/src/components/ui/Box";

type TMockData = {
  id: number;
  name: string;
  img?: string;
  title?: string;
};

const MOCK_DATA: TMockData[] = [
  { id: 1, name: "붕어빵", img: "/img/arrowIcon.svg", title: "HOT" },
  { id: 2, name: "어묵" },
  { id: 3, name: "호떡", img: "/img/arrowIcon.svg", title: "HOT" },
  { id: 4, name: "떡볶이" },
  { id: 5, name: "다코야키" },
];

const RearTimeSearchWords = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % MOCK_DATA.length);
    }, 3500);

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

  return (
    <div className="flex gap-[17px] flex-col">
      <p className="text-[16px] test-left font-[600]">
        지금 인기있는 간식이에요 !
      </p>
      <div className="overflow-hidden w-full">
        <ul className="border border-[#dd8037] rounded-[10px] py-[14px] px-[18px] bg-white">
          {MOCK_DATA.map((item, index) => (
            <li
              key={item.id}
              className={`text-[16px] gap-[10px] relative items-center ${
                index === currentItem ? "flex" : "none"
              }`}
            >
              <Box
                className="flex items-center justify-center"
                width="26px"
                height="27px"
              >
                <p className="text-white text-[14px]">{item.id}</p>
              </Box>
              <p className="text-[#353535]">{item.name}</p>
              <div className="absolute top-[-12px] left-[67px]">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.img}
                    width="40px"
                    height="40px"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RearTimeSearchWords;
