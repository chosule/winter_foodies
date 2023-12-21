import styled from "@emotion/styled";
import Modal from "react-modal";
import CommonButton from "../ui/Button/CommonButton";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { ModalUI } from "./style";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

Modal.setAppElement("#__next");

export default function ReviewRegist({ storeNames, onClose, isOpen }) {
  const [rating, setRating] = useState(0);

  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === "file") {
      setFile(files && files[0]);
      console.log("files?", files[0]);
      return;
    }
  };

  const handleStarClick = (index) => {
    console.log("index", index);
    setRating(index + 1);
  };
  return (
    <div>
      <ModalUI.Overlay />
      <ModalUI.Content isOpen={isOpen} minWidth="400px" padding="40px">
        <StyledForm>
          <ModalUI.Text fontWeight="600" fontSize="20px">
            {storeNames}
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
          <StyledTextarea placeholder="리뷰를 입력해주세요." />
          <StyledFlex gap="10px">
            <StyledFileInputContainer>
              <StyledFileInput
                type="file"
                accept="image/*"
                name="file"
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
          <CommonButton onClick={onClose}>등록하기</CommonButton>
        </StyledForm>
      </ModalUI.Content>
    </div>
  );
}

const StyledFlex = styled(ModalUI.Flex)`
  margin-left: 30px;
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

const StyledTextarea = styled.textarea`
  border: none;
  width: 300px;
  height: 300px;
  padding: 15px;
  resize: none;
  border: 1px solid #eaeaea;
  border-radius: 13px;
`;
