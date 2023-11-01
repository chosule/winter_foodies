import { useEffect, useState } from "react";
import {
  phoneNumberPattern,
  phoneNumberMaxPattern,
  certiNumberPattern,
} from "@/core/common/regex";

type InValidType = {
  phoneNumber?: string;
  authCode?: string;
};
type IsValidStateType = {
  isPhoneNumberAuthCode: boolean | null;
  isCertiCode: boolean | null;
};

export default function useValid(changeValue: InValidType) {
  const [isValidState, setIsValidState] = useState<IsValidStateType>({
    isPhoneNumberAuthCode: null,
    isCertiCode: null,
  });
  const [validText, setValidText] = useState("");
  // console.log("isvalidState", isValidState);
  useEffect(() => {
    if (!changeValue.phoneNumber) {
      setValidText("");
      setIsValidState({ ...isValidState, isPhoneNumberAuthCode: false });
    } else {
      const isValidPhoneNumber = phoneNumberPattern.test(
        changeValue.phoneNumber
      );
      const isValidPhoneNumberMax = phoneNumberMaxPattern.test(
        changeValue.phoneNumber
      );

      if (!isValidPhoneNumber) {
        setIsValidState({ ...isValidState, isPhoneNumberAuthCode: false });
        setValidText("휴대폰 번호를 정확히 입력해 주세요.");
      } else if (!isValidPhoneNumberMax) {
        setIsValidState({ ...isValidState, isPhoneNumberAuthCode: false });
        setValidText("휴대폰 번호가 최대 길이를 초과했습니다.");
      } else {
        setIsValidState({ ...isValidState, isPhoneNumberAuthCode: true });
      }
    }
  }, [changeValue.phoneNumber]);

  useEffect(() => {
    if (!changeValue.authCode) {
      setValidText("");
      setIsValidState({ ...isValidState, isCertiCode: false });
    } else {
      if (!certiNumberPattern.test(changeValue.authCode)) {
        setIsValidState({ ...isValidState, isCertiCode: false });
        setValidText("인증코드를 정확히 입력해주세요.");
      } else {
        setIsValidState({ ...isValidState, isCertiCode: true });
      }
    }
  }, [changeValue.authCode]);

  return { isValidState, validText };
}
