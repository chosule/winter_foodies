"use client";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/src/context/hooks/useDataContextApi";
import { useContextGeolocation } from "@/src/context/GeoLocationProvider";
import { MenuDetailData } from "@/src/types/api/menuType";
import Box from "@/src/components/ui/Box";

const NearDistance = () => {
  const location = useContextGeolocation();
  const { client } = useProjectApi();

  const { data: nearSnackData, isLoading } = useQuery(["nearSnack"], () =>
    client.nearDistanceSnack(location?.latitude, location?.longitude)
  );
  return (
    <div className="flex flex-col gap-[25px] min-h-[478px] mt-[30px]">
      <div className="gap-[10px] items-center">
        <p className="text-16px font-[600]">나와 가장 가까운 간식</p>
        <p className="text-16px text-[#dd8037] font-[600]">TOP5</p>
      </div>
      <div className="flex flex-col gap-[15px]">
        {nearSnackData &&
          nearSnackData.map(({ ranking, name, distance }: MenuDetailData) => (
            <div className="flex items-center justify-between" key={ranking}>
              <Box
                className="flex text-white justify-center"
                width="38px"
                height="36px"
              >
                {ranking}
              </Box>
              <Box
                width="130px"
                bg="#fff"
                className="glow-[0.9] flex justify-evenly text-black"
              >
                <div className="flex flex-1 justify-center w-full">
                  <p className="text-[15px]">{name}</p>
                </div>
                <div className="flex flex-col items-center flex-[0.3] gap-[4px]">
                  <p className="text-[10px]">현재나와</p>
                  <p className="text-[15px] text-[#DD8037]">{distance}m</p>
                </div>
              </Box>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NearDistance;
