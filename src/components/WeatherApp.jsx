import Form from "./Header/Form.jsx";
import Forecast from "./Forecast.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import Loading from "./Loading.jsx";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(city = "london") {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}key=${
          import.meta.env.VITE_APP_KEY
        }&q=${city}&days=5&aqi=no&alerts=no`
      );

      const data = await response.json();
      console.log(data);

      setTimeout(setWeatherData({ ...data }), 2000);
    } catch (error) {
      console.log(error);
    }
  }

  function handleGetCity(city) {
    setWeatherData(null);
    fetchData(city);
  }

  return (
    <>
      <Form onGetCity={handleGetCity} />
      <main>
        {weatherData ? (
          <>
            <WeatherInfo weather={weatherData} />
            <Forecast weather={weatherData} />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
