import { Link } from 'react-router-dom'
import CustomButton from './CustomButton';
import type { ButtonProps } from './CustomButton';

export interface NavbarButtonProps extends Omit<ButtonProps, 'variant'> {
  to: string
}

export default function NavbarButton({
  to,
  children,
  ...props
}: NavbarButtonProps) {
  return (
    <Link to={to}>
      <CustomButton variant="navbar" {...props}>
        {children}
      </CustomButton>
    </Link>
  )
}