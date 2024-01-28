import { Router } from "express";
import { getDesignQuote, getCatFact } from "../controllers/quotesAPIController.js";
const quotesRoute = Router();

quotesRoute.get("/quotes", async (req, res) => {
  const designQuote = await getDesignQuote();
  const catFact = await getCatFact();
  res.render("quotes", { title: "Quotes API", designQuote, catFact });
});

export default quotesRoute;
