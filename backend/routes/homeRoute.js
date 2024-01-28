import { Router } from "express";
import { getWeatherData } from "../controllers/weatherAPIController.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const homeRoute = Router();

homeRoute.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

export default homeRoute;
