const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'

const params = '?unitGroup=metric&include=days&key=6ULYAM2595FXA8AJNCSAUVUG2&contentType=json'


const urls  = {
    cityToday: (city) => `${city}/today/${params}`,
    cityForecast: (city, data1, data2) => `${city}/${data1}/${data2}/${params}`
}

export {
    baseURL,
    urls
}