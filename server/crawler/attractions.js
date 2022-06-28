import puppeteer from "puppeteer";
import fs from "fs";

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
  console.log(imageUrls.length);

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

  browser.close();
}

scrapeAttractions();
