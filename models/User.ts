import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'userName must be provided'],
    unique: true,
    minlength: 8,
    maxlength: 255,
  },
  mail: {
    type: String,
    required: [true, 'mail must be provided'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password must be provided'],
  },
  fullName: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: [true, 'age must be provided for calculations'],
    min: 10,
    max: 150,
  },
  height: {
    type: Number,
    required: [true, 'height must be provided for calculations'],
    min: 120,
    max: 250,
  },
  currentWeight: {
    type: Number,
    required: [true, 'currentWeight must be provided for calculations'],
    min: 40,
    max: 300,
  },
  targetWeight: {
    type: Number,
    required: [true, 'targetWeight must be provided for calculations'],
    min: 40,
    max: 300,
  },
  changePerWeek: {
    type: Number,
    required: [true, 'changePerWeek must be provided for calculations'],
    enum: [1.2, 1.375, 1.55, 1.725, 1.9],
  },
  gender: {
    type: String,
    required: [true, 'gender must be provided for calculations'],
    enum: ['male', 'female'],
  },
  calorieGoal: {
    type: Number,
    required: false,
  }
});

const User = mongoose.model('User', UserSchema);

export {User};
