<?php

namespace App\Console\Commands;

use App\Models\Country;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FetchCountries extends Command
{

    protected $signature = 'app:fetch-countries';
    protected $description = 'Fetch countries data from restcountries.com API and store in database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Fetching country data...');

        try {
            $response = Http::get('https://restcountries.com/v3.1/all');

            if ($response->successful()) {
                $countries = $response->json();
                $this->info('Found ' . count($countries) . ' countries.');

                // Clear existing records to avoid duplicates
                Country::truncate();
                $this->info('Cleared existing countries data.');

                foreach ($countries as $countryData) {
                    try {
                        Country::create ([
                            'name' => $countryData['name']['common'] ?? 'Unknown',
                            'official_name' => $countryData['name']['official'] ?? 'Unknown',
                            'cca2' => $countryData['cca2'] ?? '',
                            'cca3' => $countryData['cca3'] ?? '',
                            'flag_svg' => $countryData['flags']['svg'] ?? null,
                            'flag_png' => $countryData['flags']['png'] ?? null,
                            'continent' => $countryData['continents'][0] ?? 'Unknown',
                            'capital' => $countryData['capital'] ?? [],
                            'region' => $countryData['region'] ?? null,
                            'subregion' => $countryData['subregion'] ?? null,
                            'languages' => $countryData['languages'] ?? [],
                            'currencies' => $countryData['currencies'] ?? [],
                            'raw_data' => $countryData,
                        ]);
                    } catch (\Exception $e) {
                        $this->error("Error processing country: " . ($countryData['name']['common'] ?? 'Unknown'));
                        log::error('Error processing country data: ' . $e->getMessage(), [
                            'country' => $countryData['name']['common'] ?? 'Unknow',
                            'exception' => $e,
                        ]);
                    }
                }
                $this->info('Countries data has been updated successfully.');
                return Command::SUCCESS;
            }

            $this->error('Failed to fetch countries data from API.');
            log::error('Failed to fetch countries data from API.', [
                'status' => $response->status(),
                'response' => $response->body(),
            ]);
            return Command::FAILURE;
        } catch (\Exception $e) {
            $this->error('Exception while fetching countries: ' . $e->getMessage());
            log::error('Exception while fetching countries', [
                'exception' => $e,
            ]);
            return Command::FAILURE;
        }
    }
}
