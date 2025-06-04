import React from "react";
import classNames from "classnames";

const outlineClasses = [
  "px-4 py-2 text-white/94 border border-white rounded-lg transition-all duration-300 ease-in-out hover:bg-black/48 hover:text-white hover:border-white/0 hover:cursor-pointer",
].join(" ");

export default function OutlineButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames("font-medium", outlineClasses, props.className)}
    >
      {props.children}
    </button>
  );
}
