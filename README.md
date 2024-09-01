

# Connection Test

This project demonstrates how to set up a basic Express server connected to MongoDB using Mongoose. It uses environment variables for configuration.

## Prerequisites

- Node.js (>= 14.x)
- MongoDB (locally or via MongoDB Atlas)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd connection-test
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project and add your MongoDB connection URI and server port:

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/myDatabase
   PORT=5000
   ```

## Running the File

1. **Start the server:**

   ```bash
   node index.js
   ```

2. **Visit `http://localhost:5000`** in your web browser. You should see "Hello World!" and the server logs "connected to mongodb" if the connection is successful.

## Code Explanation

- **`index.js`**: The main entry point of the application.
  - Loads environment variables using `dotenv`.
  - Connects to MongoDB using Mongoose.
  - Starts an Express server on the port specified in the environment variables (or 3000 if not specified).


