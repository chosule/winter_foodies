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
const routes = [
  {
    text: "홈",
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
  },
];

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <NaviUI.Nav>
      {routes.map(({ path, text, img }) => {
        const isActive = pathname === path;
        return (
          <Link key={text} href={path} passHref>
            <NaviUI.NavItem>
              {isActive ? img.active : img.default}
              <NaviUI.Text isActive={isActive}>{text}</NaviUI.Text>
            </NaviUI.NavItem>
          </Link>
        );
      })}
    </NaviUI.Nav>
  );
};

export default BottomNavigation;
