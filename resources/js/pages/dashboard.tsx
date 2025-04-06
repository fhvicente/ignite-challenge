import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardProps {
    stats: {
        totalCountries: number;
        totalContinents: number;
        countriesByContinent: {
            continent: string;
            total: number;
        }[];
        recentCountries: {
            id: number;
            name: string;
            flag_svg: string;
            flag_png: string;
            continent: string;
            updated_at: string;
        }[];
    };
}

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="p-4 md:p-6 w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Countries Dashboard</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Total Countries</p>
                                <p className="text-3xl font-bold text-indigo-600 mt-1">{stats.totalCountries}</p>
                            </div>
                            <div className="p-3 bg-indigo-100 rounded-full">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 progress">
                            <div className="progress-bar progress-bar-primary" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Total Continents</p>
                                <p className="text-3xl font-bold text-green-600 mt-1">{stats.totalContinents}</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-full">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 progress">
                            <div className="progress-bar" style={{ width: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
                        </div>
                    </div>
                </div>
                
                {/* Countries by Continent */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Countries by Continent</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Continent
                                    </th>
                                    <th scope="col">
                                        Total Countries
                                    </th>
                                    <th scope="col">
                                        Distribution
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.countriesByContinent && stats.countriesByContinent.length > 0 ? (
                                    stats.countriesByContinent.map((item) => (
                                        <tr key={item.continent}>
                                            <td className="whitespace-nowrap font-medium">
                                                {item.continent || 'Unknown'}
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <span className="badge badge-primary">{item.total}</span>
                                            </td>
                                            <td>
                                                <div className="progress">
                                                    <div 
                                                        className="progress-bar progress-bar-primary" 
                                                        style={{ width: `${(item.total / stats.totalCountries) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-gray-600 mt-1 inline-block">
                                                    {Math.round((item.total / stats.totalCountries) * 100)}%
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center">
                                            No continent data available. Please run the fetch countries command.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Recent Countries */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-lg font-semibold mb-6 text-gray-900">Recently Updated Countries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {stats.recentCountries && stats.recentCountries.length > 0 ? (
                            stats.recentCountries.map((country, index) => (
                                <div 
                                    key={country.id}
                                    className="border rounded-lg overflow-hidden flex shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                                    style={{ animationDelay: `${0.05 * index}s` }}
                                >
                                    <div className="w-16 h-16 flex-shrink-0 bg-gradient-light flex items-center justify-center">
                                        <img 
                                            src={country.flag_svg || country.flag_png} 
                                            alt={`Flag of ${country.name}`}
                                            className="w-10 h-10 object-contain"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = '/images/placeholder-flag.png';
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 flex-grow">
                                        <h3 className="font-medium text-gray-900">{country.name}</h3>
                                        <div className="flex items-center mt-1">
                                            <span className="badge badge-primary text-xs">{country.continent}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 p-4 text-center text-gray-600 bg-gray-50 rounded-lg">
                                No countries data available. Please run the fetch countries command.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
