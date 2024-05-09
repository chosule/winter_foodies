"use client";
import CommonButton, { Button } from "@/src/components/ui/Button";
import useGeolocation, { getCurrentLocation } from "@/src/hooks/useGeolacation";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useContextGeolocation } from "@/src/context/GeoLocationProvider";

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
    <div className="flex items-center justify-center gap-[10px] py-[10px]">
      {currentAddress && <p className="text-[13px]">{currentAddress}</p>}
      <Button height="23px" width="23px" onClick={() => router.reload()} />
    </div>
  );
};

const StyledBtn = styled(CommonButton)`
  background-color: transparent;
  text-indent: -9999px;
  background-image: url("/img/refreshIcon.png");
  background-repeat: no-repeat;
  background-size: 23px;
`;

export default MyLocation;
