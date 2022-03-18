import "./App.css";
import AddCity from "./components/AddCity";
import Gettoday from "./components/Gettoday";

import ResultCart from "./components/ResultCart";
import { useState, useEffect } from "react";
import axios from "axios";

const userId = "d7631044ba4bf4bb3aa5844cecf97978";

function App() {
  const [city, setCity] = useState("Ankara");
  const [forecast, setForecast] = useState({});
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
    <div className="App">
      <div className="components">
        <AddCity setCity={setCity} />
        <ResultCart forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
