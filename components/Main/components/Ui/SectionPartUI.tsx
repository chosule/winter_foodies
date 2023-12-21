import styled from "@emotion/styled";
import { MainUI } from "../../style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import StarRating from "./StarRating";
import useConverterMeter from "@/hooks/useConverterMeter";
import { MenuDetailData } from "@/types/api/menuType";



export default function SectionPartUi({picture, name,address,distance,rating, ...rest}:MenuDetailData) {

     return(
        <>
            <div>
                <Image
                src={picture}
                alt="이미지"
                width={70}
                height={70}
                style={{ borderRadius: "13px" }}
                />
            </div>
            <MainUI.Flex
                alignItems="center"
                flex="0.9"
                justifyContent="space-between"
                {...rest}
            >
                <MainUI.Flex flexDirection="column" alignItems="start">
                <MainUI.Text>{name}</MainUI.Text>
                <MainUI.Flex gap="10px" alignItems="center">
                    <MainUI.Text fontSize="10px" color="#747474">
                    {address}
                    </MainUI.Text>
                    <MainUI.Text
                    fontSize="10px"
                    color="#747474"
                    lineHeight="1.8"
                    >
                    {useConverterMeter(distance)}km
                    </MainUI.Text>
                </MainUI.Flex>
                </MainUI.Flex>
                <StarRating storeRating={rating}/>
            </MainUI.Flex>
        </>
     )
}

