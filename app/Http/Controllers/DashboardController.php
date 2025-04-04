<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Estatísticas básicas
        $totalCountries = Country::count();
        $totalContinents = Country::distinct('continent')->count('continent');
        
        // Países por continente para o gráfico
        $countriesByContinent = Country::select('continent', DB::raw('count(*) as total'))
            ->groupBy('continent')
            ->orderBy('total', 'desc')
            ->get();
            
        // Países mais recentemente atualizados
        $recentCountries = Country::orderBy('updated_at', 'desc')
            ->take(5)
            ->get();
        
        return Inertia::render('dashboard', [
            'stats' => [
                'totalCountries' => $totalCountries,
                'totalContinents' => $totalContinents,
                'countriesByContinent' => $countriesByContinent,
                'recentCountries' => $recentCountries,
            ],
        ]);
    }
} 