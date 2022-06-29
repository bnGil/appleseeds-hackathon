import mockData from "../routes/mockData.js";

export const getAllAttractions = async (req, res) => {
  try {
    const countries = mockData.map((obj) => {
      return obj;
    });
    res.send(countries);
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
