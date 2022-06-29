import { Attraction } from "../models/Attraction.model.js";
import { Language } from "../models/Language.model.js";

export const addLanguageDataToDB = (arrOfObj, languageCode) => {
  const attractions = arrOfObj.map((attraction) => new Attraction(attraction));
  const newLanguage = new Language({ languageCode, attractions });
  console.log(newLanguage);
};
