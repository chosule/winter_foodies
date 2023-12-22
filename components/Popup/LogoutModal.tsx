import { ModalUI } from "./style";

type Props ={
    close?:() => void;
}

export default function LogoutModal({close,title,btnText,message}:Props) {
    
     return(
        <>
            <ModalUI.Overlay/>
            <ModalUI.Content>
                <ModalUI.Title>로그아웃</ModalUI.Title>
                <ModalUI.Title></ModalUI.Title>
                <ModalUI.Message>{message}</ModalUI.Message>
                <>
                    <ModalUI.ConfirmBtn>{btnText}</ModalUI.ConfirmBtn>
                    <ModalUI.ConfirmBtn>아니요</ModalUI.ConfirmBtn>
                </>
            </ModalUI.Content>
        </>
     )
}