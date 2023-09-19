import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});
export default axiosInstance;
