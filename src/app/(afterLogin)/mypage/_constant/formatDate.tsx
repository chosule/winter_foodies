export interface Timestamp {
  _seconds: number;
  _nanoseconds: number;
}

export const formatDate = (timestamp: Timestamp | undefined): string => {
  if (!timestamp) {
    return "";
  }

  const milliseconds =
    timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000;
  const date = new Date(milliseconds);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("ko-KR", options);
};
