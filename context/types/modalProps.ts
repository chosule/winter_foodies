export type ModalProps = {
  key?: string;
  type?: string;
  title?: string;
  message?: string;
  btnText?: string;
  close?: () => void;
  confirm?: () => void;
  component?: () => JSX.Element;
  storeName?:string;
  isOpen?:() => void;
  id?:number;
};


export type ReviewModalProps = {
  storeName:string;
  isOpen:() => void;
  close:() => void;
}
export type Modals = Map<string, ModalProps>;
