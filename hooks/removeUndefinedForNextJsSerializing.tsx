export const removeUndefinedForNextJsSerializing = <T,>(props: T): T =>
  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as T;


  export default removeUndefinedForNextJsSerializing;