import "./App.css";
import AddCity from "./components/AddCity";
import Gettoday from "./components/Gettoday";

import ResultCart from "./components/ResultCart";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowTime from "./components/ShowTime";
import Header from "./components/Header";
import Today from "./components/Today";

const userId = "d7631044ba4bf4bb3aa5844cecf97978";

function App() {
  const [city, setCity] = useState("Ankara");
  const [forecast, setForecast] = useState({});
  const background = document.querySelector(".App");
  useEffect(() => {
    (async () => {
      const { data: cityInput } = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${userId}`
      );
      let lat = await cityInput[0].lat;
      let lon = await cityInput[0].lon;
      const { data: cityweather } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${userId}`
      );
      setForecast({
        day: Gettoday,
        city: city,
        temperature: Math.round(cityweather.main.temp - 273),
        main: cityweather.weather[0].main,
        description: cityweather.weather[0].description,
        icon: cityweather.weather[0].icon,
      });
    })();
  }, [city]);

  return (
    <div
      className={
        (forecast.description === "clear sky"
          ? "clearsky"
          : forecast.description === "few clouds"
          ? "fewclouds"
          : forecast.description === "scattered clouds"
          ? "scatteredclouds"
          : forecast.description === "broken clouds"
          ? "brokenclouds"
          : forecast.description === "shower rain"
          ? "showerrain"
          : forecast.description === "rain"
          ? "rain"
          : forecast.description === "thunderstorm"
          ? "thunderstorm"
          : forecast.description === "snow"
          ? "	snow"
          : "mist") + " App"
      }
    >
      <div className="components">
        <Header />
        <Today day={forecast.day} />
        <ShowTime />
        <AddCity setCity={setCity} />
        <ResultCart forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
