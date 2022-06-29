import express from "express";
import {
  getAllAttractions,
  getAttractionByCountry,
} from "../controllers/attractions.controllers.js";

const attractionsRoute = new express.Router();

attractionsRoute.get("/attractions/eng", getAllAttractions);

attractionsRoute.get("/attractions/eng/:country", getAttractionByCountry);

export default attractionsRoute;
