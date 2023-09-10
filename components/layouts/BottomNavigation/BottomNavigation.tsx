import {
  HomeIcon,
  HomeIconActive,
  MypageIcon,
  MypageIconActive,
  AroundmeIcon,
  AroundmeIconActive,
  CartIcon,
  CartIconActive,
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
];

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <NaviUI.Nav>
      {routes.map((route) => {
        const isActive = pathname === route.path;

        return (
          <Link key={route.text} href={route.path} passHref>
            <NaviUI.NavItem>
              {isActive ? route.img.active : route.img.default}
              <NaviUI.Text isActive={isActive}>{route.text}</NaviUI.Text>
            </NaviUI.NavItem>
          </Link>
        );
      })}
    </NaviUI.Nav>
  );
};

export default BottomNavigation;
