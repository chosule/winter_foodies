import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";

const Wrap = styled.div`
  position:relative;
  height: 100%;
  width:100%;
  min-height:calc( 100vh - 214px);

}
`;

const Virtual = styled.div`
&:after { 
  content: " ";
  position: absolute;
  top: -117px;
  left: -26px;
  width: 112%;
  height: 100vh;
  opacity: .8;
  background-color: rgb(0 0 0 / 65%);
  z-index:4;
}
`



export const SkeletonUI = { Wrap,Virtual } as const;
