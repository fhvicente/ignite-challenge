<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define os comandos Artisan da aplicação.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }

    /**
     * Define a programação dos comandos Artisan.
     */
    protected function schedule(Schedule $schedule): void
    {
        // Update countries daily at midnight
        $schedule->command('app:fetch-countries')->daily();
    }
}
