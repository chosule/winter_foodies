import useGeolocation from "@/hooks/useGeolacation";
import styled from "@emotion/styled";
import { useEffect } from "react";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import RefreshIcon from "@/public/img/refreshIcon";
import { useProjectApi } from "@/context/hooks/useDataContextApi";

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
  const { handleSuccess } = useGeolocation();
  const { client } = useProjectApi();

  // const { isLoading, error, data } = useQuery(["searchData"], () =>
  //   client.searchMap()
  // );

  // useEffect(() => {
  //   const container = document.getElementById("map");
  //   if (!isLoading && data) {
  //     // 데이터 수정 및 상태 업데이트
  //     const updatedMarkers = data.map((datas) => ({
  //       ...datas,
  //       latitude: parseFloat(datas.latitude), // 문자열을 숫자로 변환
  //       longitude: parseFloat(datas.longitude), // 문자열을 숫자로 변환
  //     }));

  //     // Kakao 지도 API 스크립트 동적으로 로드
  //     const script = document.createElement("script");

  //     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`;
  //     script.async = true;
  //     document.head.appendChild(script);

  //     script.onload = () => {
  //       window.kakao.maps.load(() => {
  //         const mainPosition = new window.kakao.maps.LatLng(
  //           updatedMarkers[0].latitude, // 예시로 첫 번째 마커의 위치를 사용
  //           updatedMarkers[0].longitude
  //         );

  //         const options = {
  //           center: mainPosition,
  //           level: 5,
  //         };
  //         const map = new window.kakao.maps.Map(container, options);

  //         var imageSize = new window.kakao.maps.Size(24, 35);

  //         var markerImage = new window.kakao.maps.MarkerImage(
  //           imageSrc,
  //           imageSize
  //         );

  //         updatedMarkers.forEach((marker) => {
  //           const position = new window.kakao.maps.LatLng(
  //             marker.latitude,
  //             marker.longitude
  //           );

  //           const mainMarker = new window.kakao.maps.Marker({
  //             position: position,
  //             image: markerImage,
  //             title: marker.name,
  //           });
  //           mainMarker.setMap(map);
  //         });
  //       });
  //     };

  //     return () => {
  //       // 컴포넌트 언마운트 시 스크립트 제거
  //       document.head.removeChild(script);
  //     };
  //   }
  // }, [isLoading, data]);

  return (
    <>
      <StyledMapContainer id="map" />
      <StyleBox>
        <RefreshIcon />
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
