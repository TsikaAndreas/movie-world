<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'email' => 'test@example.com',
        ]);
        User::factory()->count(20)->create();
        Movie::factory()->count(200)->create();

         $this->call([
             OpinionSeeder::class,
         ]);
    }
}
