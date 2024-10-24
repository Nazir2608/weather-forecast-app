import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setsearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }
    const currentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data) => setData(data));

        })
    }
    return (
        <WeatherContext.Provider value={{ searchCity, data, fetchData, setsearchCity,currentUserLocationData }}>{props.children}</WeatherContext.Provider>
    )
}