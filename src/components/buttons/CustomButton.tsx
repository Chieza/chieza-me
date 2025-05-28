// Base button with variant support
import React from "react";
import classNames from "classnames";

export type ButtonVariant = "outline" | "gradient" | "navbar";

// Class organization:
// Sizing
// Background
// Text
// Border
// Shadow
// Transition
// Hover
// Others

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  outline: [
    // Sizing
    "px-4 py-2",

    // Text
    "text-white/94",

    // Border
    "border border-white",
    "rounded-lg",

    // Transition
    "transition-all duration-300 ease-in-out",

    // Hover
    "hover:bg-black/48",
    "hover:text-white",
    "hover:border-white/0",
    "hover:cursor-pointer",
  ].join(" "),
  gradient: [
    // Sizing
    "px-4 py-2",

    // Background
    "bg-gradient-to-r from-blue-500 to-purple-700",

    // Text
    "text-white",

    // Border
    "rounded-lg",

    // Shadow:
    "shadow-lg",
    "shadow-blue-500/24",

    // Transition
    "transition-all duration-300 ease-in-out",

    // Hover
    "hover:from-purple-400",
    "hover:to-blue-400",
    "hover:text-black/80",
    "hover:cursor-pointer",
  ].join(" "),
  navbar: [
    // Sizing
    "px-1 py-2",

    // Text
    "text-white/84",

    // Transition
    "before:transition-all before:duration-300",

    // Hover
    "hover:text-white",
    "hover:cursor-pointer",
    "hover:before:w-full",

    // Others - Bottom Line
    "relative inline-block",
    'before:content-[""]',
    "before:absolute before:left-1/2 before:bottom-1",
    "before:h-0.75 before:w-0",
    "before:-translate-x-1/2",
    "before:rounded-full",
    "before:bg-gradient-to-r before:from-blue-500 before:to-purple-700",
  ].join(" "),
};

export default function CustomButton({
  variant = "outline",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames("font-medium", variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}
