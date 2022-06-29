import mockData from "../routes/mockData.js";
import { Language } from "../models/Language.model.js";
import { Attraction } from "../models/Attraction.model.js";

export const getAllAttractions = async (req, res) => {
  const { languageCode } = req.params;
  try {
    const { attractions } = await Language.findOne({ languageCode });

    const attractionsObjs = await Attraction.find({
      _id: {
        $in: [...attractions],
      },
    });

    res.status(200).send(attractionsObjs);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAttractionByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const objOfCountryAttractions = mockData.filter((obj) => {
      return obj.country === country;
    });

    res.send(objOfCountryAttractions);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
