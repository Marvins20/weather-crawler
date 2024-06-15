const weatherDTO = (weatherRequest) => {
    console.log(weatherRequest.forecast);
    return {
        city:  weatherRequest.location.name,
        region: weatherRequest.location.region,
        country: weatherRequest.location.country,
        tz_id: weatherRequest.location.tz_id,
        date: new Date(weatherRequest.forecast.forecastday[0].date),
        maxtemp_c:  weatherRequest.forecast.forecastday[0].day.maxtemp_c,
        maxtemp_f: weatherRequest.forecast.forecastday[0].day.maxtemp_f,
        mintemp_c: weatherRequest.forecast.forecastday[0].day.mintemp_c,
        mintemp_f: weatherRequest.forecast.forecastday[0].day.mintemp_f,
        avgtemp_c: weatherRequest.forecast.forecastday[0].day.avgtemp_c,
        avgtemp_f: weatherRequest.forecast.forecastday[0].day.avgtemp_f,
        avghumidity: weatherRequest.forecast.forecastday[0].day.avghumidity,
        totalprecip_mm: weatherRequest.forecast.forecastday[0].day.totalprecip_mm,
        totalprecip_in: weatherRequest.forecast.forecastday[0].day.totalprecip_in,
        totalsnow_cm: weatherRequest.forecast.forecastday[0].day.totalsnow_cm,
        maxwind_mph: weatherRequest.forecast.forecastday[0].day.maxwind_mph,
        maxwind_kph: weatherRequest.forecast.forecastday[0].day.maxwind_kph,
    }
}

export default weatherDTO