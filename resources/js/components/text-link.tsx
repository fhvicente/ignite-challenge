import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export default function TextLink({ className = '', children, ...props }: LinkProps) {
    return (
        <Link
            className={cn(
                'text-indigo-600 hover:text-indigo-800 transition-colors font-medium',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
