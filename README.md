# Ignited.Red Code Challenge

A Laravel 12 + Inertia.js (React/TypeScript) + TailwindCSS application that displays country information from the REST Countries API.

## Features

- User authentication (register, login, password recovery)
- Countries listing with flags
- Filter countries by continent
- Search countries by name
- Automatic daily updates of country data

## Requirements

- PHP 8.2+
- Composer
- Node.js & NPM
- SQLite

## Installation

## 1. Clone the repository:
- git clone https://github.com/fhvicente/ignite-challenge.git
- cd ignited-challenge

## 2. Install dependencies:
- composer install
- npm install

## 3. Create and configure the environment file:
- cp .env.example .env
- php artisan key

## 4. Configure your database in the `.env` file.

## 5. Run migrations:
- php artisan migrate

## 6. Fetch countries data:
- php artisan app

## 7. Build assets:
- npm run build

## 8. Start the server:
- php artisan serve

## 9. Set up the scheduler in your crontab (for production):
- cd /path-to-your-project && php artisan schedule
/dev/null 2>&1

## Usage
1. Register a new account
2. Log in
3. Navigate to the Countries page
4. Use the search box to find specific countries
5. Use the continent dropdown to filter by continent