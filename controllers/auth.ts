//TODO: clear SESSIONTOKEN before login
//TODO: create a new SESSIONTOKEN if the login credentials are valid.
import { Request, Response } from 'express';
import { signJWT } from '../auth/authentication';
import dotenv from 'dotenv';
dotenv.config();

const login = async (req: Request, res: Response) => {
  try {
    const tokenName = process.env.SESSIONTOKEN_NAME!;
    const currentToken = req.cookies.tokenName;
    if(currentToken){
      res.clearCookie(tokenName);
    }
    const token = await signJWT('lukas.singer');
    console.log(token);
    res.cookie(tokenName, token, {
      httpOnly: true,
    });
    res.status(200).json({
      msg: 'login',
    });
  } catch (err) {
    
  }
}

const register = async (req: Request, res: Response) => {
  try {
    
  } catch (err) {
    
  }
}

export {login};