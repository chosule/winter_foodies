import { create } from "zustand";

interface InfoItem {
  id: string;
  name: string;
  password: string;
  phone: string;
}
interface UserDataState {
  userData: {
    info: InfoItem[];
  };
  setUserData: (data: { info: InfoItem[] }) => void;
}
const userDataStore = create<UserDataState>((set) => ({
  userData: { info: [] },
  setUserData: (data) => set({ userData: data }),
}));

export default userDataStore;
