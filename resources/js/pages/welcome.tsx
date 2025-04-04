import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="mx-auto container min-h-screen">
                <header className="mx-auto px-6 py-5 transition-all">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-gradient-primary">
                                Countries App
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <>
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-50 hover:shadow-sm"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href={route('countries.index')}
                                        className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
                                    >
                                        View Countries
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-50 hover:shadow-sm"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>
                
                <main className="mx-auto px-6 py-16">
                    <div className="mx-auto max-w-4xl text-center animate-fade-in">
                        <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                            Explore Countries <span className="text-gradient-primary">Around the World</span>
                        </h1>
                        <p className="mb-10 text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover information about countries, flags, capitals, and more in our comprehensive database.
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-slide-up">
                            {auth.user ? (
                                <Link
                                    href={route('countries.index')}
                                    className="w-full rounded-lg bg-gradient-primary px-8 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 sm:w-auto"
                                >
                                    Browse Countries
                                </Link>
                            ) : (
                                <Link
                                    href={route('register')}
                                    className="w-full rounded-lg bg-gradient-primary px-8 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 sm:w-auto"
                                >
                                    Get Started
                                </Link>
                            )}
                            <Link
                                href="#features"
                                className="w-full rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md sm:w-auto"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mt-32" id="features">
                        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Features</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                <div className="mb-5 inline-flex rounded-full bg-indigo-100 p-3 text-indigo-600">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Global Database</h3>
                                <p className="text-gray-600">Access information about every country in the world with our comprehensive database.</p>
                            </div>
                            
                            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                <div className="mb-5 inline-flex rounded-full bg-indigo-100 p-3 text-indigo-600">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Advanced Search</h3>
                                <p className="text-gray-600">Find countries by name, region, or continent with our easy-to-use search functionality.</p>
                            </div>
                            
                            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                <div className="mb-5 inline-flex rounded-full bg-indigo-100 p-3 text-indigo-600">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Visual Data</h3>
                                <p className="text-gray-600">View flags, geographic data, and other visual information about countries around the world.</p>
                            </div>
                        </div>
                    </div>
                </main>
                
                <footer className="border-t border-gray-200 p-20">
                    <div className="mx-auto px-6">
                        <div className="flex flex-col items-center">
                            <p className="text-center text-sm text-gray-600 max-w-md mx-auto">
                                Explore the world information from an elegant application.
                            </p>
                            <div className="h-px w-24 bg-gradient-primary my-6 rounded-full"></div>
                            <p className="text-center text-sm text-gray-600">
                                &copy; {new Date().getFullYear()} Countries App. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
