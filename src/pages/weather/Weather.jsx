import { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const apiWeather = "0f2b8b7394023311a04c0d2b955df119";

  useEffect(() => {
    let isCanceled = false;
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (!isCanceled) {
          setLocation(data);
        }
      })
      .catch((error) => {
        if (error) {
          setLocation({ city: "Error fetching location disable adblock" });
        }
      });
    return () => {
      isCanceled = true;
    };
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiWeather}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          setWeather({ main: { temp: "Error fetching weather" } });
        });
    }
  }, [location]);

  return (
    <>
      <div className="container">
        <h1>Weather for</h1>
        <p>{location.city}</p>
        <div className="data">
          {weather.weather && weather.weather[0] && (
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          )}
          {weather.main && (
            <div>
              <h1>{weather.main.temp}°C</h1>
              {weather.weather && weather.weather[0] && (
                <p>{weather.weather[0].description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
