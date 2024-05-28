Sure! Here's the formatted README content for your project:

Currency and Asset Tracker
This project is a web application built with React and Node.js that fetches currency and cryptocurrency values in USD and allows users to input and track their total assets. It provides two modes: an anonymous mode where users can see currency values and a login mode where users can additionally track custom assets.

Features
Fetches real-time currency and cryptocurrency values in USD.
Users can input the amount of each currency they have and see their total value.
Optional login feature where users can define additional assets like home or watch values.
No personal information other than username and password is required for login.
User data is not stored in a database for anonymous mode, ensuring user privacy.
Backend is built with Express.js and uses SQLite3 (with TypeORM for easy database switching).
Frontend is built with React (Create React App).
Prerequisites
Node.js
npm (Node Package Manager)
SQLite3 (default, can be changed to other relational databases)
Getting Started
Backend Setup
Navigate to the server directory:

bash
Copy code
cd server
Install the required dependencies:

bash
Copy code
npm install
Create a .env file based on .env.example and configure the necessary environment variables:

ini
Copy code
DB_USERNAME="root"
DB_PASSWORD="rootPass"
SECRET="secret"
JWT_EXPIRATION="1h"
Start the server in watching mode:

bash
Copy code
npm start
The backend server will run on port 4000.

Frontend Setup
Navigate to the app directory:

bash
Copy code
cd app
Install the required dependencies:

bash
Copy code
npm install
Configure the server settings in src/configs/server.ts:

ts
Copy code
export const serverConfigs = {
SERVER_URL: "http://localhost:4000/",
API_VERSION: "v1/",
};
Start the React application:

bash
Copy code
npm start
The React application will run on port 3000.

Usage
Anonymous Mode
Open the application in your browser (http://localhost:3000).
View the real-time values of various currencies and cryptocurrencies.
Input the amount of each currency you have to see your total value in USD.
Login Mode
Click on the login button and enter your username and password.
In addition to viewing currencies, you can define and track custom assets.
Enter the name and value of your assets in USD to include them in your total assets calculation.
Environment Variables
Backend (.env)
DB_USERNAME: The username for the database connection (default: "root").
DB_PASSWORD: The password for the database connection (default: "rootPass").
SECRET: The secret key for JWT token generation.
JWT_EXPIRATION: The expiration time for JWT tokens (default: "1h").
Frontend (src/configs/server.ts)
SERVER_URL: The URL of the backend server (default: http://localhost:4000/).
API_VERSION: The version of the API (default: v1/).
Changing the Database
To switch from SQLite3 to another relational database:

Install the required database driver (e.g., pg for PostgreSQL).
Update the DATABASE_URL in the .env file with the new database connection string.
Update the TypeORM configuration in the server to use the new database.
Docker Support
The project is not dockerized by default. However, you can create Dockerfiles for both the backend and frontend and use Docker Compose to orchestrate them.

Development
Backend
The backend code is located in the server directory.
To run the server in development mode with hot-reloading:
bash
Copy code
npm run dev
Frontend
The frontend code is located in the app directory.
To run the React application in development mode with hot-reloading:
bash
Copy code
npm start
Contributing
Feel free to submit issues and pull requests for improvements and bug fixes.

License
This project is licensed under the MIT License.
