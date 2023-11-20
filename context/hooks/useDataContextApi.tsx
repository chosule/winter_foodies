import WinterFoodClient from "@/api/winterFoodClient";
import { ReactNode, createContext, useContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export type TDataApiContext = {
  client: WinterFoodClient;
};

export const DataApiContext = createContext<TDataApiContext | undefined>(
  undefined
);
//원래 코드엿음
// export const DataApiContext = createContext<TDataApiContext>({});

// const client: FakeWinterFoodClient = new FakeWinterFoodClient();
const client: WinterFoodClient = new WinterFoodClient();

export function WinterFoodApiProvider({ children }: ProviderProps) {
  return (
    <DataApiContext.Provider value={{ client }}>
      {children}
    </DataApiContext.Provider>
  );
}

export function useProjectApi() {
  const context = useContext(DataApiContext);
  return context;
}
