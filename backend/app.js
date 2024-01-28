import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import weatherRoute from "./routes/weatherRoute.js";
import homeRoute from "./routes/homeRoute.js";
import quotesRoute from "./routes/quotesRoute.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", path.join(__dirname, "..", "frontend", "views", "pages"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "frontend", "styles")));

app.use("/", weatherRoute, homeRoute, quotesRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + process.env.PORT || 3000);
});
