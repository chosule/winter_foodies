import Alert from "@/components/Popup/Alert";
import ReviewRegist from "@/components/Popup/ReviewRegist";
import { Modals, ModalProps } from "@/context/types/modalProps";
import { useState } from "react";
import { createContext, ReactNode } from "react";

type TModalProvider = {
  children: ReactNode;
};

export const ModalContext = createContext({
  modals: new Map(),
  setModals: (state: Modals) => {},
});

const ModalProvider = ({ children }: TModalProvider) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const alerList: ModalProps[] = [];
  const list: ModalProps[] = [];

  modals.forEach((value, key) => {
    list.push(value);
    switch (value.type) {
      case "ALERT":
        alerList.push(value);
        break;
    }
  });
  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      {list.map((modal) => {
        switch (modal.type) {
          case "ALERT":
            return <Alert key={modal.key} {...modal}></Alert>;
          case "REVIEW":
            return <ReviewRegist key={modal.key}>{...modal}</ReviewRegist>
          default:
            return <Alert key={modal.key} {...modal}></Alert>;
        }
      })}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
