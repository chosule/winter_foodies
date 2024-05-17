// import { useRouter } from "next/navigation";
// import StarRating from "../ui/StarRating";

// type Props = {
//   headerTitle?: string;
//   storeRating?: string;
// };

// const HeaderLayout = ({ headerTitle, storeRating }: Props) => {
//   const router = useRouter();
//   return (
//     <section className="relative min-h-[100px] h-[100px] w-full max-w-[511px]">
//       <div className="min-h-[100px] w-full max-w-[460px] z-[1] bg-[#f6f6f6] fixed top-0 flex items-center justify-between">
//         <button
//           className="header-btn"
//           onClick={() => {
//             router.back();
//           }}
//         />
//         {headerTitle && <p>{headerTitle}</p>}
//         <div className="absolute right-[33%]">
//           {storeRating && <StarRating storeRating={storeRating} />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeaderLayout;
