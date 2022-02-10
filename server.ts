import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

const server = express();
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`${chalk.yellowBright('[SERVER]')} listening on port ${chalk.yellowBright(port)}`);
});