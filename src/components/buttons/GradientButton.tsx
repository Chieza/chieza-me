import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import type { ButtonProps } from "./CustomButton";

export interface GradientButtonProps extends Omit<ButtonProps, "variant"> {
  to?: string;
}

export default function GradientButton({ to, ...props }: GradientButtonProps) {
  const button = <CustomButton variant="gradient" {...props} />;
  return to ? <Link to={to}>{button}</Link> : button;
}
