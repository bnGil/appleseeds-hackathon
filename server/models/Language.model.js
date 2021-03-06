import mongoose from "mongoose";

const { Schema } = mongoose;

const LanguageSchema = new Schema({
  languageCode: {
    type: String,
  },
  attractions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attraction",
    },
  ],
});

export const Language = mongoose.model("Language", LanguageSchema);
