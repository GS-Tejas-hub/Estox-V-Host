import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
};

export function Button({ variant = 'default', size = 'md', className = '', ...props }: ButtonProps): JSX.Element {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  const variants: Record<string, string> = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
    ghost: 'text-gray-900 hover:bg-gray-100',
    link: 'text-blue-600 hover:underline p-0 h-auto'
  };
  const sizes: Record<string, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-6 text-base',
    icon: 'h-10 w-10'
  };
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  return <button className={cls} {...props} />;
}



