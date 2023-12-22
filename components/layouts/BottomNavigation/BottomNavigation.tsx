import {
  HomeIcon,
  HomeIconActive,
  MypageIcon,
  MypageIconActive,
  AroundmeIcon,
  AroundmeIconActive,
  CartIcon,
  CartIconActive,
  LoginIcon,
  LoginIconActive,
} from "@/components/Icon/BottomNavigation";
import Link from "next/link";
import { NaviUI } from "./style";
import { usePathname } from "next/navigation";
import CartStatus from "@/components/Cart/CartStatus";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { userState, userToken } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import useContextModal from "@/context/hooks/useContextModal";
import useUserAuth from "@/hooks/auth/useUserAuth";

const navName = [
  {home:"홈"}
]
const routes = [
  {
    text: navName[0].home,
    img: {
      default: <HomeIcon />,
      active: <HomeIconActive />,
    },
    path: "/",
  },
  {
    text: "내주변",
    img: {
      default: <AroundmeIcon />,
      active: <AroundmeIconActive />,
    },
    path: "/aroundme",
  },
  {
    text: "장바구니",
    img: {
      default: <CartIcon />,
      active: <CartIconActive />,
    },
    path: "/cart",
    cartStatus: true,
  },
  {
    text: "마이페이지",
    img: {
      default: <MypageIcon />,
      active: <MypageIconActive />,
    },
    path: "/mypage",
  },
  {
    text: "로그인",
    img: {
      default: <LoginIcon />,
      active: <LoginIconActive />,
    },
    path: "/login",
    tokenState:false,
  },
];

const BottomNavigation = () => {
  const token = useRecoilValue(userState)
  const pathname = usePathname();
  const [loginText, setLoginText] = useState(routes[4]);


  useEffect(() =>{
      if (token) {
         setLoginText((prev) => ({...prev , text:"로그아웃", path:"/logout"}));
      } else {
        setLoginText((prev) => ({ ...prev, text: "로그인", path: "/login" }));

      }
  },[token])
  return (
    <>
      <NaviUI.NavWrap>
        <NaviUI.Nav>
          {routes.map(({ path, text, img, cartStatus }) => {
            const isActive = pathname === path;
            const buttonText = text === "로그인" ? loginText.text : text;
            const paths = text === "로그인" ? loginText.path : path;
            return (
              <Link key={text} href={paths} passHref>
                <NaviUI.NavItem>
                  {isActive ? img.active : img.default}
                  <NaviUI.Text isActive={isActive} >{buttonText}</NaviUI.Text>
                  {cartStatus && <CartStatus />}
                </NaviUI.NavItem>
              </Link>
            );
          })}
        </NaviUI.Nav>
      </NaviUI.NavWrap>
    
    </>
  );
};

export default BottomNavigation;
