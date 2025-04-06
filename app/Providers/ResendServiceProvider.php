<?php

namespace App\Providers;

use App\Services\CustomResendTransport;
use Illuminate\Mail\MailManager;
use Illuminate\Support\ServiceProvider;

class ResendServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        $this->app->afterResolving(MailManager::class, function (MailManager $manager) {
            $manager->extend('resend', function ($config) {
                $key = $config['key'] ?? config('services.resend.key');
                $verifySSL = $config['verify_ssl'] ?? config('services.resend.verify_ssl', true);
                
                return new CustomResendTransport($key, $verifySSL);
            });
        });
    }
} 