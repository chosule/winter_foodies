import styled from "@emotion/styled";

const Wrap = styled.div`
  position:relative;
  height: 100vh;
  background-color:pink;
  width:100%;
  ::after{
    content:"",
    position:absolute;
    top:0;
    left:0;
    width:300px;
    height:100vh;
    background-color: red;
    z-index:9999;    
  
  }
`;

export const SkeletonUI = { Wrap } as const;
