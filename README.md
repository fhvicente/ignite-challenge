# Ignited.Red Code Challenge

A Laravel 12 + Inertia.js (React/TypeScript) + TailwindCSS application that displays country information from the REST Countries API.

## Features

- User authentication (register, login, password recovery)
- Countries listing with flags
- Filter countries by continent
- Search countries by name
- Automatic daily updates of country data
- Password reset functionality with email notifications

## Requirements

- PHP 8.2+
- Composer
- Node.js & NPM
- SQLite

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/fhvicente/ignite-challenge.git
cd ignited-challenge
```

### 2. Install dependencies:
```bash
composer install
npm install
```

### 3. Create and configure the environment file:
```bash
cp .env.example .env
php artisan key:generate
```

### 4. Configure your database in the `.env` file.

### 5. Run migrations:
```bash
php artisan migrate
```

### 6. Fetch countries data:
```bash
php artisan app:fetch-countries
```

### 7. Build assets:
```bash
npm run build
```

### 8. Start the server:
```bash
php artisan serve
```

### 9. Set up the scheduler in your crontab (for production):
```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

## Email Configuration

For demonstration purposes, this application uses [Mailtrap](https://mailtrap.io/) for handling password reset emails in the development environment. This allows testing the password reset functionality without sending real emails to users.

![Password Reset Email Example](https://github.com/fhvicente/ignite-challenge/raw/main/docs/images/password-reset-email.png)

To configure your own email settings, update the following variables in your `.env` file:

```bash
MAIL_MAILER=smtp
MAIL_HOST=your-mail-host
MAIL_PORT=your-mail-port
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-from-address
MAIL_FROM_NAME="${APP_NAME}"
```

For production, you should replace these settings with a real email service like Gmail, Amazon SES, or SendGrid.

## Usage
1. Register a new account
2. Log in
3. Navigate to the Dashboard to see country statistics
4. Use the sidebar navigation to access different sections
5. Use the search box to find specific countries
6. Use the continent dropdown to filter by continent
7. Test the password reset functionality via the login page

## Screenshots

### Dashboard
![Dashboard](https://github.com/fhvicente/ignite-challenge/raw/main/docs/images/dashboard.png)

### Countries Page
![Dashboard](https://github.com/fhvicente/ignite-challenge/raw/main/docs/images/countries.png)

### Password Reset
![Password Reset Email](https://github.com/fhvicente/ignite-challenge/raw/main/docs/images/password-reset-email.png)

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).