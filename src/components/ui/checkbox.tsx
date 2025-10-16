import React from 'react';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
};

export function Checkbox({ className = '', onCheckedChange, checked, defaultChecked, ...props }: CheckboxProps): JSX.Element {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={(e) => onCheckedChange?.(e.currentTarget.checked)}
      {...props}
    />
  );
}


