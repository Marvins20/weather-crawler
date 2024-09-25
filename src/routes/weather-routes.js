import express from "express"
import WeatherController from "../api/controllers/weather-controller.js"

const routes = express.Router();
console.log("Hello World");
routes.get("/weather/:city/:startDate?/:finalDate?", WeatherController.getForecast);
routes.post("/weather/:city/:startDate/:finalDate", WeatherController.addForecast);

export default routes;