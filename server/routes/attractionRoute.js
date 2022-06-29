import express from "express";
import {
  getAllAttractions,
  getAttractionByCountry,
} from "../controllers/attractions.controllers.js";

const attractionsRoute = new express.Router();

attractionsRoute.get("/attractions/:languageCode", getAllAttractions);

attractionsRoute.get(
  "/attractions/:languageCode/:country",
  getAttractionByCountry
);

export default attractionsRoute;
