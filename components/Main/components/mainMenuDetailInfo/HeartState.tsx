import { heartState } from "@/recoil/atom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { FaRegHeart } from "react-icons/fa6";
import useCart from "@/hooks/cart/useCart";

type Props ={ 
    favorite : boolean;
    id: number;
}
export function HeartState({favorite,id}:Props) {
    const [heartData,setHeartData ] = useRecoilState(heartState);
    
    const {favoriteApi} = useCart();
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() =>{
        setHeartData(favorite);
        console.log('favoriter 상태', favorite)
        
    },[favorite])
    console.log('heartData 상태', heartData)

    const handleClick = (id) =>{
        //query의 id값만 컬러가 바뀌게 설정 
        setHeartData(favorite);
        // console.log('state확인-->', isFavorite);
        favoriteApi.mutate({
            favorite: heartData,
            storeId: id
        },{
            onSuccess:(res) => {
                // console.log('찜하기결과값 --> ', res);
                setHeartData(favorite);
            }
        })
    }
     return(
        <>
            <StyledIcon onClick={handleClick} favorite={favorite}/>
        </>
     )
}


const StyledIcon = styled(FaRegHeart)`
  position: absolute;
  right: 0;
  top: 38px;
  z-index: 2;
  color: ${({ favorite }) => (favorite ? "#dd8037" : "#000")};
`;

export default HeartState;