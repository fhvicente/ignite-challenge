import React, { useState, FormEvent } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Auth } from '@/types';

interface Country {
    id: number;
    name: string;
    official_name: string;
    flag_svg: string;
    flag_png: string;
    continent: string;
    cca2: string;
    cca3: string;
}

interface CountriesPaginatedData {
    data: Country[];
    links: any;
    current_page: number;
    last_page: number;
}

interface CountriesProps {
    auth: Auth;
    countries: CountriesPaginatedData;
    continents: string[];
    filters: {
        search: string;
        continent: string;
    };
}

export default function Index({ auth, countries, continents, filters }: CountriesProps) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        continent: filters.continent || 'all',
    });
  
    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        get(route('countries.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const continentValue = e.target.value;
        setData('continent', continentValue);
        
        // Use Inertia router directly with query parameters
        router.visit(route('countries.index', {
            continent: continentValue,
            search: data.search
        }), {
            preserveState: true,
            preserveScroll: true,
            only: ['countries']
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Countries</h2>}
        >
            <Head title="Countries" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                {/* Search Form */}
                                <form onSubmit={handleSearch} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={data.search}
                                        onChange={(e) => setData('search', e.target.value)}
                                        placeholder="Search countries..."
                                        className="rounded-md py-2 pl-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Search
                                    </button>
                                </form>

                                {/* Continent Filter */}
                                <div className="flex items-center gap-2">
                                    <label htmlFor="continent" className="whitespace-nowrap">Filter by Continent:</label>
                                    <select
                                        id="continent"
                                        value={data.continent}
                                        onChange={handleContinentChange}
                                        className="cursor-pointer p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="all">All Continents</option>
                                        {continents.map((continent) => (
                                            <option key={continent} value={continent}>
                                                {continent}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Countries Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {countries.data.map((country) => (
                                <div
                                    key={country.id}
                                    className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                        <img
                                            src={country.flag_svg || country.flag_png}
                                            alt={`Flag of ${country.name}`}
                                            className="object-cover w-full h-48"
                                            onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = country.flag_png || '/images/placeholder-flag.png';
                                            }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">{country.name}</h3>
                                        <p className="text-sm text-gray-600">{country.official_name}</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                            {country.continent}
                                            </span>
                                            <span className="text-gray-500 text-sm">{country.cca3}</span>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>

                            {/* Pagination Links */}
                            {countries.last_page > 1 && (
                                <div className="mt-6 flex justify-center">
                                    <nav className="flex items-center gap-1">
                                        {Array.from({ length: countries.last_page }, (_, i) => i + 1).map(page => (
                                            <button
                                                key={page}
                                                onClick={() => router.get(route('countries.index', { 
                                                page, 
                                                continent: data.continent,
                                                search: data.search 
                                                }))}
                                                className={`px-3 py-1 rounded cursor-pointer ${page === countries.current_page
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}                    
