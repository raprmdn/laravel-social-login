<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Laravel Socialite

Laravel Socialite Login with, provider:

- [Google OAuth](https://console.cloud.google.com/getting-started?hl=id).
- [GitHub OAuth](https://github.com/).

## Setup

Clone this repository
```bash
git clone https://github.com/raprmdn/laravel-social-login.git
```
cd into project, and
```bash
composer install
```
```bash
cp .env.example .env
```
```bash
php artisan key:generate
```
```bash
php artisan migrate
```
```php
// Config Google Key
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT=http://localhost:8000/login/google/callback

// Config Github Key
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_REDIRECT=http://localhost:8000/login/github/callback
```
```bash
npm install && npm run dev
```
Run the laravel application:
```bash
php artisan serve
```


