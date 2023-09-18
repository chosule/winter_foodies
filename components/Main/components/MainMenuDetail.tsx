type dataProps = {
  id: string;
};
const MainMenuDetail = ({ id }: dataProps) => {
  return (
    <>
      <div>메뉴디테일 페이지</div>
      <div>{id}</div>
    </>
  );
};

export default MainMenuDetail;
