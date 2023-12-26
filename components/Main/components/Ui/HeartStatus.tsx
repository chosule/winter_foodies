import styled from "@emotion/styled";
import { FaRegHeart } from "react-icons/fa6";

export default function HeartStatus({ favoriteState, handleClick }) {
  console.log("favoriteState", favoriteState);
  return <StyledIcon onClick={handleClick} />;
}

const StyledIcon = styled(FaRegHeart)`
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;
  color: ${(props) => (props.favoriteState ? "orange" : "#000")};
`;
