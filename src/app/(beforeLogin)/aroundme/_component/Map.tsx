"use client";
import { useEffect, useRef } from "react";
import getAround from "../_lib/getAround";
import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import logo from "../../../../../public/img/logomainIcon.png";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

export default function Map() {
  const { data: locationData } = getAround();
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  useEffect(() => {
    if (
      isLoaded &&
      locationData &&
      locationData.data.length > 0 &&
      mapRef.current
    ) {
      const bounds = new window.google.maps.LatLngBounds();
      locationData.data.forEach((location) => {
        bounds.extend({ lat: location.lat, lng: location.lng });
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [isLoaded, locationData]);

  if (!isLoaded) {
    return (
      <div className="h-screen absolute g-[rgb(106 106 106 / 26%)]  left-0 w-[116%]">
        <div className="absolute left-[35%] top-[40%]">
          <Image src={logo} alt="로고" width={105} height={140} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={(map) => {
          mapRef.current = map;
        }}
        options={{
          gestureHandling: "cooperative",
        }}
      >
        {locationData?.data.map((location, index) => (
          <OverlayView
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className="custom-marker"
              onClick={() =>
                (window.location.href = `/store/${location.index}/menu/${location.store}`)
              }
            >
              <div className="info-window">
                <img
                  src={`/img/menuIcon/menuIcon_${location.index}.svg`}
                  alt="icon"
                  className="marker-icon"
                />
                <div>
                  <div>{location.store}</div>
                  <div style={{ fontSize: "12px", color: "#fff" }}>
                    ⭐ {location.star}
                  </div>
                </div>
              </div>
            </div>
          </OverlayView>
        ))}
      </GoogleMap>
      <style jsx>{`
        .custom-marker {
          position: absolute;
          transform: translate(-50%, -100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }
        .marker-icon {
          width: 47px;
          height: 47px;
          border-radius: 100%;
          background: antiquewhite;
          margin-bottom: 5px;
        }
        .info-window {
          background-color: #b5651d;
          color: #fff;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          border-radius: 8px;
          text-align: center;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
