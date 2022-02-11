import mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: [true, 'createdAt must be provided'],
    default: Date.now(),
  },
  userId: {
    type: String,
    required: [true, 'userId must point to an existing User']
  },
  contentId: {
    type: String,
    required: [true, 'contentId must point to an existing Item or Recipe'],
  },
  amount: {
    type: Number,
    required: [true, 'amount must be provided for calculations'],
    default: 0,
    min: 0,
  },
  unit: {
    type: String,
    required: [true, 'unit must be provided for calculations'],
    enum: ['g', 'ml', 'EL', 'Pers'],
  },
  section: {
    type: String,
    required: [true, 'section must be an existing section'],
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
  },
  isRecipe: {
    type: Boolean,
    default: false,
  }
});

const Entry = mongoose.model('Entry', EntrySchema);

export {Entry};