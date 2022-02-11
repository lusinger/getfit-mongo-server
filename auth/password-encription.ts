import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

let saltRounds = 0;

const getSaltRounds = () => {
  saltRounds = parseInt(process.env.SALTROUNDS!) | 10;
  console.log(saltRounds);
}

const encryptPW = async (password: string): Promise<string> => {
  try {
    const encryptedPW = await bcrypt.hash(password, saltRounds);
    return encryptedPW;
  } catch (err) {
    throw err;
  }
}

const comparePW = async (password: string, encrypted: string): Promise<boolean> => {
  try {
    const isPasswordValid = await bcrypt.compare(password, encrypted);
    return isPasswordValid;
  } catch (err) {
    throw err;
  }
}

export {getSaltRounds, encryptPW, comparePW};
