import * as mongoose from 'mongoose';

export const RushingSchema = new mongoose.Schema({
  Player: String,
  Team: String,
  Pos: String,
  Att: Number,
  AttPerG: Number,
  Yds: String,
  Avg: Number,
  YdsPerG: Number,
  TD: Number,
  Lng: String,
  first: Number,
  firstPercentage: Number,
  twentyPlus: Number,
  fortyPlus: Number,
  FUM: Number
});
