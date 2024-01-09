import DefaultLayout, { StyledContent } from "@/components/layouts/Default";
import logomainIcon from  "@/public/img/logomainIcon.png"
import Image from "next/image"
import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";
import { CSSProperties } from "react";

type Props = {
  height?: string;
  top?:string
}

const Skeleton = ({height,top}:Props) => {
  return (
    <StyledWrap>
      <StyledVirtual height={height} top={top}></StyledVirtual>
      <StyledImage src={logomainIcon} alt="아이콘" width={110} height={70}/>
      <>
        <StyledDot left="43%"/>
        <StyledDot left="50%"/>
        <StyledDot left="57%"/>
      </>
    </StyledWrap>
  )
};

const StyledWrap = styled.div`
  position:relative;
  height: 100%;
  width:100%;
  min-height:calc( 100vh - 214px);

}
`;

const StyledVirtual = styled.div<Pick<CSSProperties , "top" | "height">>`
&:after { 
  content: "";
  position: absolute;
  top: ${({top}) => (top ? top : "-150px")};
  left: -26px;
  width: 112%;
  height: ${({height}) => (height ? height : "100vh")};
  opacity: .8;
  background-color: rgb(0 0 0 / 65%);
  z-index:4;
}
`



const StyledImage = styled(Image)`
  z-index:10;
  position:absolute;
  left:39%;
  top:20%;
`

const StyledDotAnimation = keyframes`
  0% {
    background: #dd8037;
  }
  50% {
    background: gray;
  }
  100% {
    background: gray;
  }
`;

const StyledDot = styled.div<{left:string}>`
  width: 10px;
  height: 10px;
  background: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  left: ${({left}) => left};
  top: 29%;
  z-index:5;
  animation: ${StyledDotAnimation} 1s 0s infinite linear alternate;
`;



Skeleton.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>
    <StyledContent width="100%">{page}</StyledContent>
  </DefaultLayout>
);

export default Skeleton;
