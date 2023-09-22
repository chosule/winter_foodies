import useGeolocation from "@/hooks/useGeolacation";
import styled from "@emotion/styled";
import { useEffect } from "react";
import CommonBox from "../common/CommonBox/CommonBox";
import Image from "next/image";
import refreshIcon from "@/public/img/refreshIcon.png";
declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  latitude: number;
  longitude: number;
}

const MapContainer = ({ latitude, longitude }: MapProps) => {
  useEffect(() => {
    const container = document.getElementById("map");

    // Kakao 지도 API 스크립트 동적으로 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    // 스크립트 로드 완료 시
    script.onload = () => {
      // Kakao 지도 API 초기화
      window.kakao.maps.load(() => {
        const mainPosition = new window.kakao.maps.LatLng(
          33.453502,
          126.569894
        );
        const options = {
          center: mainPosition,
          level: 5,
        };

        const mainMarker = new window.kakao.maps.Marker({
          position: mainPosition,
        });

        const map = new window.kakao.maps.Map(container, options);

        // 기타 초기화 및 마커 설정
        // ...

        mainMarker.setMap(map);
      });
    };

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <StyledMapContainer id="map" />
      <StyleBox>
        <div></div>
        <Image src={refreshIcon} alt="리프레시아이콘" width={20} />
        <StyeldText>현 위치로 검색</StyeldText>
      </StyleBox>
    </>
  );
};

const StyledMapContainer = styled.div`
  aspect-ratio: 300 / 1000;
`;

const StyleBox = styled(CommonBox)`
  width: 450px;
  position: fixed;
  bottom: 170px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  margin: 0 auto;
  background-color: #853c0d;
`;

const StyeldText = styled.p`
  text-align: center;
  line-height: 3.5;
  color: #fff;
`;
export default MapContainer;
