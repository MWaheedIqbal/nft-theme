import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="px-9 py-2 hover:shadow-lg text-base font-medium hover:scale-105 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
