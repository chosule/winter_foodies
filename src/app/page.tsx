import Link from "next/link";
import MenuSearch from "./_components/MenuSearch";
import Image from "next/image";

type ButtonImage = {
  id: number;
  imgName: string;
  url: string;
};
const buttonImages: ButtonImage[] = [
  { id: 1, imgName: "붕어빵", url: "/img/icon1.png" },
  { id: 2, imgName: "어묵", url: "/img/icon2.png" },
  { id: 3, imgName: "군밤", url: "/img/icon9.png" },
  { id: 4, imgName: "호떡", url: "/img/icon7.png" },
  { id: 5, imgName: "계란빵", url: "/img/icon6.png" },
  { id: 6, imgName: "고구마", url: "/img/icon5.png" },
  { id: 7, imgName: "다코야끼", url: "/img/icon3.png" },
  { id: 8, imgName: "호두과자", url: "/img/icon4.png" },
  { id: 9, imgName: "국화빵", url: "/img/icon8.png" },
];
const nearSnack = [
  { id: 1, store: "명지붕어빵", distance: 30 },
  { id: 2, store: "따쿠야끼", distance: 10 },
  { id: 3, store: "일동계란빵", distance: 20 },
  { id: 4, store: "찰떡호떡", distance: 5 },
  { id: 5, store: "맛나분식", distance: 15 },
];
export default function HomePage() {
  return (
    <div className="mt-[20px] flex flex-col gap-[50px]">
      <MenuSearch />
      <div className="grid grid-cols-3 justify-items-center gap-5">
        {buttonImages.map(({ url, id, imgName }) => (
          <div key={id}>
            <Link
              href={`main/menu-detail/${id}`}
              className="flex items-center flex-col gap-4"
            >
              <Image src={url} alt={imgName} width={50} height={50} />
              <p>{imgName}</p>
            </Link>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="flex flex-col gap-[18px]">
        <div>
          <span className="text-[18px] font-bold">
            지금 나와 가장 가까운 간식
          </span>
          <span className="text-color-orange text-[18px] font-bold">TOP5</span>
        </div>
        <div className="flex flex-col gap-6">
          {nearSnack.map((snack) => (
            <div className="flex items-center gap-8" key={snack.id}>
              <div className="w-[43px] bg-color-orange h-[43px] text-center text-color-white rounded-md flex items-center justify-center font-bold">
                {snack.id}
              </div>
              <div className="grid grid-cols-2 border p-3 w-full rounded-md">
                <p className="font-bold justify-self-center">{snack.store}</p>
                <div className="flex items-center gap-2 justify-self-center">
                  <span className="text-xs">현재나와</span>
                  <span className="text-xs font-bold">{snack.distance}m</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
