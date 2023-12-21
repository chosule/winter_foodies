import { BiSolidStar } from "react-icons/bi";
import styled from "@emotion/styled";

type Props = {
    storeRating?: number
}
export default function StarRating({storeRating}:Props) {
     return(
        <StyledWrap>
            <BiSolidStar style={{color:"#dd8037"}}/>
            <StyledText>{storeRating}</StyledText>
        </StyledWrap>
     )
}



const StyledWrap = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
`

const StyledText = styled.p`
    font-size:11px;
    margin-top:3px;
`