import axios from "axios";
import "dotenv/config";

// SECOND API
async function getDesignQuote() {
  const designQuotes = await axios
    .get(`${process.env.QUOTESDESIGN_API_URL}`)
    .then((res) => res.data);
  const length = designQuotes.length;
  const randomQuote = designQuotes[Math.floor(Math.random() * length)];
  const quote = {
    title: randomQuote.title.rendered.trim(),
    content: randomQuote.content.rendered.trim(),
  };
  return quote;
}

// THIRT API

async function getCatFact() {
  const catFact = await axios.get(`${process.env.CATFACT_API_URL}`).then((res) => res.data.fact);
  return catFact;
}

export { getDesignQuote, getCatFact };
