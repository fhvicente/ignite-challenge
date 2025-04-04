import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-white flex min-h-screen flex-col items-center justify-center p-6 md:p-10 animate-fade-in">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/" className="flex flex-col items-center gap-2 font-medium">
                            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
                                <AppLogoIcon className="size-8 fill-current text-white" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-bold text-gradient-primary">{title}</h1>
                            <p className="text-gray-600 text-center text-sm max-w-xs mx-auto">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-600">
                <Link href="/" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                    &larr; Back to home
                </Link>
            </div>
        </div>
    );
}
