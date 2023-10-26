import styled from "@emotion/styled";
import { useRouter } from "next/router";
import CommonButton from "@/components/common/Button/CommonButton";
import { nearbyState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";

const HeaderLayout = () => {
  const router = useRouter();
  const nearbyData = useRecoilValue(nearbyState);
  const category = nearbyData[0]?.category;
  return (
    <>
      <StyleWrap>
        <StyleButton
          onClick={() => {
            router.back();
          }}
        />
        {category && <StyleText>{category}</StyleText>}
      </StyleWrap>
    </>
  );
};

const StyleWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
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
