
export const useConverterMeter = (centimeter:number) =>{
  const meter = centimeter / 100;
  return meter.toFixed();
}

export default useConverterMeter;