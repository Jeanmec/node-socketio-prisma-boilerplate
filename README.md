# Node Socket.IO Prisma Boilerplate

This project is a boilerplate for a Node.js server with Socket.IO using TypeScript.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Jeanmec/node-socketio-boilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-socketio-boilerplate
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Rename the `.env.example` file to `.env` and add necessary configurations.

2. Modify the environment variables in the `.env` file according to your requirements:

   ```
   PORT=3000
   ```

## Usage

To start the server, run the following command:

```bash
npm run dev
```

The server will be accessible at http://localhost:3000 (or the port specified in your .env file).

## Prisma Database Setup

Before running the server, ensure your database is set up:

### Run Prisma Migrations

Run the following command to apply migrations to your database schema:

```bash
npx prisma migrate dev --schema=./src/prisma/schema.prisma
```

### Seed the Database

To seed initial data into your database, run the following command:

```bash
npx prisma db seed
```
