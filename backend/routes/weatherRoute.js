import { Router } from "express";
import { getWeatherData } from "../controllers/weatherAPIController.js";

const weatherRoute = Router();

weatherRoute.get("/weather", async (req, res) => {
  try {
    const weatherData = await getWeatherData("Astana");
    res.render("weather", { weatherData, city: "Astana" });
  } catch (e) {
    console.error(e);
    res.status(500).send("Some error occurred");
  }
});

weatherRoute.post("/weather", async (req, res) => {
  try {
    const city = req.body.city;
    const weatherData = await getWeatherData(city);
    if (weatherData.code === "404") {
      weatherData = await getWeatherData("Astana");
      res.render("weather", {
        weatherData,
        city: "Astana (An invalid city name has been entered)",
      });
    } else {
      res.render("weather", { weatherData, city: city });
    }
    console.log(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

export default weatherRoute;
