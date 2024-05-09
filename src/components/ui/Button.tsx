type Props = {
  width?: string;
  height?: string;
  bg?: string;
  color?: string;
};

export const Button = ({
  children,
  color = "#000",
  width = "47",
  height = "45",
  bg,
  className,
  ...props
}: React.ComponentProps<"button"> & Props) => {
  return (
    <button
      className={`text-[${color}] bg-[${bg}] w-[${width}] h-[${height}] rounded-[10px] ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
