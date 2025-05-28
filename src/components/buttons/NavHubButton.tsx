// src/components/buttons/NavHubButton.tsx
import React from 'react';
import classNames from 'classnames';

export type NavHubButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Icon-only circular button for the side hub
 */
export default function NavHubButton({
  className = '',
  ...props
}: NavHubButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
      // Sizing
      'p-3',

      // Background
      'bg-transparent',

      // Text
      'text-white/64',

      // Border
      'rounded-full',
      'border border-white/84',

      // Transition
      "transition-all duration-150 ease-in-out",

      // Hover
      'hover:border-transparent',
      'hover:bg-black/32',
      'hover:text-white',
      'hover:cursor-pointer',
        className
      )}
    />
  );
}
