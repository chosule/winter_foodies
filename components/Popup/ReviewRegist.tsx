import styled from "@emotion/styled";
import Modal from "react-modal";
import CommonButton from "../ui/Button/CommonButton";
import { FaStar } from "react-icons/fa";
import { ChangeEvent, useEffect, useState } from "react";
import { ModalUI } from "./style";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import useCart from "@/hooks/cart/useCart";
import { ModalProps } from "@/context/types/modalProps";

Modal.setAppElement("#__next");

type Form = {
  image:string;
  textarea:string
}
export default function ReviewRegist({ storeName, isOpen ,close,id}:ModalProps) {
  const [rating, setRating] = useState(0);

  const [file, setFile] = useState();

  const [formData , setFormData] = useState<Form>({
    image:"",
    textarea:""
  })
  const {reviewWriteApi} = useCart();
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
    const { name, files ,value} = e.target;
    console.log('value',value)
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setFormData((prev) =>({
      ...prev,
      [name]:value
    }))
    console.log('form',formData)
  };

  const handleStarClick = (index:number) => {
    // console.log("index", index);
    setRating(index + 1);
  };

  const onSubmit = (e) =>{
    e.preventDefault();

    console.log('formData',formData)
    // const formDataToSend = new FormData();
    // Object.entries(formData).forEach(([key,value]) =>{
    //   formDataToSend.append(key,value)
    // })
    const formDataSend = new FormData();
    formDataSend.append("image",formData.image);
    reviewWriteApi.mutate(
      formDataSend,
      {
        onSuccess:(res) => {
        console.log('res?',res)
      }
    })
  }


  return (
    <div>
      <ModalUI.Overlay />
      <ModalUI.Content isOpen={isOpen} minWidth="400px" padding="40px">
        <StyledForm onSubmit={onSubmit}>
          <StyledCloseIcon onClick={close} />
          <ModalUI.Text fontWeight="600" fontSize="20px">
            {storeName}
          </ModalUI.Text>
          <StyledGradeContainer>
            {[...Array(5)].map((_, index) => (
              <StyledGrade
                key={index}
                onClick={() => handleStarClick(index)}
                filled={rating > index}
              />
            ))}
          </StyledGradeContainer>
          <StyledTextarea 
              placeholder="리뷰를 입력해주세요." 
              type="textarea"
              name="textarea"
              onChange={handleChange}
          />
          <StyledFlex gap="10px">
            <StyledFileInputContainer>
              <StyledFileInput
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange}
                required
              />
              <StyledFileInputLabel>
                <CiImageOn style={{ fontSize: "25px", marginLeft: "5px" }} />
                사진등록
              </StyledFileInputLabel>
            </StyledFileInputContainer>
            {file && (
              <StyledWrap>
                <StyledImage
                  src={URL.createObjectURL(file)}
                  alt="파일이미지"
                  width={65}
                  height={65}
                />
                <StyledDeleteBtn onClick={() => setFile("")}>
                  <TiDelete style={{ fontSize: "20px" }} />
                </StyledDeleteBtn>
              </StyledWrap>
            )}
          </StyledFlex>
          <CommonButton type="submit" width="100%" backgroundcolor="#dd8037">
               <p>등록하기</p>
          </CommonButton>
        </StyledForm>
      </ModalUI.Content>
    </div>
  );
}

const StyledFlex = styled(ModalUI.Flex)`
  margin-left: 9px;
  align-self: start;
`;
const StyledWrap = styled.div`
  position: relative;
`;
const StyledDeleteBtn = styled.button`
  position: absolute;
  top: -11px;
  right: -8px;
`;
const StyledImage = styled(Image)`
  border-radius: 13px;
`;
const StyledFileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const StyledFileInputContainer = styled.label`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 13px;
  border: 1px solid gray;
  border-style: dotted;
  overflow: hidden;
  cursor: pointer;
`;

const StyledCloseIcon = styled(TiDelete)`
  position:absolute;
  right:-32px;
  top:-31px;
  cursor:pointer;
  font-size:32px;
  color:#dd8037;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position:relative;
`;

const StyledFileInputLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  pointer-events: none;
  font-size: 10px;
`;
const StyledGradeContainer = styled.div`
  display: flex;
  gap: 3px;
`;
const StyledGrade = styled(FaStar)<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? "orange" : "gray")};
  font-size: 23px;
`;

const StyledTextarea = styled.input`
  border: none;
  width: 300px;
  height: 300px;
  padding: 15px;
  resize: none;
  border: 1px solid #eaeaea;
  border-radius: 13px;
`;
