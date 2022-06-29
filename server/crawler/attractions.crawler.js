import puppeteer from "puppeteer";


import { translateTerm } from "../API/translateTerm.js";
import { addLanguageDataToDB } from "../services/addDataToDB.js";
import { translateTerm } from "../API/translateTerm.js";

const enArrOfObj = [];
const heArrOfObj = [];
const ruArrOfObj = [];
const arArrOfObj = [];

const languages = ["en", "he", "ar", "ru"];

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

await scrapeAttractions();

const ARRofEng = await scrapeAttractions();
// console.log(ARRofEng);
// scrapeAttractions();

// 1 ==> ToDo
//make hebrew arrOfObj
//make arab arrOfObj
//make russian arrOfObj
//add them to database + english
//  translateTerm()

const translateArrOfObj =async  (languageCode) => {
  const ArrOfHe = ARRofEng.map((obj) => {
    const country =await translateTerm(obj.country, languageCode)
    const attractionName = await translateTerm(obj.attractionName, languageCode)
    const description = await translateTerm(obj.description, languageCode)
  return {

    country,
    attractionName,
    description ,
  }
      
  });
  console.log(ArrOfHe);
};

await translateArrOfObj("he");

// const addTranslatedDataToDB = () => {
//   addLanguageDataToDB(enArrOfObj, "en");
//   addLanguageDataToDB(arArrOfObj, "ar");
//   addLanguageDataToDB(heArrOfObj, "he");
//   addLanguageDataToDB(ruArrOfObj, "ru");
// };

// addTranslatedDataToDB();

