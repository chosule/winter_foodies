import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import useCart from "@/hooks/cart/useCart";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { heartState } from "@/recoil/atom";
import { FaRegHeart } from "react-icons/fa6";

const MenuDetailInfoPage = () => {

  const router = useRouter();
  const { name, picture ,id,} = router.query;
  const {favoriteApi} = useCart();
  // const [isFavorite, setIsFavorite] = useState(true);
  const [isFavorite, setIsFavorite] = useRecoilState(heartState);

  const handleClick = () =>{
    setIsFavorite((prev) => !prev);
    favoriteApi.mutate({
      favorite: isFavorite,
      storeId: id
    },{
      onSuccess:(res) =>{
        console.log(res);
      }
    })
  }


  return (
    <>
      <StyledHeaderWrap>
        <HeaderLayout headerTitle={name}/>
        <StyledIcon onClick={handleClick} isFavorite={isFavorite}/>
      </StyledHeaderWrap>
      <Image src={picture} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

const StyledHeaderWrap = styled.div`
  position:relative;
`
const StyledIcon = styled(FaRegHeart)`
  position:absolute;
  right:0;
  top:38px;
  z-index:2;
  color: ${({ isFavorite }) => (isFavorite ? '#000' : '#dd8037')};
  `



MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default MenuDetailInfoPage;
