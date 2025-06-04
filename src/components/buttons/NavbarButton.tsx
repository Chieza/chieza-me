import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import classNames from "classnames";

// Core CSS classes
const navbarClasses = [
  // Core
  "px-1 py-2 text-white/64 hover:text-white hover:cursor-pointer hover:before:w-full relative inline-block",
  // Underline
  "before:transition-all before:duration-300",
  'before:content-[""]',
  "before:absolute before:left-1/2 before:bottom-1",
  "before:h-0.75 before:w-0",
  "before:-translate-x-1/2",
  "before:rounded-full",
  "before:bg-gradient-to-r before:from-blue-500/100 before:to-purple-700/100",
].join(" ");

export interface NavbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string; // 'to' prop for React Router Link to specify navigation target
}

export default function NavbarButton({
  to,
  children,
  className = "",
  ...props
}: NavbarButtonProps) {
  // Hooks for current browser path
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  // If button's page is active
  const isActive = match !== null;

  return (
    // Button Link
    <Link to={to}>
      {" "}
      <button
        {...props}
        className={classNames(
          navbarClasses,
          {
            "text-white/100": isActive,
          },
          className
        )}
      >
        {children}
      </button>
    </Link>
  );
}