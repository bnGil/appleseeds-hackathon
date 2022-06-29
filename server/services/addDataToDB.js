import { Attraction } from "../models/Attraction.model.js";
import { Language } from "../models/Language.model.js";

export const addLanguageDataToDB = async (arrOfObj, languageCode) => {
  try {
    const attractions = await Promise.all(
      arrOfObj.map(async (attraction) => {
        const newAttraction = new Attraction(attraction);
        await newAttraction.save();
        return newAttraction;
      })
    );
    const newLanguage = new Language({ languageCode, attractions });
    await newLanguage.save();
  } catch (err) {
    console.log(err.message);
  }
};
