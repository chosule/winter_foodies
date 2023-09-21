import FakeWinterFoodClient from "@/types/api/fakeWinterFoodClient";
import WinterFoodClient from "@/types/api/fakeWinterFoodClient";
import { ReactNode, createContext, useContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export const DataApiContext = createContext({});

const client: FakeWinterFoodClient = new FakeWinterFoodClient();
// const client: WinterFoodClient = new WinterFoodApi();

export function WinterFoodApiProvider({ children }: ProviderProps) {
  return (
    <DataApiContext.Provider value={{ client }}>
      {children}
    </DataApiContext.Provider>
  );
}

export function useProjectApi() {
  return useContext(DataApiContext);
}
