import axios from "axios";
import "dotenv/config";

async function getWeatherData(city) {
  const response = await axios
    .get(
      `${process.env.OPENWEATHER_API_URL}?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    )
    .then((res) => res.data);
  const weatherData = {
    ...response.coord,
    ...response.main,
    ...response.weather[0],
    wind_speed: response.wind.speed,
    country_abbr: response.sys.country,
    code: response.cod,
    name: response.name,
  };

  return weatherData;
}

export { getWeatherData };
