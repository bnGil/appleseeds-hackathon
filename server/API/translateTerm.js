import axios from "axios";
import "dotenv/config";
import { isRtlLang } from "rtl-detect";

export const translateTerm = async (term, languageCode) => {
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      "to[0]": languageCode,
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.TRANSLATE_API_KEY,
      "X-RapidAPI-Host": process.env.TRANSLATE_API_HOST,
    },
    data: `[{"Text":"${term}"}]`,
  };

  try {
    const { data } = await axios.request(options);
    const translatedTerm = data[0].translations[0].text;
    if (isRtlLang(languageCode)) {
      return translatedTerm.split("").reverse().join("");
    } else {
      return translatedTerm;
    }
  } catch (err) {
    console.log(err.message);
  }
};
