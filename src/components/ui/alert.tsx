import * as React from "react"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'destructive';
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className = '', variant = 'default', ...props }, ref) => {
        const variantClasses = variant === 'destructive'
            ? 'border-red-500/50 bg-red-50 text-red-600'
            : 'bg-background text-foreground';

        return (
            <div
                ref={ref}
                role="alert"
                className={`relative w-full rounded-lg border p-4 ${variantClasses} ${className}`}
                {...props}
            />
        );
    }
);
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', ...props }, ref) => (
    <div
        ref={ref}
        className={`text-sm leading-relaxed ${className}`}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription }
