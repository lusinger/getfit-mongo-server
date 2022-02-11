import express from 'express';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

// import of custom modules
import { verifyToken } from './middlewares/authenticate';

const server = express();
const port = process.env.PORT || 3001;

server.use(express());
server.use(express.json());
server.use(cookieParser());
server.use('/api/v1', verifyToken);

server.listen(port, () => {
  console.log(`${chalk.yellowBright('[SERVER]')} listening on port ${chalk.yellowBright(port)}`);
});