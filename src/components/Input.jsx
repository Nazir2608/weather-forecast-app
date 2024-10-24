import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
    const weather = useWeather();
    console.log("weather", weather);

    return (
        <input 
            className="input-field"
            placeholder="Search here"
            value={weather.searchCity || ''}  // Ensure value is never null or undefined
            onChange={(e) => weather.setsearchCity(e.target.value)}
        />
    );
};

export default Input;
