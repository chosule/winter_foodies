import { useEffect, useState } from "react";
import { phoneNumberPattern } from "@/core/common/regex";

type InValidType = {
  phoneNumber?: string;
};
export default function useValid(changeValue: InValidType) {
  const [isValidState, setIsValidState] = useState({
    isPhoneNumberAuthCode: false,
  });

  const [validText, setValidText] = useState("");
  console.log("validText--->", validText);
  useEffect(() => {
    if (!phoneNumberPattern.test(changeValue.phoneNumber)) {
      //정귯식표현이랑같지않으면 에러메세지가 나타나라
      setValidText("휴대폰 번호를 정확히 입력해 주세요.");
      setIsValidState({ ...isValidState, isPhoneNumberAuthCode: false });
    } else {
      setIsValidState({ ...isValidState, isPhoneNumberAuthCode: true });
    }
  }, []);
  return { isValidState, validText };
}
