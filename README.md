# Inertia App

## Description
This project is a web application built using the Laravel and Vue.js frameworks, with Inertia.js as the communication medium between the server and client. The application aims to provide a seamless user experience by combining the power of Laravel's backend capabilities with Vue.js's reactive components. It includes features for user login and registration.

## Features
- User Login: Allow users to securely log in to their accounts.
- User Registration: Provide a registration form for new users to create an account.
- User Logout: Allow users to log out of their accounts.
- User Dashboard: Provide a personalized dashboard for each logged-in user.

## Technologies Used
- Laravel: A PHP web application framework that provides a robust set of tools and features for building web applications.
- Vue.js: A progressive JavaScript framework for building user interfaces.
- Inertia.js: A library that allows you to build single-page applications using classic server-side routing and controllers.

## Installation
1. Clone the repository: `git clone https://github.com/miloszanix/inertia.git`
2. Install dependencies: `composer install && npm install`
3. Create a copy of the `.env.example` file and rename it to `.env`
4. Configure the database settings in the `.env` file
5. Generate an application key: `php artisan key:generate`
6. Migrate the database: `php artisan migrate`
7. Build the frontend assets: `npm run dev`

## Usage
1. Start the local development server: `php artisan serve`
2. Access the application in your web browser at `http://localhost:8000`

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push the branch to your forked repository: `git push origin feature/your-feature-name`
5. Submit a pull request detailing your changes and their benefits