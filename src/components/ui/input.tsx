import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };

export function Input({ className = '', ...props }: InputProps): JSX.Element {
  const cls = `w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return <input className={cls} {...props} />;
}



