# Movie Management Application

## Overview

This project is a Movie Management Application built using PHP, JavaScript, React, and various other technologies. It allows users to create, view, and manage movies, including sorting and filtering based on different criteria.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Author](#author)
- [License](#license)

## Technologies Used

- **PHP**: Backend logic.
- **Laravel**: PHP framework used for building the backend.
- **JavaScript**: Frontend logic.
- **React**: JavaScript library for building user interfaces.
- **Inertia.js**: Bridges the gap between Laravel and React.
- **Composer**: Dependency management for PHP.
- **NPM**: Dependency management for JavaScript.
- **MySQL**: Database management system.
- **Bootstrap**: Frontend framework for building responsive websites.
- **Local Development Environment**: [Laragon website](https://laragon.org/) or [Laragon Git](https://github.com/leokhoa/laragon).

## Installation

### Prerequisites

- PHP >= 8.2
- Composer
- Node.js and NPM
- MySQL or any other supported database

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/TsikaAndreas/movie-world.git
    cd movie-world
    ```

2. **Install PHP dependencies:**
    ```sh
    composer install
    ```

3. **Install JavaScript dependencies:**
    ```sh
    npm install
    ```

4. **Set up environment variables:**
    ```sh
    cp .env.example .env
    php artisan key:generate
    ```

5. **Configure the `.env` file:**
   Update the database and other configurations that you want to change in the `.env` file.

6. **Run database migrations & seeders:**
    ```sh
    php artisan migrate --seed
    ```

7. **Build the frontend assets:**
    ```sh
    npm run build
    ```

8. **Start the development server:**
    ```sh
    php artisan serve
    ```

## Configuration

### Environment Variables

- `DB_CONNECTION`: Database connection type (e.g., `mysql`).
- `DB_HOST`: Database host.
- `DB_PORT`: Database port.
- `DB_DATABASE`: Database name.
- `DB_USERNAME`: Database username.
- `DB_PASSWORD`: Database password.

## Usage

### Login Credentials

- **Email**: `test@example.com`
- **Password**: `password`

### Running the Application

Build the frontend assets:
```sh
npm run build
```

To start the application, run the following command:
```sh
php artisan serve
```

### Accessing the Application

The application will be accessible at `http://localhost:8000`.

## Author

Developed by Andrei-Robert Tsika.

## License

This project is open source and available under the [MIT License](LICENSE.md).
