import styled from "@emotion/styled";
import { MainUI } from "../../style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";


export default function SectionPartUi({picture, name,address,distance,rating, ...rest}) {
     
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
                flex="1"
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
                    {distance}m
                    </MainUI.Text>
                </MainUI.Flex>
                </MainUI.Flex>
                <MainUI.Flex width="60px" gap="3px" alignItems="center">
                    <BiSolidStar style={{ color: "#DD8037", fontSize: "15px" }} />
                    <MainUI.Text fontSize="10px">{rating}</MainUI.Text>
                </MainUI.Flex>
            </MainUI.Flex>
        </>
     )
}

