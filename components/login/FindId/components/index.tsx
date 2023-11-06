import TextField from "@/components/common/Input/CommonInput";
import { AuthUI } from "../../style";
import CommonButton from "@/components/common/Button/CommonButton";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import {
  TAuthCodeSchema,
  authCodeSchema,
} from "@/components/Login/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import useContextModal from "@/context/hooks/useContextModal";
import { useRouter } from "next/router";
import CommonInfoBox from "@/components/common/CommonBox/CommonInfoBox";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TFindIdRequest, TFindIdResponse } from "@/types/api/findIdType";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useEffect, useState } from "react";
import useLogin from "@/hooks/auth/useAuth";

const FindId = () => {
  const modal = useContextModal();
  const router = useRouter();
  const [dataEmail, setDataEmail] = useState();
  const { findIdApi } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<TAuthCodeSchema>({
    resolver: zodResolver(authCodeSchema),
  });

  const submitPhone = () => {
    openNotice();
  };

  useEffect(() => {
    if (dataEmail !== undefined) {
      openAlert(dataEmail);
    }
  }, [dataEmail]);

  const onSubmit: SubmitHandler<TAuthCodeSchema> = (data) => {
    findIdApi.mutate(data, {
      onSuccess: (res) => {
        console.log("res--->", res);
        setDataEmail(res.email);
        router.push("/login");
      },
      onError: (err) => {
        console.log("err", err);
      },
    });
  };

  const onError: SubmitErrorHandler<TAuthCodeSchema> = (error) => {
    console.log("error --->", error);
  };

  const openAlert = (data: TFindIdResponse) => {
    modal.openAlert({
      title: "알림",
      message: `회원님의아이디는 \n ${dataEmail}입니다. \n 로그인페이지로 이동합니다.`,
      btnText: "확인",
    });
  };
  const openNotice = () => {
    modal.openNotice({
      title: "알림",
      message: `핸드폰 번호가 \n 전송되었습니다.`,
      btnText: "확인",
    });
  };
  return (
    <>
      <HeaderLayout headerTitle="아이디찾기" />
      <AuthUI.Wrapper>
        <AuthUI.Flex gap="26px">
          <CommonInfoBox infotitle="등록된 휴대폰 번호로 찾기" />
          <AuthUI.Flex>
            <AuthUI.Flex flex="0.8">
              <AuthUI.FormWrap onSubmit={handleSubmit(onSubmit, onError)}>
                <AuthUI.Flex gap="10px">
                  <AuthUI.Flex gap="10px">
                    <AuthUI.Label>핸드폰번호</AuthUI.Label>
                    <AuthUI.Flex gap="20px" flexDirection="initial">
                      <AuthUI.Flex>
                        <TextField
                          {...register("phoneNumber", {
                            required: true,
                          })}
                          placeholder="핸드폰번호를 입력해주세요."
                          errorMsg={errors.phoneNumber?.message}
                        />
                      </AuthUI.Flex>
                      <CommonButton variant="contained">인증</CommonButton>
                    </AuthUI.Flex>
                  </AuthUI.Flex>

                  <AuthUI.Flex gap="10px">
                    <AuthUI.Label>인증번호</AuthUI.Label>
                    <AuthUI.Flex gap="20px" flexDirection="initial">
                      <AuthUI.Flex>
                        <TextField
                          {...register("authCode", {
                            required: true,
                          })}
                          placeholder="인증번호를 입력해주세요."
                          errorMsg={errors.authCode?.message}
                        />
                      </AuthUI.Flex>
                      <CommonButton
                        variant="contained"
                        type="submit"
                        disabled={!isDirty || !isValid}
                      >
                        확인
                      </CommonButton>
                    </AuthUI.Flex>
                  </AuthUI.Flex>
                </AuthUI.Flex>
              </AuthUI.FormWrap>
            </AuthUI.Flex>
          </AuthUI.Flex>
        </AuthUI.Flex>
      </AuthUI.Wrapper>
    </>
  );
};

export default FindId;
