import React from 'react';

export function Label({ className = '', ...props }: React.LabelHTMLAttributes<HTMLLabelElement>): JSX.Element {
  return <label className={`text-sm font-medium text-gray-700 ${className}`} {...props} />;
}



