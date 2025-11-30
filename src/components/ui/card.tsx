import React from 'react';

export function Card({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`rounded-2xl border border-gray-200 bg-white ${className}`} {...props} />;
}

export function CardHeader({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`p-6 ${className}`} {...props} />;
}

export function CardTitle({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />;
}

export function CardDescription({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return <p className={`text-sm text-gray-600 ${className}`} {...props} />;
}

export function CardContent({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`p-6 ${className}`} {...props} />;
}




