export const removeUndefinedForNextJsSerializing = <T extends {}>(
  props: T
): T =>
  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as T;

export default removeUndefinedForNextJsSerializing;
