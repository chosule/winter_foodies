import CommonButton from "@/components/ui/Button/CommonButton";
import useGeolocation, { getCurrentLocation } from "@/hooks/useGeolacation";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useContextGeolocation } from "@/context/GeoLocationProvider";

const MyLocation = () => {
  const router = useRouter();
  const { handleSuccess, handleError } = useGeolocation();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);

  const location = useContextGeolocation();
  // console.log("확인", location);
  useEffect(() => {
    getCurrentLocation(location.latitude, location.longitude)
      .then((address) => {
        setCurrentAddress(address);
      })
      .catch((error) => {
        handleError(error);
      });
  }, [location]);

  return (
    <StyledFlex>
      {currentAddress && <StyledText>{currentAddress}</StyledText>}
      <StyledBtn height="23px" width="23px" onClick={() => router.reload()} />
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
`;

const StyledBtn = styled(CommonButton)`
  background-color: transparent;
  text-indent: -9999px;
  background-image: url("/img/refreshIcon.png");
  background-repeat: no-repeat;
  background-size: 23px;
`;

const StyledText = styled.p`
  font-size: 13px;
`;
export default MyLocation;
