<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(3),
            'user_id' => $this->getUser()->id,
            'created_at' => $this->faker->dateTimeBetween('-10 years', 'now'),
        ];
    }

    /**
     * Get a random user.
     */
    private function getUser()
    {
        return User::inRandomOrder()->first() ?? User::factory()->create();
    }
}
