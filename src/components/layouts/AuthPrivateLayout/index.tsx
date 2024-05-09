// import Head from "next/head";
// import { Children } from "@/src/types/commons";
// import BottomNavigation from "@/src/components/layouts/BottomNavigation/BottomNavigation";
// import MainLeftPc from "@/src/app/(beforeLogin)/_component/MainLeftPc";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import useContextModal from "@/src/context/hooks/useContextModal";

// type TDefaultLayoutProps = {
//   children: Children;
//   width?: string;
// };
// const AuthPrivateLayout = ({ children, width }: TDefaultLayoutProps) => {
//   const router = useRouter();
//   const modal = useContextModal();

//   const openAlert = () => {
//     modal.openAlert({
//       title: "알림",
//       message: `로그인이 필요한 페이지 입니다. \n 로그인 후 이용부탁드립니다.`,
//       btnText: "확인",
//     });
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//       router.push("/login");
//       openAlert();
//     }
//   }, [router]);

//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//       </Head>
//       <div className="w-full h-full flex items-center justify-center relative">
//         <MainLeftPc />
//         <div className="layout-outer">
//           <div className="w-[90%] mx-auto h-full flex flex-col gap-[16px]">
//             {children}
//           </div>
//           <BottomNavigation />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPrivateLayout;
