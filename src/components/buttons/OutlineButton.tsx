import CustomButton from './CustomButton';
import type { ButtonProps } from './CustomButton';

/** Pre-configured outlined button */
export default function OutlineButton(
  props: Omit<ButtonProps, 'variant'>
) {
  return <CustomButton variant="outline" {...props} />;
}