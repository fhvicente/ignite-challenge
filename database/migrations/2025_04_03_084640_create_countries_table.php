<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            
            $table->string('name');
            $table->string('official_name');
            $table->string('cca2', 2)->unique(); // ISO 3166-1 alpha-2
            $table->string('cca3', 3)->unique(); // ISO 3166-1 alpha-3
            $table->string('flag_svg')->nullable();
            $table->string('flag_png')->nullable();
            $table->string('continent');
            $table->json('capital')->nullable();
            $table->string('region')->nullable();
            $table->string('subregion')->nullable();
            $table->json('languages')->nullable();
            $table->json('currencies')->nullable();
            $table->json('raw_data'); // Store the complete JSON response

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
