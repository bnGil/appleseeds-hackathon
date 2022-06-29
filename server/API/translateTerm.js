import axios from "axios";
import "dotenv/config";

const translateTerm = async (term, languageCode) => {
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
    data: `[{"Text":${term}}]`,
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

translateTerm(
  "I would really like to drive your car around the block a few times.",
  "he"
);
