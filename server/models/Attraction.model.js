import mongoose from "mongoose";

const { Schema } = mongoose;

const AttractionSchema = new Schema({
  country: {
    type: String,
  },
  attractionName: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Attraction = mongoose.model("Attraction", AttractionSchema);
