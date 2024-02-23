import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const forecastService = {
    getByCityToday: (city) => apiService.get(urls.cityToday(city)),
    getForecast: (city, data1, data2) => apiService.get(urls.cityForecast(city, data1, data2))
}

export {
    forecastService
}