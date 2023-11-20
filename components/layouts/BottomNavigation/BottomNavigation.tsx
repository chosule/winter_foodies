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
  },
];

const BottomNavigation = () => {
  const { client } = useProjectApi();
  // const { data: products } = useQuery(["carts"], () => client.getCart());

  // console.log("??---> ", products);
  const pathname = usePathname();
  return (
    <NaviUI.NavWrap>
      <NaviUI.Nav>
        {routes.map(({ path, text, img, cartStatus }) => {
          const isActive = pathname === path;
          return (
            <Link key={text} href={path} passHref>
              <NaviUI.NavItem>
                {isActive ? img.active : img.default}
                <NaviUI.Text isActive={isActive}>{text}</NaviUI.Text>
                {cartStatus && <CartStatus />}
              </NaviUI.NavItem>
            </Link>
          );
        })}
      </NaviUI.Nav>
    </NaviUI.NavWrap>
  );
};

export default BottomNavigation;
