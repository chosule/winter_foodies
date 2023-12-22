import Alert from "@/components/Popup/Alert";
import LogoutModal from "@/components/Popup/LogoutModal";
import ReviewRegist from "@/components/Popup/ReviewRegist";
import ReactDOM from "react-dom/client";

type Props = {
  isOpen?: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  component?: () => JSX.Element;
};


const modal = {
  open: (Component: (props: Props) => JSX.Element, props: Props) => {
    const defaultProps = {
      isOpen: true,
      close: () => {},
    };
    const container = document.getElementById("modal");
    if (!container) return;
    const root = ReactDOM.createRoot(container);

    defaultProps.close = () => {
      defaultProps.isOpen = false;
      root.unmount();
    };

    defaultProps.isOpen = true;
    root.render(<Component {...defaultProps} {...props}></Component>);
  },

  //alert
  openAlert: (props: Props) => {
    modal.open(Alert, props);
  },

  //notice
  openNotice: (props: Props) => {
    modal.open(Alert, props);
  },

  //review regist
  openReviewRegist:(props:Props) =>{
    modal.open(ReviewRegist, props);
  }
  
  //logout
  logoutModal:(props:Props) => {
    modal.open(LogoutModal,props)
  }
};


export default modal;
