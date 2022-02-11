import mongoose from 'mongoose';

const connectDB = async(uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri, {}, (err) => {
      if(err){
        console.log(err);
      }
    })
  } catch (err) {
    throw err;
  }
}

export {connectDB};
