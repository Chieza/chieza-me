import React from "react";
import classNames from "classnames";

const navbarClasses = [
  "px-1 py-2 text-white/84 hover:text-white hover:cursor-pointer hover:before:w-full relative inline-block",
  "before:transition-all before:duration-300",
  'before:content-[""]',
  "before:absolute before:left-1/2 before:bottom-1",
  "before:h-0.75 before:w-0",
  "before:-translate-x-1/2",
  "before:rounded-full",
  "before:bg-gradient-to-r before:from-blue-500 before:to-purple-700",
].join(" ");

export default function NavbarButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames("font-medium", navbarClasses, props.className)}
    >
      {props.children}
    </button>
  );
}
