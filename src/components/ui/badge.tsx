import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  variant?: 'default' | 'outline';
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps): JSX.Element {
  const base = 'inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold';
  const variants: Record<string, string> = {
    default: 'bg-gray-200 text-gray-900',
    outline: 'border border-gray-300 text-gray-700'
  };
  const cls = `${base} ${variants[variant]} ${className}`.trim();
  return <span className={cls} {...props} />;
}


