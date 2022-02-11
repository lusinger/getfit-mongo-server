//TODO: token sign function to create jwt token used algorith RS256
//TODO: token verify function to verify jwt token
//TODO: error handler for jwt functions (TokenExpiredError, JsonWebTokenError, NotBeforeError)

import jwt, { sign } from 'jsonwebtoken';
import fs from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

const getPrivateKey = async (url: string): Promise<string> => {
  try {
    // fetch private key for later use in jwt functions
    const privateKey = await fs.readFile(url, {encoding: 'utf-8'});
    return privateKey;
  } catch (err) {
    throw err;
  }
}

const signJWT = async (mail: string): Promise<string> => {
  try {
    const token = jwt.sign({mail}, await getPrivateKey(process.env.BASEDIR + '/keys/jwt-private-key.key'), {algorithm: 'RS256', expiresIn: 10});
    return token;
  } catch (err) {
    throw err;
  }
}

const verifyJWT = async (token: string): Promise<boolean> => {
  try {
    const isTokenValid = await jwt.verify(token, await getPrivateKey(process.env.BASEDIR + '/keys/jwt-private-key.key'), {algorithms: ['RS256']});
    return true;
  } catch (err) {
    throw err;
  }
}

export {signJWT, verifyJWT};