````markdown
# Currency and Asset Tracker

This project is a web application built with React and Node.js that fetches currency and cryptocurrency values in USD and allows users to input and track their total assets. It provides two modes: an anonymous mode where users can see currency values and a login mode where users can additionally track custom assets.

## Features

- Fetches real-time currency and cryptocurrency values in USD.
- Users can input the amount of each currency they have and see their total value.
- Optional login feature where users can define additional assets like home or watch values.
- No personal information other than username and password is required for login.
- User data is not stored in a database for anonymous mode, ensuring user privacy.
- Backend is built with Express.js and uses SQLite3 (with TypeORM for easy database switching).
- Frontend is built with React (Create React App).

## Prerequisites

- Node.js
- npm (Node Package Manager)
- SQLite3 (default, can be changed to other relational databases)

## Getting Started

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
````

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and configure the necessary environment variables:

   ```ini
   DB_USERNAME="root"
   DB_PASSWORD="rootPass"
   SECRET="secret"
   JWT_EXPIRATION="1h"
   ```

4. Start the server in watching mode:
   ```bash
   npm start
   ```
   The backend server will run on port 4000.

### Frontend Setup

1. Navigate to the `app` directory:

   ```bash
   cd app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Configure the server settings in `src/configs/server.ts`:

   ```ts
   export const serverConfigs = {
     SERVER_URL: "http://localhost:4000/",
     API_VERSION: "v1/",
   };
   ```

4. Start the React application:
   ```bash
   npm start
   ```
   The React application will run on port 3000.

## Usage

### Anonymous Mode

1. Open the application in your browser (`http://localhost:3000`).
2. View the real-time values of various currencies and cryptocurrencies.
3. Input the amount of each currency you have to see your total value in USD.

### Login Mode

1. Click on the login button and enter your username and password.
2. In addition to viewing currencies, you can define and track custom assets.
3. Enter the name and value of your assets in USD to include them in your total assets calculation.

## Environment Variables

### Backend (.env)

- `DB_USERNAME`: The username for the database connection (default: "root").
- `DB_PASSWORD`: The password for the database connection (default: "rootPass").
- `SECRET`: The secret key for JWT token generation.
- `JWT_EXPIRATION`: The expiration time for JWT tokens (default: "1h").

### Frontend (src/configs/server.ts)

- `SERVER_URL`: The URL of the backend server (default: `http://localhost:4000/`).
- `API_VERSION`: The version of the API (default: `v1/`).

## Changing the Database

To switch from SQLite3 to another relational database:

1. Install the required database driver (e.g., `pg` for PostgreSQL).
2. Update the `DATABASE_URL` in the `.env` file with the new database connection string.
3. Update the TypeORM configuration in the `server` to use the new
