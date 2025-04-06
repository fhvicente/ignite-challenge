<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Mail\Transport\Transport;
use Symfony\Component\Mailer\SentMessage;
use Symfony\Component\Mime\MessageConverter;

class CustomResendTransport extends Transport
{
    protected $key;
    protected $verifySSL;

    public function __construct(string $key, bool $verifySSL = true)
    {
        $this->key = $key;
        $this->verifySSL = $verifySSL;
    }

    public function send(SentMessage $message): void
    {
        $email = MessageConverter::toEmail($message->getOriginalMessage());
        
        $payload = [
            'from' => $email->getFrom()[0]->getAddress(),
            'to' => collect($email->getTo())->map->getAddress()->all(),
            'subject' => $email->getSubject(),
            'html' => $this->getHtmlBody($email),
            'text' => $this->getTextBody($email),
        ];
        
        // Configurar HTTP sem verificação SSL se necessário
        $http = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->key,
            'Content-Type' => 'application/json',
        ]);
        
        if (!$this->verifySSL) {
            $http = $http->withoutVerifying();
        }
        
        $response = $http->post('https://api.resend.com/emails', $payload);
        
        if (!$response->successful()) {
            throw new \Exception('Failed to send email via Resend: ' . $response->body());
        }
    }

    protected function getTextBody($email)
    {
        return $email->getTextBody();
    }

    protected function getHtmlBody($email)
    {
        return $email->getHtmlBody();
    }
} 