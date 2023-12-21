import styled from "@emotion/styled";

export default function ReviewRegist() {
     
     return(
          <div>
               <StyledOverlay/>
               <StyledContent>
                    <textarea placeholder="리뷰를 입력해주세요."></textarea>
               </StyledContent>
          </div>
     )
}


const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgb(0 0 0 / 65%);
`;

const StyledContent = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 70%;
  padding: 16px;
  min-width: 287px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f3f3f3;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;