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
};

export type Modals = Map<string, ModalProps>;
