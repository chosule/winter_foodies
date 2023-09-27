import axios from "axios";

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 20000,
};

export type TLocation = {
  latitude: number;
  longitude: number;
};

const useGeolocation = () => {
  const handleSuccess = async (): Promise<TLocation> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude }: TLocation = position.coords;
          if (latitude && longitude) {
            resolve({ latitude, longitude });
          } else {
            reject("Unable to get location data.");
          }
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  };

  const handleError = (error: GeolocationPositionError) => {
    alert(error.message);
  };

  return { handleSuccess, handleError };
};

export const getCurrentLocation = async (
  latitude: number,
  longitude: number
) => {
  try {
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`,
        },
      }
    );
    const data = res.data;
    const address = data.documents[0].address.address_name;
    return address;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export default useGeolocation;
