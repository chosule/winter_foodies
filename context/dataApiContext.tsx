import FakeWinterFoodClient from "@/types/api/FakeWinterFoodClient";
import WinterFoodApi from "@/types/api/winterFoodApi";
import { ReactNode, createContext, useContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export const DataApiContext = createContext({});

const client = new FakeWinterFoodClient();
const api = new WinterFoodApi(client);

export function WinterFoodApiProvider({ children }: ProviderProps) {
  return (
    <DataApiContext.Provider value={{ api }}>
      {children}
    </DataApiContext.Provider>
  );
}

export function useProjectApi() {
  return useContext(DataApiContext);
}
