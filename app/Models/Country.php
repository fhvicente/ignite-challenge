<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'official_name',
        'cca2',
        'cca3',
        'flag_svg',
        'flag_png',
        'continent',
        'capital',
        'region',
        'subregion',
        'languages',
        'currencies',
        'raw_data',
    ];

    protected $casts = [
        'capital' => 'array',
        'languages' => 'array',
        'currencies' => 'array',
        'raw_data' => 'array',
    ];
}
