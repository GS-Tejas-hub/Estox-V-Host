import React, { useEffect } from 'react';

export function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }): JSX.Element | null {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onOpenChange]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      {children}
    </div>
  );
}

export function DialogContent({ className = '', children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={`w-full max-w-lg rounded-xl bg-white shadow-xl ${className}`}>{children}</div>;
}

export function DialogHeader({ className = '', children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <div className={`p-6 border-b ${className}`}>{children}</div>;
}

export function DialogTitle({ className = '', children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function DialogDescription({ className = '', children }: { className?: string; children: React.ReactNode }): JSX.Element {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
}



