import { Button } from "@/src/components/ui/Button";
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
const RearTimeWordsPc = () => {
  return (
    <div className="flex flex-wrap gap-[10px] w-[80%]">
      {MOCK_DATA.map((snack) => (
        <Button key={snack.id} width="0" height="0">
          {snack.name}
        </Button>
      ))}
    </div>
  );
};

export default RearTimeWordsPc;
