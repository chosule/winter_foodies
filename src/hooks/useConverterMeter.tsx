
export const useConverterMeter = (centimeter:number) =>{
  const meter = centimeter / 1000;
  return meter.toFixed();
}

export default useConverterMeter;


