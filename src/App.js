import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';


function App() {
  const weather = useWeather();
  console.log("weatherweather", weather);

  useEffect(() => {
    // Get current location and fetch weather data when the component mounts
    weather.currentUserLocationData();
  }, []); // Only run once on component mount

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      {/* Fetch weather data based on user input */}
      <Button className="btn:hover" onClick={weather.fetchData} value="Search" />
      <Card />
      {/* Refresh button to fetch weather data for the current location */}
      <Button className="btn:hover" onClick={weather.currentUserLocationData} value="Refresh" />
    </div>
  );
}

export default App;
