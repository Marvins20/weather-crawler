import weather from "../models/weather.js"
import weatherDTO from "../dto/weatherDTO.js"
import axios from "axios";

class WeatherController {
    static async getForecast( req, res) {

        try {
            const city = req.params.city;
            const startDate = req.params.startDate;
            const finalDate = req.params.finalDate;

            const currentDayWeather = await weather.find({
                city: city
            });

            if(currentDayWeather.length === 0) {
                const real = await WeatherController.requestWeatherForecast(city, 0, 0)
                const realData =  weatherDTO(real.data)
                weather.create(realData)
                res.status(200).json(realData);
            }
            else {
                res.status(200).json(currentDayWeather);
            }
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Não encontrei documento`});
        }
    }

    static async addForecast(req, res) {
        try {
            const newWeather = await weather.create(req.body)
            res.status(201).json({message: "New weather saved", weather:  newWeather});
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - failed to save weather}`});
        }
    }

    static async requestWeatherForecast(city, startDate, endDate) {
        try{
            return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
        } catch(erro) {
            return { message: `${erro.message} - failed to request weather`};
        }
    }
}

export default WeatherController;