import React from "react";
import classNames from "classnames";

const gradientClasses = [
  "px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-700 text-white rounded-lg shadow-lg shadow-blue-500/24 transition-all duration-300 ease-in-out hover:from-purple-400 hover:to-blue-400 hover:text-black/80 hover:cursor-pointer",
].join(" ");

export default function GradientButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames("font-medium", gradientClasses, props.className)}
    >
      {props.children}
    </button>
  );
}
