<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CountryController extends Controller
{
    public function index (Request $request) 
    {    
        $query = Country::query();

        // Filter by continent if provided
        if ($request->has('continent') && $request->continent !== 'all') {
            $query->where('continent', $request->continent);
        }

        // Search by name if provided
        if ($request->has('search') && !empty($request->search)) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $countries = $query->orderBy('name')->pagination(20);

        // Get unique continents for filter dropdown
        $continents = Country::select('continent')
            ->distinct()
            ->orderBy('continent')
            ->pluck('continent');

        return Inertia::render('Contries/Index', [
            'countries' => $countries,
            'continents' => $continents,
            'filters' => $request->only(['search', 'continent']),
        ]);
    }
}
