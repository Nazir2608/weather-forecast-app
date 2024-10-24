const baseURL="https://api.weatherapi.com/v1/current.json?key=90fc2e68ba864c609ba163109242310";

export const getWeatherDataForCity=async(city)=>{
const response=await fetch(`${baseURL}&q=${city}&aqi=yes`);
return response.json();
}
export const getWeatherDataForLocation=async(lat,long)=>{
    const response=await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`);
    return response.json();
    }