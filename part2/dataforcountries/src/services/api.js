import axios from 'axios'
const BASE_URL = import.meta.env.VITE_URL
const WEATHER_URL = import.meta.env.VITE_WEATHER_URL
console.log(WEATHER_URL)

const getAllCountries = () => {
    const request = axios.get(`${BASE_URL}/all`)
    return request.then(response => response.data)
}

const getCountry = (country) => {
    const request = axios.get(`${BASE_URL}/name/${country}`)
    return request.then(response => response.data)
}

const getWeather = (city) => {
    console.log(city)
    const final = `${WEATHER_URL}${city}&aqi=no`
    console.log(final)
    const request = axios.get(final)
    return request.then(response => response.data)
}

export default ({
    getAllCountries, getCountry, getWeather 
})