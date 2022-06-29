import mockData from "./mockData.js";
import express from "express";

const app = express();
app.use(express.json());

app.get("/attractions/english", (req, res) => {
  const countries = mockData.map((obj) => {
    return obj;
  });
  res.send(countries);
});

app.get("/attractions/english/:country", (req, res) => {
  const { country } = req.params;
  const objOfCountryAttractions = mockData.filter((obj) => {
    return obj.country === country;
  });

  res.send(objOfCountryAttractions);
});

app.listen(3001, () => {
  console.log(`the server up in port 3001 `);
});
