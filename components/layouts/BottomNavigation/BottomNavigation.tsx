import {
  HomeIcon,
  MypageIcon,
  AroundmeIcon,
  CartIcon,
} from "@/components/Icon/BottomNavigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { NaviUI } from "./style";

const routes = [
  {
    text: "홈",
    img: {
      default: <HomeIcon />,
      action: <HomeIcon />,
    },
    path: "/",
  },
  {
    text: "내주변",
    img: {
      default: <AroundmeIcon />,
      action: <AroundmeIcon />,
    },
    path: "/",
  },
  {
    text: "장바구니",
    img: {
      default: <CartIcon />,
      action: <CartIcon />,
    },
    path: "/",
  },
  {
    text: "마이페이지",
    img: {
      default: <MypageIcon />,
      action: <MypageIcon />,
    },
    path: "/mypage",
  },
];

const BottomNavigation = () => {
  return (
    <NaviUI.Nav>
      {routes.map((route) => {
        // const includesPathname = route.asPath.startsWith(route.path)
        return (
          <Link key={route.text} href={route.path} passHref>
            <NaviUI.NavItem>
              {route.img.default}
              {route.text}
            </NaviUI.NavItem>
          </Link>
        );
      })}
    </NaviUI.Nav>
  );
};

export default BottomNavigation;
