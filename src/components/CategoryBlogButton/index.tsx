import React from "react";
import { ButtonProps } from "./types";

const CategoryBlogButton: React.FC<ButtonProps> = ({
  children,
  label,
  icon,
  variant = "primary",
  ...props
}) => {
  const variantStyles = {
    primary: "bg-blue-200 hover:bg-blue-300",
    secondary: "bg-green-200 hover:bg-green-300",
    tertiary: "bg-cyan-200 hover:bg-cyan-300",
    quaternary: "bg-red-200 hover:bg-red-300",
  };

  const iconVariantStyles = {
    primary: "bg-blue-400",
    secondary: "bg-green-400",
    tertiary: "bg-cyan-400",
    quaternary: "bg-red-400",
  };

  return (
    <button
      {...props}
      className={`flex items-center justify-between h-20 px-9 py-2 rounded-2xl lg:w-full ${variantStyles[variant]} transition-colors`}
    >
      <span className="text-gray-700 font-medium">{label}</span>
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full ${iconVariantStyles[variant]}`}
      >
        {icon}
      </span>
    </button>
  );
};

export default CategoryBlogButton;
