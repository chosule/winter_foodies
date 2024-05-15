"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AroundmeIcon,
  AroundmeIconActive,
  CartIcon,
  CartIconActive,
  HomeIcon,
  HomeIconActive,
  LoginIcon,
  LoginIconActive,
  MypageIcon,
  MypageIconActive,
} from "public/Icon/navi_icon";

const routes = [
  {
    text: "홈",
    img: {
      default: <HomeIcon />,
      active: <HomeIconActive />,
    },
    link: "/",
  },
  {
    text: "내주변",
    img: {
      default: <AroundmeIcon />,
      active: <AroundmeIconActive />,
    },
    link: "/aroundme",
  },
  {
    text: "장바구니",
    img: {
      default: <CartIcon />,
      active: <CartIconActive />,
    },
    link: "/cart",
    cartStatus: true,
  },
  {
    text: "마이페이지",
    img: {
      default: <MypageIcon />,
      active: <MypageIconActive />,
    },
    link: "/mypage",
  },
  {
    text: "로그인",
    img: {
      default: <LoginIcon />,
      active: <LoginIconActive />,
    },
    link: "/login",
    tokenState: false,
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {routes.map(({ link, text, img }) => {
        const isActive = pathname === link;
        return (
          <Link key={text} href={link}>
            <div className="flex flex-col relative items-center gap-[5px] w-full">
              {isActive ? img.active : img.default}
              <p
                className={`text-[12px] ${
                  isActive ? "text-black" : "text-[#ddd]"
                }`}
              >
                {text}
              </p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
