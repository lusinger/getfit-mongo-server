// TODO: create middleware function that verifies the passed token
// TODO: if token is valid redirect to requested route using next
// TODO: if token is invalid return 401 (unauthorized) error
import {Request, Response, NextFunction} from 'express';
import { verifyJWT } from '../auth/authentication';
import { TokenExpiredError } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenName = process.env.SESSIONTOKEN_NAME;
    if(tokenName){
      const token = req.cookies.tokenName;
      const isTokenValid = await verifyJWT(token);
      if(isTokenValid){
        next();
      }
    }else{
      throw new Error('session token environment variable not found');
    }
  } catch (err) {
    if(err instanceof TokenExpiredError){
      res.status(401).json({
        msg: 'unauthorized to access data',
      });
    }
  }
}

export {verifyToken};