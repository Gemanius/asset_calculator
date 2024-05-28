## Currency and Asset Calculator

This project is a web application designed for user privacy and flexibility:

- **Privacy-Focused Currency Calculator:** View live exchange rates and calculate total currency values without requiring login or storing user data.
- **Optional Login:** Use an account with username and password to track personal assets like home value or watch price, ensuring data isolation for each user.

**Technologies:**

- Backend: Node.js (Express.js), TypeORM
- Database: SQLite3 (easily replaceable with other relational databases)
- Frontend: React (created with Create React App)

**Project Structure:**

```
currency-asset-calculator/
  server/   # Node.js backend code (server.js)
    .env.example # Example environment variables
  app/      # React frontend code
  README.md  # This file
  package.json  # Project dependencies
```

**Installation:**

1. Clone this repository.
2. Install dependencies for both backend and frontend:
   - Navigate to the `server` directory: `cd server`
   - Run `npm install` to install Node.js dependencies.
   - Navigate back to the root directory: `cd ..`
   - Navigate to the `app` directory: `cd app`
   - Run `npm install` to install React dependencies.

**Environment Variables:**

- Create separate environment variable files for backend and modify the configuration for frontend in src/configs directory to improve security and maintainability:
- Update the environment variables in these files with your specific details:

  - **Server-Specific Variables (``.env.example```):**
    - `DB_USERNAME`: Username for your database connection.
    - `DB_PASSWORD`: Password for your database connection.
    - `SECRET`: Secret key used for JWT generation (ensure this is a strong, random string).
    - `JWT_EXPIRATION`: Duration (e.g., "1h" for 1 hour) for JWT tokens to remain valid.

**Configuration:**

- React configuration for the server URL and API version is located in `src/configs/server.ts`:

  ```typescript
  export const serverConfigs = {
    SERVER_URL: "http://localhost:4000/",
    API_VERSION: "v1/",
  };
  ```

  - Update these values if your server runs on a different port or uses a different API version.

**Running the Application:**

1. **Backend (Node.js server):**

   - In the `server` directory, run `npm start` to start the server in watching mode. This will typically run the server on port 4000.

2. **Frontend (React app):**
   - In the `app` directory, run `npm run start` to start the React development server. This will typically run the app on port 3000 (you can access it at http://localhost:3000 in your browser).

**Usage:**

1. Visit http://localhost:3000 in your browser to access the currency calculator.
2. You can view the exchange rates and use the calculator without logging in.
3. (Optional) To track personal assets, navigate to the login page and create an account with a username and password.
4. Once logged in, you can define custom assets and track their values.

**Customization:**

- You can easily switch the database from SQLite3 to another relational database by updating the TypeORM configuration in `server/` and potentially modifying the database connection details in the environment variables.

**Dockerizing the Project (Optional):**

This project is not currently Dockerized, but you can optionally add Docker support by creating a Dockerfile and modifying the startup commands.

**Additional Notes:**

- Feel free to modify the code and features to suit your specific needs.
- Consider adding unit and integration tests for both the backend and frontend to ensure code quality.
- This is a basic example, and you may want to implement security measures for the optional login feature in a production environment.
