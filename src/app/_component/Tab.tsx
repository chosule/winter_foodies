"use client";

type Props = {
  tabMenu: string[];
  onSelectTab: (index: number) => void;
  selectedTab: number;
};

const Tab = ({ tabMenu, onSelectTab, selectedTab }: Props): JSX.Element => {
  return (
    <>
      {tabMenu.map((tab, index) => (
        <button
          key={`tab${index}`}
          onClick={() => onSelectTab(index)}
          className={`py-1 px-2 rounded-xl border font-medium text-[13px] hover:bg-color-orange hover:text-color-white ${
            index === selectedTab
              ? "bg-color-orange text-color-white"
              : "bg-color-gray-10"
          }`}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

export default Tab;
