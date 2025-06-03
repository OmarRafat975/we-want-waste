import type { FC } from "react";
import type ButtonProps from "../../types/ButtonType";

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  let classes = "";
  if (variant === "outline")
    classes = "border bg-green-500/10 hover:text-green-700";
  if (variant === "contain" || !variant)
    classes = "border bg-teal-700 border-green-700/20 text-white";
  if (variant === "text") classes = "hover:text-green-500";

  return (
    <button
      {...props}
      className={`px-4 py-2 flex items-center rounded justify-center duration-300 group text-green-700 ${classes} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
