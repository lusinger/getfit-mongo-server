import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, 'itemName must be provided'],
    unique: true,
  },
  protein: {
    type: Number,
    required: [true, 'protein value must be provided'],
    min: 0,
    max: 100,
  },
  fat: {
    type: Number,
    required: [true, 'fat value must be provided'],
    min: 0,
    max: 100,
  },
  carb: {
    type: Number,
    required: [true, 'carb value must be provided'],
    min: 0,
    max: 100,
  },
  caloriesPerG: {
    type: Number,
    required: [true, 'caloriesPerG value must be provided'],
    min: 0,
  },
  caloriesPerMl: {
    type: Number,
    required: [true, 'caloriesPerMl value must be provided'],
    min: 0,
  },
  caloriesPerEl: {
    type: Number,
    required: [true, 'caloriesPerEl value must be provided'],
    min: 0,
  },
});

const Item = mongoose.model('Item', ItemSchema);

export {Item};