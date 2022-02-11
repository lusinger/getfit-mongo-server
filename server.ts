// import of node packages
import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

// import of custom modules
import { connectDB } from './db/database';

const server = express();
const port = process.env.PORT || 3001;
const connectionString = process.env.MONGODB_URI!;

const startServer = async() => {
  try {
    await connectDB(connectionString);

    server.listen(port, () => {
      console.log(`${chalk.yellowBright('[SERVER]')} listening on port ${chalk.yellowBright(port)}`);
    });
  } catch (err) {
  }
}

startServer();