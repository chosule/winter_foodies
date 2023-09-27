import useGeolocation from "@/hooks/useGeolacation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TLocation } from "@/hooks/useGeolacation";

type TGeolocationProvider = {
  children: ReactNode;
};
export const LocationContext = createContext<TLocation | null>(null);

const GeoLocationProvider = ({ children }: TGeolocationProvider) => {
  const { handleSuccess } = useGeolocation();
  const [location, setLocation] = useState<TLocation | null>(null);

  useEffect(() => {
    handleSuccess()
      .then((result) => {
        setLocation(result);
      })
      .catch((error) => {
        console.error("위도 경도 가져오기 에러 ->", error);
      });
  }, []);
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export function useContextGeolocation() {
  return useContext(LocationContext);
}
export default GeoLocationProvider;
