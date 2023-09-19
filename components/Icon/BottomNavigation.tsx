import * as React from "react";

const HomeIcon = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.25025L2 7.50025V16.0002C2 16.5522 2.448 17.0002 3 17.0002H15C15.552 17.0002 16 16.5522 16 16.0002V7.50025L9 2.25025ZM15 19.0002H3C1.346 19.0002 0 17.6542 0 16.0002V7.50025C0 6.87325 0.3 6.27425 0.802 5.89925L8.4 0.20025C8.756 -0.06675 9.244 -0.06675 9.6 0.20025L17.199 5.90025C17.7 6.27425 18 6.87325 18 7.50025V16.0002C18 17.6542 16.654 19.0002 15 19.0002Z"
        fill="#353535"
        fillOpacity="0.39"
      />
    </svg>
  );
};
const HomeIconActive = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2.25025L2 7.50025V16.0002C2 16.5522 2.448 17.0002 3 17.0002H15C15.552 17.0002 16 16.5522 16 16.0002V7.50025L9 2.25025ZM15 19.0002H3C1.346 19.0002 0 17.6542 0 16.0002V7.50025C0 6.87325 0.3 6.27425 0.802 5.89925L8.4 0.20025C8.756 -0.06675 9.244 -0.06675 9.6 0.20025L17.199 5.90025C17.7 6.27425 18 6.87325 18 7.50025V16.0002C18 17.6542 16.654 19.0002 15 19.0002Z"
      fill="#000"
      fillOpacity="1"
    />
  </svg>
);
const MypageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.00024C9.20888 4.00024 8.43552 4.23484 7.77772 4.67437C7.11993 5.11389 6.60724 5.73861 6.30449 6.46951C6.00174 7.20041 5.92252 8.00468 6.07686 8.78061C6.2312 9.55653 6.61217 10.2693 7.17158 10.8287C7.73099 11.3881 8.44372 11.769 9.21964 11.9234C9.99557 12.0777 10.7998 11.9985 11.5307 11.6958C12.2616 11.393 12.8864 10.8803 13.3259 10.2225C13.7654 9.56473 14 8.79137 14 8.00024C14 6.93938 13.5786 5.92196 12.8284 5.17182C12.0783 4.42167 11.0609 4.00024 10 4.00024ZM10 10.0002C9.60444 10.0002 9.21776 9.88295 8.88886 9.66318C8.55997 9.44342 8.30362 9.13106 8.15225 8.76561C8.00087 8.40016 7.96126 7.99803 8.03843 7.61006C8.1156 7.2221 8.30609 6.86574 8.58579 6.58603C8.8655 6.30633 9.22186 6.11584 9.60982 6.03867C9.99779 5.9615 10.3999 6.00111 10.7654 6.15248C11.1308 6.30386 11.4432 6.56021 11.6629 6.8891C11.8827 7.218 12 7.60468 12 8.00024C12 8.53068 11.7893 9.03938 11.4142 9.41446C11.0391 9.78953 10.5304 10.0002 10 10.0002ZM10 0.000244141C8.02219 0.000244141 6.08879 0.586734 4.4443 1.68555C2.79981 2.78436 1.51809 4.34615 0.761209 6.17341C0.00433284 8.00067 -0.193701 10.0113 0.192152 11.9511C0.578004 13.891 1.53041 15.6728 2.92894 17.0713C4.32746 18.4698 6.10929 19.4222 8.0491 19.8081C9.98891 20.194 11.9996 19.9959 13.8268 19.239C15.6541 18.4822 17.2159 17.2004 18.3147 15.5559C19.4135 13.9115 20 11.9781 20 10.0002C20 8.68703 19.7413 7.38667 19.2388 6.17341C18.7363 4.96015 17.9997 3.85776 17.0711 2.92918C16.1425 2.00059 15.0401 1.264 13.8268 0.761449C12.6136 0.258902 11.3132 0.000244141 10 0.000244141ZM6 16.9202V16.0002C6 15.735 6.10536 15.4807 6.2929 15.2931C6.48043 15.1056 6.73479 15.0002 7 15.0002H13C13.2652 15.0002 13.5196 15.1056 13.7071 15.2931C13.8946 15.4807 14 15.735 14 16.0002V16.9202C12.7855 17.6273 11.4053 17.9998 10 17.9998C8.59469 17.9998 7.21448 17.6273 6 16.9202ZM15.93 15.3502C15.782 14.6835 15.411 14.0873 14.8783 13.66C14.3455 13.2327 13.6829 13 13 13.0002H7C6.31707 13 5.65448 13.2327 5.12174 13.66C4.58899 14.0873 4.21797 14.6835 4.07 15.3502C3.03059 14.2024 2.34665 12.7776 2.10117 11.2486C1.85569 9.7197 2.05921 8.15238 2.68705 6.73685C3.31489 5.32132 4.34005 4.11843 5.63815 3.27413C6.93625 2.42983 8.45149 1.98041 10 1.98041C11.5485 1.98041 13.0638 2.42983 14.3619 3.27413C15.66 4.11843 16.6851 5.32132 17.313 6.73685C17.9408 8.15238 18.1443 9.7197 17.8988 11.2486C17.6534 12.7776 16.9694 14.2024 15.93 15.3502Z"
      fill="#353535"
      fillOpacity="0.39"
    />
  </svg>
);

const MypageIconActive = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.00024C9.20888 4.00024 8.43552 4.23484 7.77772 4.67437C7.11993 5.11389 6.60724 5.73861 6.30449 6.46951C6.00174 7.20041 5.92252 8.00468 6.07686 8.78061C6.2312 9.55653 6.61217 10.2693 7.17158 10.8287C7.73099 11.3881 8.44372 11.769 9.21964 11.9234C9.99557 12.0777 10.7998 11.9985 11.5307 11.6958C12.2616 11.393 12.8864 10.8803 13.3259 10.2225C13.7654 9.56473 14 8.79137 14 8.00024C14 6.93938 13.5786 5.92196 12.8284 5.17182C12.0783 4.42167 11.0609 4.00024 10 4.00024ZM10 10.0002C9.60444 10.0002 9.21776 9.88295 8.88886 9.66318C8.55997 9.44342 8.30362 9.13106 8.15225 8.76561C8.00087 8.40016 7.96126 7.99803 8.03843 7.61006C8.1156 7.2221 8.30609 6.86574 8.58579 6.58603C8.8655 6.30633 9.22186 6.11584 9.60982 6.03867C9.99779 5.9615 10.3999 6.00111 10.7654 6.15248C11.1308 6.30386 11.4432 6.56021 11.6629 6.8891C11.8827 7.218 12 7.60468 12 8.00024C12 8.53068 11.7893 9.03938 11.4142 9.41446C11.0391 9.78953 10.5304 10.0002 10 10.0002ZM10 0.000244141C8.02219 0.000244141 6.08879 0.586734 4.4443 1.68555C2.79981 2.78436 1.51809 4.34615 0.761209 6.17341C0.00433284 8.00067 -0.193701 10.0113 0.192152 11.9511C0.578004 13.891 1.53041 15.6728 2.92894 17.0713C4.32746 18.4698 6.10929 19.4222 8.0491 19.8081C9.98891 20.194 11.9996 19.9959 13.8268 19.239C15.6541 18.4822 17.2159 17.2004 18.3147 15.5559C19.4135 13.9115 20 11.9781 20 10.0002C20 8.68703 19.7413 7.38667 19.2388 6.17341C18.7363 4.96015 17.9997 3.85776 17.0711 2.92918C16.1425 2.00059 15.0401 1.264 13.8268 0.761449C12.6136 0.258902 11.3132 0.000244141 10 0.000244141ZM6 16.9202V16.0002C6 15.735 6.10536 15.4807 6.2929 15.2931C6.48043 15.1056 6.73479 15.0002 7 15.0002H13C13.2652 15.0002 13.5196 15.1056 13.7071 15.2931C13.8946 15.4807 14 15.735 14 16.0002V16.9202C12.7855 17.6273 11.4053 17.9998 10 17.9998C8.59469 17.9998 7.21448 17.6273 6 16.9202ZM15.93 15.3502C15.782 14.6835 15.411 14.0873 14.8783 13.66C14.3455 13.2327 13.6829 13 13 13.0002H7C6.31707 13 5.65448 13.2327 5.12174 13.66C4.58899 14.0873 4.21797 14.6835 4.07 15.3502C3.03059 14.2024 2.34665 12.7776 2.10117 11.2486C1.85569 9.7197 2.05921 8.15238 2.68705 6.73685C3.31489 5.32132 4.34005 4.11843 5.63815 3.27413C6.93625 2.42983 8.45149 1.98041 10 1.98041C11.5485 1.98041 13.0638 2.42983 14.3619 3.27413C15.66 4.11843 16.6851 5.32132 17.313 6.73685C17.9408 8.15238 18.1443 9.7197 17.8988 11.2486C17.6534 12.7776 16.9694 14.2024 15.93 15.3502Z"
      fill="#000"
    />
  </svg>
);

const AroundmeIcon = () => (
  <svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5.00024C7.40666 5.00024 6.82664 5.17619 6.33329 5.50584C5.83994 5.83548 5.45542 6.30402 5.22836 6.85219C5.0013 7.40037 4.94189 8.00357 5.05764 8.58552C5.1734 9.16746 5.45912 9.70201 5.87868 10.1216C6.29824 10.5411 6.83279 10.8268 7.41473 10.9426C7.99667 11.0584 8.59987 10.9989 9.14805 10.7719C9.69623 10.5448 10.1648 10.1603 10.4944 9.66695C10.8241 9.17361 11 8.59359 11 8.00024C11 7.20459 10.6839 6.44153 10.1213 5.87892C9.55871 5.31631 8.79565 5.00024 8 5.00024ZM8 9.00024C7.80222 9.00024 7.60888 8.9416 7.44443 8.83171C7.27998 8.72183 7.15181 8.56565 7.07612 8.38293C7.00043 8.2002 6.98063 7.99914 7.01921 7.80515C7.0578 7.61117 7.15304 7.43299 7.29289 7.29314C7.43275 7.15329 7.61093 7.05804 7.80491 7.01946C7.99889 6.98087 8.19996 7.00068 8.38268 7.07636C8.56541 7.15205 8.72159 7.28022 8.83147 7.44467C8.94135 7.60912 9 7.80246 9 8.00024C9 8.26546 8.89464 8.51981 8.70711 8.70735C8.51957 8.89489 8.26522 9.00024 8 9.00024ZM8 0.000244141C5.87827 0.000244141 3.84344 0.843099 2.34315 2.34339C0.842855 3.84368 0 5.87851 0 8.00024C0 14.0002 5.37 18.5102 7.31 20.3602C7.49598 20.5375 7.74306 20.6364 8 20.6364C8.25694 20.6364 8.50402 20.5375 8.69 20.3602C10.63 18.5102 16 14.0002 16 8.00024C16 5.87851 15.1571 3.84368 13.6569 2.34339C12.1566 0.843099 10.1217 0.000244141 8 0.000244141ZM8 18.2602C6 16.3402 2 12.5402 2 8.00024C2 6.40895 2.63214 4.88282 3.75736 3.7576C4.88258 2.63239 6.4087 2.00024 8 2.00024C9.5913 2.00024 11.1174 2.63239 12.2426 3.7576C13.3679 4.88282 14 6.40895 14 8.00024C14 12.5402 10.05 16.3402 8 18.2602Z"
      fill="#353535"
      fillOpacity="0.39"
    />
  </svg>
);
const AroundmeIconActive = () => (
  <svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5.00024C7.40666 5.00024 6.82664 5.17619 6.33329 5.50584C5.83994 5.83548 5.45542 6.30402 5.22836 6.85219C5.0013 7.40037 4.94189 8.00357 5.05764 8.58552C5.1734 9.16746 5.45912 9.70201 5.87868 10.1216C6.29824 10.5411 6.83279 10.8268 7.41473 10.9426C7.99667 11.0584 8.59987 10.9989 9.14805 10.7719C9.69623 10.5448 10.1648 10.1603 10.4944 9.66695C10.8241 9.17361 11 8.59359 11 8.00024C11 7.20459 10.6839 6.44153 10.1213 5.87892C9.55871 5.31631 8.79565 5.00024 8 5.00024ZM8 9.00024C7.80222 9.00024 7.60888 8.9416 7.44443 8.83171C7.27998 8.72183 7.15181 8.56565 7.07612 8.38293C7.00043 8.2002 6.98063 7.99914 7.01921 7.80515C7.0578 7.61117 7.15304 7.43299 7.29289 7.29314C7.43275 7.15329 7.61093 7.05804 7.80491 7.01946C7.99889 6.98087 8.19996 7.00068 8.38268 7.07636C8.56541 7.15205 8.72159 7.28022 8.83147 7.44467C8.94135 7.60912 9 7.80246 9 8.00024C9 8.26546 8.89464 8.51981 8.70711 8.70735C8.51957 8.89489 8.26522 9.00024 8 9.00024ZM8 0.000244141C5.87827 0.000244141 3.84344 0.843099 2.34315 2.34339C0.842855 3.84368 0 5.87851 0 8.00024C0 14.0002 5.37 18.5102 7.31 20.3602C7.49598 20.5375 7.74306 20.6364 8 20.6364C8.25694 20.6364 8.50402 20.5375 8.69 20.3602C10.63 18.5102 16 14.0002 16 8.00024C16 5.87851 15.1571 3.84368 13.6569 2.34339C12.1566 0.843099 10.1217 0.000244141 8 0.000244141ZM8 18.2602C6 16.3402 2 12.5402 2 8.00024C2 6.40895 2.63214 4.88282 3.75736 3.7576C4.88258 2.63239 6.4087 2.00024 8 2.00024C9.5913 2.00024 11.1174 2.63239 12.2426 3.7576C13.3679 4.88282 14 6.40895 14 8.00024C14 12.5402 10.05 16.3402 8 18.2602Z"
      fill="#000"
      fillOpacity="1"
    />
  </svg>
);
const CartIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.36 16.5907C8.36198 16.9075 8.26983 17.2179 8.09523 17.4823C7.92062 17.7467 7.67144 17.9534 7.37925 18.076C7.08707 18.1986 6.76506 18.2317 6.45403 18.1711C6.143 18.1105 5.85698 17.9589 5.63221 17.7356C5.40745 17.5122 5.25407 17.2271 5.19151 16.9165C5.12896 16.6059 5.16006 16.2837 5.28086 15.9907C5.40166 15.6978 5.60673 15.4473 5.87006 15.271C6.13339 15.0948 6.44313 15.0007 6.76 15.0007C7.18262 15.0007 7.58808 15.1679 7.88785 15.4658C8.18762 15.7637 8.35736 16.1681 8.36 16.5907ZM14.95 15.0007C14.6335 15.0007 14.3242 15.0945 14.0611 15.2703C13.798 15.4461 13.5929 15.696 13.4718 15.9884C13.3507 16.2807 13.319 16.6024 13.3807 16.9128C13.4425 17.2232 13.5949 17.5083 13.8186 17.732C14.0424 17.9558 14.3275 18.1082 14.6379 18.1699C14.9482 18.2317 15.2699 18.2 15.5623 18.0789C15.8547 17.9578 16.1045 17.7527 16.2804 17.4896C16.4562 17.2265 16.55 16.9171 16.55 16.6007C16.55 16.1763 16.3814 15.7694 16.0814 15.4693C15.7813 15.1692 15.3743 15.0007 14.95 15.0007ZM18.34 5.25067L16.72 11.7407C16.5554 12.3874 16.1799 12.9607 15.6528 13.37C15.1258 13.7794 14.4773 14.0013 13.81 14.0007H7.9C7.23135 14.0007 6.58185 13.7774 6.05463 13.3661C5.52742 12.9548 5.15271 12.3792 4.99 11.7307L2.59 2.00067H1C0.734784 2.00067 0.48043 1.89531 0.292893 1.70778C0.105357 1.52024 0 1.26588 0 1.00067C0 0.735452 0.105357 0.481098 0.292893 0.293562C0.48043 0.106025 0.734784 0.000668552 1 0.000668552H3.37C3.59843 -0.00598682 3.82226 0.0658017 4.00421 0.204082C4.18615 0.342363 4.31525 0.538792 4.37 0.760669L5.15 4.00067H17.25H17.34C17.4327 3.98589 17.5273 3.98589 17.62 4.00067C17.7497 4.03314 17.8715 4.09127 17.9783 4.17164C18.0852 4.25201 18.1748 4.35299 18.2419 4.46859C18.309 4.58419 18.3523 4.71208 18.3692 4.8447C18.386 4.97731 18.3761 5.11195 18.34 5.24067V5.25067ZM16.09 6.00067H5.65L6.96 11.2407C7.01228 11.4526 7.13245 11.6416 7.30217 11.7788C7.47189 11.916 7.68185 11.9939 7.9 12.0007H13.78C14.0084 12.0073 14.2323 11.9355 14.4142 11.7973C14.5962 11.659 14.7252 11.4625 14.78 11.2407L16.09 6.00067Z"
      fill="#353535"
      fillOpacity="0.39"
    />
  </svg>
);
const CartIconActive = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.36 16.5907C8.36198 16.9075 8.26983 17.2179 8.09523 17.4823C7.92062 17.7467 7.67144 17.9534 7.37925 18.076C7.08707 18.1986 6.76506 18.2317 6.45403 18.1711C6.143 18.1105 5.85698 17.9589 5.63221 17.7356C5.40745 17.5122 5.25407 17.2271 5.19151 16.9165C5.12896 16.6059 5.16006 16.2837 5.28086 15.9907C5.40166 15.6978 5.60673 15.4473 5.87006 15.271C6.13339 15.0948 6.44313 15.0007 6.76 15.0007C7.18262 15.0007 7.58808 15.1679 7.88785 15.4658C8.18762 15.7637 8.35736 16.1681 8.36 16.5907ZM14.95 15.0007C14.6335 15.0007 14.3242 15.0945 14.0611 15.2703C13.798 15.4461 13.5929 15.696 13.4718 15.9884C13.3507 16.2807 13.319 16.6024 13.3807 16.9128C13.4425 17.2232 13.5949 17.5083 13.8186 17.732C14.0424 17.9558 14.3275 18.1082 14.6379 18.1699C14.9482 18.2317 15.2699 18.2 15.5623 18.0789C15.8547 17.9578 16.1045 17.7527 16.2804 17.4896C16.4562 17.2265 16.55 16.9171 16.55 16.6007C16.55 16.1763 16.3814 15.7694 16.0814 15.4693C15.7813 15.1692 15.3743 15.0007 14.95 15.0007ZM18.34 5.25067L16.72 11.7407C16.5554 12.3874 16.1799 12.9607 15.6528 13.37C15.1258 13.7794 14.4773 14.0013 13.81 14.0007H7.9C7.23135 14.0007 6.58185 13.7774 6.05463 13.3661C5.52742 12.9548 5.15271 12.3792 4.99 11.7307L2.59 2.00067H1C0.734784 2.00067 0.48043 1.89531 0.292893 1.70778C0.105357 1.52024 0 1.26588 0 1.00067C0 0.735452 0.105357 0.481098 0.292893 0.293562C0.48043 0.106025 0.734784 0.000668552 1 0.000668552H3.37C3.59843 -0.00598682 3.82226 0.0658017 4.00421 0.204082C4.18615 0.342363 4.31525 0.538792 4.37 0.760669L5.15 4.00067H17.25H17.34C17.4327 3.98589 17.5273 3.98589 17.62 4.00067C17.7497 4.03314 17.8715 4.09127 17.9783 4.17164C18.0852 4.25201 18.1748 4.35299 18.2419 4.46859C18.309 4.58419 18.3523 4.71208 18.3692 4.8447C18.386 4.97731 18.3761 5.11195 18.34 5.24067V5.25067ZM16.09 6.00067H5.65L6.96 11.2407C7.01228 11.4526 7.13245 11.6416 7.30217 11.7788C7.47189 11.916 7.68185 11.9939 7.9 12.0007H13.78C14.0084 12.0073 14.2323 11.9355 14.4142 11.7973C14.5962 11.659 14.7252 11.4625 14.78 11.2407L16.09 6.00067Z"
      fill="#000"
      fillOpacity="1"
    />
  </svg>
);

const LoginIcon = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534Z"
      fill="#353535"
      fillOpacity="1"
    />
    <path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill="#353535"
      fillOpacity="1"
    />
    <path
      d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z"
      fill="#353535"
      fillOpacity="1"
    />
  </svg>
);
const LoginIconActive = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534Z"
      fill="#000"
      fillOpacity="1"
    />
    <path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill="#000"
      fillOpacity="1"
    />
    <path
      d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z"
      fill="#000"
      fillOpacity="1"
    />
  </svg>
);
export {
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
};
