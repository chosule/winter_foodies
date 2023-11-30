'use client'

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import RefreshIcon from "@/public/img/refreshIcon";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useQuery } from "@tanstack/react-query";
import { useContextGeolocation } from "@/context/GeoLocationProvider";

declare global {
  interface Window {
    kakao: any;
  }
}
const MapContainer = () => {

  const location = useContextGeolocation();

  const { client } = useProjectApi();
  
  const { data: nearSnackData, isLoading,isSuccess } = useQuery(["nearSnack"], () =>
    client.nearDistanceSnack(location?.latitude, location?.longitude)
  );
  console.log('nearSnamck',nearSnackData);

  if(isLoading){
    <div>...로딩중입니다.</div>
  }

  useEffect(() =>{
    if(isSuccess){
      const mapScript = document.createElement("script");
      mapScript.async = true;
      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`
      document.head.appendChild(mapScript);
    
    
      const onLoadKakaoMap = () =>{
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
    
          const options = {
            center: new window.kakao.maps.LatLng(37.5844700386513,126.87946777303193),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          
          if(nearSnackData){
          
            for(var i = 0; i < nearSnackData?.length; i++){
              const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
              const imageSize = new window.kakao.maps.Size(24,35);
              const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
    
              const markerPosition =  new window.kakao.maps.LatLng(nearSnackData[i].lon ,nearSnackData[i].lat );
              const marker = new window.kakao.maps.Marker({
                map : map,
                position: markerPosition,
                title: nearSnackData[i].name,
                image: markerImage
              })
              marker.setMap(map)
            }
          }
            
        });
      }
      mapScript.addEventListener ('load',onLoadKakaoMap);

      return () => mapScript.removeEventListener('load',onLoadKakaoMap);

    }
  },[nearSnackData])



  return (
    <>
      <StyledMap id="map" style={{ width: "100%", height: "100%" }}></StyledMap>
      <StyleBox>
        <RefreshIcon />
        <StyeldText>현 위치로 검색</StyeldText>
      </StyleBox>
    </>
  );
};

// const StyledMapContainer = styled.div`
//   aspect-ratio: 300 / 1000;
// `;

const StyledMap = styled.div`
  min-height: calc(100vh - 100px);
`

const StyleBox = styled(CommonBox)`
  z-index:1;
  width: 450px;
  position: fixed;
  bottom: 87px;
  transform: translate(0, -50%);
  margin-left: 29px;
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