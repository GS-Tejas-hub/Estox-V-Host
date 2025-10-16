import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string };

export function Textarea({ className = '', ...props }: TextareaProps): JSX.Element {
  const cls = `w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return <textarea className={cls} {...props} />;
}


