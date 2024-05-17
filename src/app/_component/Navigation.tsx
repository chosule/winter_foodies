// import {
//   HomeIcon,
//   HomeIconActive,
//   MypageIcon,
//   MypageIconActive,
//   AroundmeIcon,
//   AroundmeIconActive,
//   CartIcon,
//   CartIconActive,
//   LoginIcon,
//   LoginIconActive,
// } from "@/src/components/Icon/BottomNavigation";
// import Link from "next/link";
// import { NaviUI } from "./style";
// import { usePathname } from "next/navigation";
// import CartStatus from "@/src/app/(afterLogin)/_component/CartStatus";
// import { userState } from "@/src/recoil/atom";
// import { useRecoilValue } from "recoil";
// import { useEffect, useState } from "react";
// import useUserAuth from "@/src/hooks/auth/useUserAuth";

// const routes = [
//   {
//     text: "홈",
//     img: {
//       default: <HomeIcon />,
//       active: <HomeIconActive />,
//     },
//     path: "/",
//   },
//   {
//     text: "내주변",
//     img: {
//       default: <AroundmeIcon />,
//       active: <AroundmeIconActive />,
//     },
//     path: "/aroundme",
//   },
//   {
//     text: "장바구니",
//     img: {
//       default: <CartIcon />,
//       active: <CartIconActive />,
//     },
//     path: "/cart",
//     cartStatus: true,
//   },
//   {
//     text: "마이페이지",
//     img: {
//       default: <MypageIcon />,
//       active: <MypageIconActive />,
//     },
//     path: "/mypage",
//   },
//   {
//     text: "로그인",
//     img: {
//       default: <LoginIcon />,
//       active: <LoginIconActive />,
//     },
//     path: "/login",
//     tokenState: false,
//   },
// ];

// const BottomNavigation = () => {
//   const token = useRecoilValue(userState);
//   const pathname = usePathname();

//   const [loginText, setLoginText] = useState(routes[4]);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       setLoginText((prev) => ({ ...prev, text: "로그아웃", path: "/logout" }));
//     } else {
//       setLoginText((prev) => ({ ...prev, text: "로그인", path: "/login" }));
//     }
//   }, [token]);

//   return (
//     <>
//       <div className="w-full h-[95px]">
//         <nav className="nav">
//           {routes.map(({ path, text, img, cartStatus }) => {
//             const isActive = pathname === path;
//             const buttonText = text === "로그인" ? loginText.text : text;
//             const paths = text === "로그인" ? loginText.path : path;
//             return (
//               <Link key={text} href={paths} passHref>
//                 <div className="flex flex-col relative items-center gap-[5px] w-full">
//                   {isActive ? img.active : img.default}
//                   <p
//                     className={`text-[12px] ${
//                       isActive ? "text-black" : "text-[#ddd]"
//                     }`}
//                   >
//                     {buttonText}
//                   </p>
//                   {cartStatus && <CartStatus />}
//                 </div>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default BottomNavigation;
