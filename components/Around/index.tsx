import useGeolocation from "@/hooks/useGeolacation";
import styled from "@emotion/styled";
import { useEffect } from "react";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import RefreshIcon from "@/public/img/refreshIcon";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useQuery } from "@tanstack/react-query";
import CommonButton from "../ui/Button/CommonButton";
import CommonInfoBox from "../ui/CommonBox/CommonInfoBox";
import useProduct from "@/hooks/propduct/useProduct";
import { useContextGeolocation } from "@/context/GeoLocationProvider";

declare global {
  interface Window {
    kakao: any;
  }
}

var imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

/**
 *
 * @description
 * 첫화면은 내 현재위치 나오게 하고 주변에 아무것도 없으면 없을수도잇음
 * 버튼 클릭시 주변에 상점이 없을경우 -> 팝업으로 상점이 주변에 없습니다.띄우기
 * 버튼 클릭시 주변에 상점이 있을경우 -> 마커로 상점 보여주기
 */

const MapContainer = () => {
  const location = useContextGeolocation();

  const { client } = useProjectApi();

  const { data: nearSnackData, isLoading } = useQuery(["nearSnack"], () =>
    client.nearDistanceSnack(location?.latitude, location?.longitude)
  );
  console.log("data", nearSnackData);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;

    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(
            location?.latitude,
            location?.longitude
          ),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        mapScript.addEventListener("load", onLoadKakaoMap);

        if (nearSnackData.length > 0) {
          const newNearSnackData = () => {
            nearSnackData.forEach((data) => {
              const lat = data.lat;
              const lon = data.lon;
              data.latlng = new window.kakao.maps.LatLng(lat, lon);
''            return data;
          };
          console.log("??", newNearSnackData);
        }
        if (nearSnackData) {
          for (var i = 0; i < nearSnackData.length; i++) {
            console.log(nearSnackData);
            const imageSize = new window.kakao.maps.Size(24, 34);
            const markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize
            );
            const maker = new window.kakao.maps.Marker({
              map: map,
              position: nearSnackData[i],
            });
          }
        }
      });
    };
  }, [nearSnackData]);

  return (
    <>
      {/* <StyledMapContainer id="map" /> */}
      <div id="map"></div>
      <StyleBox>
        <RefreshIcon />
        {/* <CommonButton width="100%">현 위치로 검색</CommonButton> */}
        <StyeldText>현 위치로 검색</StyeldText>
      </StyleBox>
    </>
  );
};

// const StyledMapContainer = styled.div`
//   aspect-ratio: 300 / 1000;
// `;

const StyleBox = styled(CommonBox)`
  width: 450px;
  position: fixed;
  bottom: 87px;
  transform: translate(0, -50%);
  left: 50%;
  margin-left: -42px;
  z-index: 1;
  background-color: #dd8037;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyeldText = styled.p`
  text-align: center;
  line-height: 3.5;
  color: #fff;
`;

export default MapContainer;
