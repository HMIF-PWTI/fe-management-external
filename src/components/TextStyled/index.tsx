import React from "react";

interface TextStyledProps {
  text: string;
  className?: string;
}

const TextStyled: React.FC<TextStyledProps> = ({ text, className }) => {
  return (
    <div
      className={`relative inline-block px-5 py-3 rounded-lg ${className}`}
    >
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-primary2"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-primary2"></div>
      <h1 className="text-2xl font-semibold text-primary2">{text}</h1>
    </div>
  );
};

export default TextStyled;
