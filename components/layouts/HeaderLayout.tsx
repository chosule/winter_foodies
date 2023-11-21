import styled from "@emotion/styled";
import { useRouter } from "next/router";
import CommonButton from "@/components/ui/Button/CommonButton";
import { FaRegHeart } from "react-icons/fa";
import useCart from "@/hooks/cart/useCart";
import { FaHeart } from "react-icons/fa";


const HeaderLayout = ({ headerTitle }) => {
  const router = useRouter();

  return (
    <StyledWrap>
      <StyledOuter>
        <StyleButton
          onClick={() => {
            router.back();
          }}
        />
        {headerTitle && <StyleText>{headerTitle}</StyleText>}
        {/* <StyledFavorites>
          {favorites && <button onClick={onClick}><StyledHeartIcons isFavorite={isFavorite}/></button>}
        </StyledFavorites> */}
      </StyledOuter>
    </StyledWrap>
  );
};


const StyledFavorites = styled.div`
  position:absolute;
  right:0;

`
const StyledWrap = styled.section`
  position: relative;
  min-height: 100px;
  height: 100px;
  width: 100%;
  max-width: 511px;
`;
const StyledOuter = styled.div`
  min-height: 100px;
  width: 100%;
  max-width: 460px;
  z-index: 1;
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleButton = styled(CommonButton)`
  background-color: transparent;
  background-image: url(/img/arrow.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

const StyleText = styled.p`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 600;
`;
export default HeaderLayout;
