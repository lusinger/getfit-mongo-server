import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

import { signJWT } from '../auth/authentication';
import {getSaltRounds, encryptPW, comparePW} from '../auth/password-encription';
const salt = getSaltRounds();
import {User} from '../models/User';
import {UserType} from '../types/UserType';

//TODO: clear SESSIONTOKEN before login
//TODO: create a new SESSIONTOKEN if the login credentials are valid.
const login = async (req: Request, res: Response) => {
  try {
    const tokenName = process.env.SESSIONTOKEN_NAME!;
    const currentToken = req.cookies.tokenName;
    if(currentToken){
      res.clearCookie(tokenName);
    }
    const {user, password} = req.body;
    const foundUser = await User.find({$or: [{userName: user}, {mail: user}]});
    if(foundUser.length === 1){
      const isPasswordValid = await comparePW(password, foundUser[0].password);
      if(isPasswordValid){
        const token = await signJWT('lukas.singer');
        res.cookie(tokenName, token, {
          httpOnly: true,
        });
        res.status(200).json({
          msg: 'login',
        });
      }else{
        res.status(401).json({
          msg: 'user unauthorized credentails are invalid',
        });
      }
    }else{
      res.status(401).json({
        msg: 'user unauthorized credentails are invalid',
      });
    }
  } catch (err) {
    
  }
}

//TODO: parse body parameters of req and check if all parametes of user exist
//TODO: encrypt password using bcrypt
//TODO: create a new entry in the mongoDB of the new user
const register = async (req: Request, res: Response) => {
  try {
    const user: UserType = {...req.body};
    user.password = await encryptPW(user.password);
    await User.create(user);
    res.status(201).json({
      msg: 'user created',
    })
  } catch (err) {
    console.log(err);
  }
}

export {login, register};