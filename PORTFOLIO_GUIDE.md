# Portfolio Deployment Guide

This Laravel + React portfolio is pre-configured for easy hosting.

## Steps to Run Locally

1.  **Configure Environment**:
    *   Ensure `.env` exists and has a configured database (SQLite is used by default in Laravel 11/12).
    *   Run `php artisan migrate --seed` (if database setup is needed).

2.  **Serve the Application**:
    *   Simply run: `php artisan serve`
    *   Access via: `http://localhost:8000`

## Easy Hosting (No `npm run dev` required)

*   The assets are **pre-built** in the `/public/build` directory.
*   In the `.env` file, ensure `APP_ENV=production` is set when deploying.
*   You **do not** need to install Node.js on the production server if you have the `public/build` folder.
*   Just point your web server (Apache/Nginx) to the `public/` directory.

## Technology Stack

*   **Backend**: Laravel 12 (PHP 8.2+)
*   **Frontend**: React 18 with Inertia.js 2.0
*   **Styling**: Tailwind CSS 4.0
*   **Animations**: Framer Motion
*   **Icons**: Lucide React

## Senior Developer Features Included

-   **Inertia.js Integration**: Modern SPA feel with Laravel backend.
-   **Structured Components**: Modular React architecture.
-   **Professional UI**: High-end minimalist design with dark mode.
-   **Portfolio Sections**: Dynamic project cards, skills cloud, and interactive experience timeline.
