import {Router} from 'express';
import { login, register } from '../controllers/auth';

const authRouter = Router();

authRouter.get('/login', login);
authRouter.post('/register', register);

export {authRouter};