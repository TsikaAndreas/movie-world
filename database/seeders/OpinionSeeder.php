<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Seeder;

class OpinionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        Movie::chunk(100, function ($movies) use ($users) {
            foreach ($movies as $movie) {
                $randomUsers = $users->random(random_int(1, $users->count()));

                $opinions = [];
                foreach ($randomUsers as $user) {
                    // Not all have shared their opinion, so let's skip some
                    if (random_int(0, 1) === 0) {
                        continue;
                    }

                    $opinions[$user->id] = ['type' => random_int(0, 1) % 2 === 0 ? Movie::TYPE_LIKE : Movie::TYPE_HATE];
                }

                $movie->opinions()->attach($opinions);
            }
        });
    }
}
