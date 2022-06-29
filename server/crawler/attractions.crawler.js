import puppeteer from "puppeteer";

import "../db/mongoose.js";
import { translateTerm } from "../API/translateTerm.js";
import { addLanguageDataToDB } from "../services/addDataToDB.js";

async function scrapeAttractions() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.roadaffair.com/best-unesco-world-heritage-sites/"
  );

  const imageUrls = await page.$$eval(
    "article > div.entry-content img",
    (images) =>
      images.map((image) => {
        return image.getAttribute("data-lazy-src");
      })
  );

  const headers = await page.$$eval(
    "#genesis-content > article > div.entry-content > h2",
    (fullHeaders) => fullHeaders.map((fullHeader) => fullHeader.textContent)
  );

  const descriptions = await page.$$eval(
    "#genesis-content > article > div.entry-content > p",
    (paragraphs) => paragraphs.map((paragraph) => paragraph.textContent)
  );
  descriptions.pop();
  descriptions.shift();

  const countries = headers.map((header) => {
    const idxOfLastComma = header.lastIndexOf(",");
    if (idxOfLastComma === -1) {
      const idxOfFirstLet = /[a-z]/i.exec(header).index;
      return header.slice(idxOfFirstLet);
    }
    return header.slice(idxOfLastComma + 2);
  });

  const attractions = headers.map((header) => {
    const idxOfLastComma = header.lastIndexOf(",");
    const idxOfFirstLet = /[a-z]/i.exec(header).index;
    if (idxOfLastComma === -1) {
      return header.slice(idxOfFirstLet);
    }
    return header.slice(idxOfFirstLet, idxOfLastComma);
  });

  const enArrOfObj = [];

  attractions.forEach((attraction, idx) => {
    enArrOfObj[idx] = {
      country: countries[idx],
      attractionName: attraction,
      imageUrl: imageUrls[idx],
      description: descriptions[idx],
    };
  });

  browser.close();
  return enArrOfObj;
}

const ARRofEng = await scrapeAttractions();

const translateArrOfObj = async (languageCode) => {
  const arrOfTranslatedByCode = await Promise.all(
    ARRofEng.map(async (obj) => {
      const country = await translateTerm(obj.country, languageCode);
      const attractionName = await translateTerm(
        obj.attractionName,
        languageCode
      );
      const description = await translateTerm(obj.description, languageCode);
      return {
        imageUrl: obj.imageUrl,
        country,
        attractionName,
        description,
      };
    })
  );

  return arrOfTranslatedByCode;
};

const addTranslatedDataToDB = async () => {
  const arArrOfObj = await translateArrOfObj("ar");
  const heArrOfObj = await translateArrOfObj("he");
  const ruArrOfObj = await translateArrOfObj("ru");
  await addLanguageDataToDB(ARRofEng, "en");
  await addLanguageDataToDB(arArrOfObj, "ar");
  await addLanguageDataToDB(heArrOfObj, "he");
  await addLanguageDataToDB(ruArrOfObj, "ru");
};

await addTranslatedDataToDB();
