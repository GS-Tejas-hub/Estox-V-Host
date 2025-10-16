import React, { useEffect, useMemo, useRef, useState } from 'react';

type SelectContextShape = {
  value: string;
  setOpen: (v: boolean) => void;
  onValueChange: (v: string) => void;
};

const SelectContext = React.createContext<SelectContextShape | null>(null);

export function Select({ value, onValueChange, children }: { value: string; onValueChange: (v: string) => void; children: React.ReactNode }): JSX.Element {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Split children into trigger and content so content isn't always rendered inline
  const { trigger, content } = useMemo(() => {
    const arr = React.Children.toArray(children) as React.ReactElement[];
    const triggerEl = arr.find((c: any) => c && c.type === SelectTrigger);
    const contentEl = arr.find((c: any) => c && c.type === SelectContent);
    return { trigger: triggerEl, content: contentEl };
  }, [children]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <SelectContext.Provider value={{ value, setOpen, onValueChange }}>
      <div className="relative" ref={containerRef}>
        {trigger}
        {open && (
          <div className="absolute left-0 right-0 mt-2 z-10">
            <SelectContentInternal>{content?.props?.children}</SelectContentInternal>
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }): JSX.Element {
  const ctx = React.useContext<SelectContextShape | null>(SelectContext);
  return (
    <button type="button" className={`w-full h-10 px-3 border rounded-md text-left ${className}`} onClick={() => ctx?.setOpen(!(false as any) || true)}>
      {children}
    </button>
  );
}

function SelectContentInternal({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="w-full border rounded-md bg-white shadow-md p-1">{children}</div>;
}

export function SelectContent({ children }: { children: React.ReactNode }): JSX.Element {
  return <>{children}</>;
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }): JSX.Element {
  const ctx = React.useContext<SelectContextShape | null>(SelectContext);
  return (
    <div
      className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        ctx?.onValueChange(value);
        ctx?.setOpen(false);
      }}
    >
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }): JSX.Element {
  const ctx = React.useContext<SelectContextShape | null>(SelectContext);
  const labelMap: Record<string, string> = {
    all: 'All Types',
    roi_desc: 'Highest ROI',
    roi_asc: 'Lowest ROI',
    investment_asc: 'Lowest Investment',
    investment_desc: 'Highest Investment'
  };
  const text = ctx?.value ? (labelMap[ctx.value] ?? ctx.value) : placeholder;
  return <span className="text-gray-700">{text}</span>;
}


